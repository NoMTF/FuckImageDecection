#!/usr/bin/env python3
"""
core.py — Image Privacy Tool 核心处理逻辑
共享于桌面端(CustomTkinter)和移动端(Kivy)
"""
from __future__ import annotations

import hashlib
import json
import random
import secrets
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

try:
    from PIL import Image
except ImportError as exc:
    raise SystemExit("请安装 Pillow: pip install Pillow") from exc

try:
    import piexif
except ImportError as exc:
    raise SystemExit("请安装 piexif: pip install piexif") from exc

try:
    import imagehash
except ImportError:
    imagehash = None  # type: ignore[assignment]

# ---------------------------------------------------------------------------
# Presets
# ---------------------------------------------------------------------------

GPS_PRESETS: dict[str, tuple[float, float]] = {
    "中国·山东":          (36.6512,  117.1201),
    "中国·北京":          (39.9042,  116.4074),
    "中国·上海":          (31.2304,  121.4737),
    "中国·深圳":          (22.5431,  114.0579),
    "中国·成都":          (30.5728,  104.0668),
    "中国·广州":          (23.1291,  113.2644),
    "中国·杭州":          (30.2741,  120.1551),
    "中国·武汉":          (30.5928,  114.3055),
    "日本·东京":          (35.6762,  139.6503),
    "日本·大阪":          (34.6937,  135.5023),
    "韩国·首尔":          (37.5665,  126.9780),
    "新加坡":             ( 1.3521,  103.8198),
    "泰国·曼谷":          (13.7563,  100.5018),
    "澳大利亚·墨尔本":    (-37.8136, 144.9631),
    "澳大利亚·悉尼":      (-33.8688, 151.2093),
    "美国·纽约":          (40.7128,  -74.0060),
    "美国·洛杉矶":        (34.0522, -118.2437),
    "美国·旧金山":        (37.7749, -122.4194),
    "英国·伦敦":          (51.5074,   -0.1278),
    "法国·巴黎":          (48.8566,    2.3522),
    "德国·柏林":          (52.5200,   13.4050),
    "意大利·罗马":        (41.9028,   12.4964),
    "俄罗斯·莫斯科":      (55.7558,   37.6173),
    "巴西·圣保罗":        (-23.5505,  -46.6333),
}

DEVICE_PRESETS: dict[str, tuple[str, str]] = {
    "Apple iPhone 16 Pro":      ("Apple",    "iPhone 16 Pro"),
    "Apple iPhone 15 Pro":      ("Apple",    "iPhone 15 Pro"),
    "Apple iPhone 14":          ("Apple",    "iPhone 14"),
    "Apple iPhone 13":          ("Apple",    "iPhone 13"),
    "小米 15 Ultra":            ("Xiaomi",   "Xiaomi 15 Ultra"),
    "小米 14 Ultra":            ("Xiaomi",   "Xiaomi 14 Ultra"),
    "小米 14":                  ("Xiaomi",   "Xiaomi 14"),
    "华为 Mate 70 Pro":         ("HUAWEI",   "HUA-AL00"),
    "华为 Mate 60 Pro":         ("HUAWEI",   "ALN-AL00"),
    "OPPO Find X8 Pro":         ("OPPO",     "PHX110"),
    "三星 Galaxy S25 Ultra":    ("samsung",  "SM-S9380"),
    "三星 Galaxy S24":          ("samsung",  "SM-S9210"),
    "Google Pixel 9 Pro":       ("Google",   "Pixel 9 Pro"),
    "Google Pixel 8 Pro":       ("Google",   "Pixel 8 Pro"),
    "索尼 ILCE-7RM5 (A7R5)":   ("SONY",     "ILCE-7RM5"),
    "索尼 ILCE-7M3 (A7M3)":    ("SONY",     "ILCE-7M3"),
    "尼康 Z 9":                 ("NIKON",    "NIKON Z 9"),
    "尼康 Z 6III":              ("NIKON",    "NIKON Z 6_3"),
    "佳能 EOS R5 Mark II":      ("Canon",    "Canon EOS R5m2"),
    "佳能 EOS R6":              ("Canon",    "Canon EOS R6"),
    "富士 X-T5":                ("FUJIFILM", "X-T5"),
    "富士 GFX 100S II":         ("FUJIFILM", "GFX100S II"),
}

# ---------------------------------------------------------------------------
# Data classes
# ---------------------------------------------------------------------------

@dataclass
class ProcessOptions:
    src: Path
    dst: Path
    gps_name: str          = "中国·北京"
    device_name: str       = "Apple iPhone 15 Pro"
    custom_lat: Optional[float] = None
    custom_lon: Optional[float] = None
    hidden_note: str       = ""
    tweak_phash: bool      = True
    randomize_metadata: bool = True
    strip_exif: bool       = False
    jpeg_quality: int      = 95
    output_format: str     = "JPEG"   # JPEG | PNG | WEBP


@dataclass
class ProcessResult:
    output_path: Path
    src_sha256: str
    dst_sha256: str
    src_phash: str
    dst_phash: str
    hash_changed: bool = field(init=False)
    phash_changed: bool = field(init=False)

    def __post_init__(self) -> None:
        self.hash_changed  = self.src_sha256 != self.dst_sha256
        self.phash_changed = self.src_phash  != self.dst_phash

    def summary(self) -> str:
        lines = [
            f"输出文件 : {self.output_path}",
            f"源 SHA256 : {self.src_sha256}",
            f"输出 SHA256: {self.dst_sha256}",
            f"  → {'✓ 已改变' if self.hash_changed else '✗ 未改变'}",
            f"源 pHash  : {self.src_phash}",
            f"输出 pHash : {self.dst_phash}",
            f"  → {'✓ 已改变' if self.phash_changed else '✗ 未改变'}",
        ]
        return "\n".join(lines)


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------

def _deg_to_dms_rational(deg_float: float):
    deg_abs = abs(deg_float)
    deg     = int(deg_abs)
    min_f   = (deg_abs - deg) * 60
    minute  = int(min_f)
    sec     = round((min_f - minute) * 60 * 100)
    return ((deg, 1), (minute, 1), (sec, 100))


def _build_exif_bytes(opts: ProcessOptions) -> bytes:
    zeroth_ifd: dict = {}
    exif_ifd:   dict = {}
    gps_ifd:    dict = {}

    if not opts.strip_exif:
        # Device
        if opts.device_name in DEVICE_PRESETS:
            make, model = DEVICE_PRESETS[opts.device_name]
            zeroth_ifd[piexif.ImageIFD.Make]  = make.encode()
            zeroth_ifd[piexif.ImageIFD.Model] = model.encode()

        # GPS — custom coords take priority over preset
        lat = lon = None
        if opts.custom_lat is not None and opts.custom_lon is not None:
            lat, lon = opts.custom_lat, opts.custom_lon
        elif opts.gps_name in GPS_PRESETS:
            lat, lon = GPS_PRESETS[opts.gps_name]

        if lat is not None and lon is not None:
            gps_ifd[piexif.GPSIFD.GPSLatitudeRef]  = b"N" if lat >= 0 else b"S"
            gps_ifd[piexif.GPSIFD.GPSLatitude]     = _deg_to_dms_rational(lat)
            gps_ifd[piexif.GPSIFD.GPSLongitudeRef] = b"E" if lon >= 0 else b"W"
            gps_ifd[piexif.GPSIFD.GPSLongitude]    = _deg_to_dms_rational(lon)

        # Hidden note + optional nonce
        payload = opts.hidden_note.strip()
        if opts.randomize_metadata:
            payload = f"{payload} nonce={secrets.token_hex(8)}".strip()
        if payload:
            exif_ifd[piexif.ExifIFD.UserComment] = (
                b"ASCII\x00\x00\x00" + payload.encode("utf-8", "ignore")
            )

    return piexif.dump(
        {"0th": zeroth_ifd, "Exif": exif_ifd, "GPS": gps_ifd, "1st": {}, "thumbnail": None}
    )


def _sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def _phash(img: Image.Image) -> str:
    if imagehash is None:
        return "N/A (未安装 ImageHash)"
    return str(imagehash.phash(img.convert("RGB")))


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def process_image(
    opts: ProcessOptions,
    progress_cb: Optional[Callable[[float, str], None]] = None,
) -> ProcessResult:
    """Process a single image. progress_cb(fraction 0-1, status_text)."""

    def _prog(frac: float, msg: str) -> None:
        if progress_cb:
            progress_cb(frac, msg)

    _prog(0.05, "读取源图像…")
    with Image.open(opts.src) as im:
        src_phash = _phash(im)
        rgb = im.convert("RGB")
        fmt_hint = (im.format or "JPEG").upper()

    _prog(0.25, "像素处理…")
    if opts.tweak_phash:
        px = rgb.load()
        x = random.randint(0, rgb.width  - 1)
        y = random.randint(0, rgb.height - 1)
        r, g, b = px[x, y]
        ch = random.randint(0, 2)
        d  = random.choice((-1, 1))
        if ch == 0:
            r = max(0, min(255, r + d))
        elif ch == 1:
            g = max(0, min(255, g + d))
        else:
            b = max(0, min(255, b + d))
        px[x, y] = (r, g, b)

    _prog(0.50, "构建 EXIF 数据…")
    exif_bytes = _build_exif_bytes(opts)

    _prog(0.70, "保存输出文件…")
    fmt = opts.output_format.upper()
    if fmt in {"JPEG", "JPG"}:
        rgb.save(opts.dst, format="JPEG", quality=opts.jpeg_quality,
                 exif=exif_bytes, optimize=True)
    elif fmt == "PNG":
        rgb.save(opts.dst, format="PNG", optimize=True)
    elif fmt == "WEBP":
        rgb.save(opts.dst, format="WEBP", quality=opts.jpeg_quality,
                 exif=exif_bytes)
    else:
        rgb.save(opts.dst, format="JPEG", quality=opts.jpeg_quality,
                 exif=exif_bytes, optimize=True)

    _prog(0.85, "计算哈希值…")
    with Image.open(opts.dst) as out_img:
        dst_phash = _phash(out_img)

    result = ProcessResult(
        output_path=opts.dst,
        src_sha256 =_sha256_file(opts.src),
        dst_sha256 =_sha256_file(opts.dst),
        src_phash  =src_phash,
        dst_phash  =dst_phash,
    )
    _prog(1.0, "处理完成 ✓")
    return result


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".tif"}


def batch_process(
    src_paths: list[Path],
    dst_dir: Path,
    opts_template: ProcessOptions,
    progress_cb: Optional[Callable[[int, int, str], None]] = None,
) -> list[tuple[Path, Optional[ProcessResult], Optional[Exception]]]:
    """
    Batch process a list of image paths.
    Returns list of (src_path, result_or_None, error_or_None).
    progress_cb(current_index, total, filename)
    """
    results = []
    total = len(src_paths)
    ext_map = {"JPEG": ".jpg", "PNG": ".png", "WEBP": ".webp"}

    for i, src_file in enumerate(src_paths):
        if progress_cb:
            progress_cb(i, total, src_file.name)

        out_ext = ext_map.get(opts_template.output_format.upper(), ".jpg")
        dst_file = dst_dir / (src_file.stem + "_privacy" + out_ext)

        item_opts = ProcessOptions(
            src=src_file,
            dst=dst_file,
            gps_name          = opts_template.gps_name,
            device_name       = opts_template.device_name,
            custom_lat        = opts_template.custom_lat,
            custom_lon        = opts_template.custom_lon,
            hidden_note       = opts_template.hidden_note,
            tweak_phash       = opts_template.tweak_phash,
            randomize_metadata= opts_template.randomize_metadata,
            strip_exif        = opts_template.strip_exif,
            jpeg_quality      = opts_template.jpeg_quality,
            output_format     = opts_template.output_format,
        )
        try:
            r = process_image(item_opts)
            results.append((src_file, r, None))
        except Exception as exc:
            results.append((src_file, None, exc))

    if progress_cb:
        progress_cb(total, total, "批量处理完成")

    return results


# ---------------------------------------------------------------------------
# Settings persistence
# ---------------------------------------------------------------------------

_DEFAULT_CONFIG_PATH = Path.home() / ".config" / "image_privacy_tool" / "settings.json"


def load_settings(path: Path = _DEFAULT_CONFIG_PATH) -> dict:
    if path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {}


def save_settings(data: dict, path: Path = _DEFAULT_CONFIG_PATH) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
