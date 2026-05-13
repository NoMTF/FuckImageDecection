#!/usr/bin/env python3
"""
core.py — Image Privacy Tool 核心处理逻辑
共享于桌面端(CustomTkinter)和移动端(Kivy)
"""
from __future__ import annotations

import hashlib
import json
import os
import random
import secrets
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from pathlib import Path
from typing import Callable, Optional

try:
    from PIL import Image, ImageChops
except ImportError as exc:
    raise SystemExit("请安装 Pillow: pip install Pillow") from exc

try:
    from PIL import ImageEnhance
except ImportError:  # pragma: no cover - bundled with Pillow in normal builds
    ImageEnhance = None  # type: ignore[assignment]

try:
    import pillow_heif

    pillow_heif.register_heif_opener()
except ImportError:
    pillow_heif = None  # type: ignore[assignment]

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

DEVICE_EXIF_PROFILES: dict[str, dict[str, object]] = {
    "Apple iPhone 16 Pro": {
        "lens_make": "Apple",
        "lens_model": "iPhone 16 Pro back triple camera 6.86mm f/1.78",
        "focal_length": 6.86,
        "f_number": 1.78,
        "exposure": (1, 60),
        "iso": 64,
    },
    "Apple iPhone 15 Pro": {
        "lens_make": "Apple",
        "lens_model": "iPhone 15 Pro back triple camera 6.86mm f/1.78",
        "focal_length": 6.86,
        "f_number": 1.78,
        "exposure": (1, 60),
        "iso": 64,
    },
    "Apple iPhone 14": {
        "lens_make": "Apple",
        "lens_model": "iPhone 14 back dual wide camera 5.70mm f/1.50",
        "focal_length": 5.70,
        "f_number": 1.50,
        "exposure": (1, 60),
        "iso": 80,
    },
    "Apple iPhone 13": {
        "lens_make": "Apple",
        "lens_model": "iPhone 13 back dual wide camera 5.10mm f/1.60",
        "focal_length": 5.10,
        "f_number": 1.60,
        "exposure": (1, 60),
        "iso": 80,
    },
    "小米 15 Ultra": {
        "lens_make": "Xiaomi",
        "lens_model": "Xiaomi 15 Ultra back camera 8.70mm f/1.63",
        "focal_length": 8.70,
        "f_number": 1.63,
        "exposure": (1, 50),
        "iso": 100,
    },
    "小米 14 Ultra": {
        "lens_make": "Xiaomi",
        "lens_model": "Xiaomi 14 Ultra back camera 8.63mm f/1.63",
        "focal_length": 8.63,
        "f_number": 1.63,
        "exposure": (1, 50),
        "iso": 100,
    },
    "小米 14": {
        "lens_make": "Xiaomi",
        "lens_model": "Xiaomi 14 back camera 6.90mm f/1.60",
        "focal_length": 6.90,
        "f_number": 1.60,
        "exposure": (1, 50),
        "iso": 100,
    },
    "华为 Mate 70 Pro": {
        "lens_make": "HUAWEI",
        "lens_model": "HUAWEI Mate 70 Pro back camera 6.35mm f/1.40",
        "focal_length": 6.35,
        "f_number": 1.40,
        "exposure": (1, 50),
        "iso": 100,
    },
    "华为 Mate 60 Pro": {
        "lens_make": "HUAWEI",
        "lens_model": "HUAWEI Mate 60 Pro back camera 6.35mm f/1.40",
        "focal_length": 6.35,
        "f_number": 1.40,
        "exposure": (1, 50),
        "iso": 100,
    },
    "OPPO Find X8 Pro": {
        "lens_make": "OPPO",
        "lens_model": "OPPO Find X8 Pro back camera 6.06mm f/1.60",
        "focal_length": 6.06,
        "f_number": 1.60,
        "exposure": (1, 50),
        "iso": 100,
    },
    "三星 Galaxy S25 Ultra": {
        "lens_make": "samsung",
        "lens_model": "Samsung Galaxy S25 Ultra back camera 6.30mm f/1.70",
        "focal_length": 6.30,
        "f_number": 1.70,
        "exposure": (1, 60),
        "iso": 80,
    },
    "三星 Galaxy S24": {
        "lens_make": "samsung",
        "lens_model": "Samsung Galaxy S24 back camera 5.40mm f/1.80",
        "focal_length": 5.40,
        "f_number": 1.80,
        "exposure": (1, 60),
        "iso": 80,
    },
    "Google Pixel 9 Pro": {
        "lens_make": "Google",
        "lens_model": "Pixel 9 Pro back camera 6.90mm f/1.68",
        "focal_length": 6.90,
        "f_number": 1.68,
        "exposure": (1, 60),
        "iso": 70,
    },
    "Google Pixel 8 Pro": {
        "lens_make": "Google",
        "lens_model": "Pixel 8 Pro back camera 6.90mm f/1.68",
        "focal_length": 6.90,
        "f_number": 1.68,
        "exposure": (1, 60),
        "iso": 70,
    },
    "索尼 ILCE-7RM5 (A7R5)": {
        "lens_make": "SONY",
        "lens_model": "FE 50mm F1.8",
        "focal_length": 50.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "索尼 ILCE-7M3 (A7M3)": {
        "lens_make": "SONY",
        "lens_model": "FE 35mm F1.8",
        "focal_length": 35.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "尼康 Z 9": {
        "lens_make": "NIKON",
        "lens_model": "NIKKOR Z 50mm f/1.8 S",
        "focal_length": 50.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "尼康 Z 6III": {
        "lens_make": "NIKON",
        "lens_model": "NIKKOR Z 35mm f/1.8 S",
        "focal_length": 35.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "佳能 EOS R5 Mark II": {
        "lens_make": "Canon",
        "lens_model": "RF50mm F1.8 STM",
        "focal_length": 50.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "佳能 EOS R6": {
        "lens_make": "Canon",
        "lens_model": "RF35mm F1.8 MACRO IS STM",
        "focal_length": 35.0,
        "f_number": 1.80,
        "exposure": (1, 125),
        "iso": 100,
    },
    "富士 X-T5": {
        "lens_make": "FUJIFILM",
        "lens_model": "XF35mmF1.4 R",
        "focal_length": 35.0,
        "f_number": 1.40,
        "exposure": (1, 125),
        "iso": 125,
    },
    "富士 GFX 100S II": {
        "lens_make": "FUJIFILM",
        "lens_model": "GF63mmF2.8 R WR",
        "focal_length": 63.0,
        "f_number": 2.80,
        "exposure": (1, 125),
        "iso": 125,
    },
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
    randomize_timestamp: bool = True
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
        mtime = datetime.fromtimestamp(self.output_path.stat().st_mtime).strftime(
            "%Y-%m-%d %H:%M:%S"
        )
        lines = [
            f"输出文件 : {self.output_path}",
            f"输出修改时间: {mtime}",
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


def _to_rational(value: float, scale: int = 100) -> tuple[int, int]:
    return (int(round(value * scale)), scale)


def _random_capture_time() -> datetime:
    days = random.randint(1, 180)
    seconds = random.randint(0, 24 * 60 * 60 - 1)
    return datetime.now().astimezone() - timedelta(days=days, seconds=seconds)


def _format_exif_time(dt: datetime) -> str:
    return dt.strftime("%Y:%m:%d %H:%M:%S")


def _format_exif_offset(dt: datetime) -> str:
    offset = dt.strftime("%z")
    if len(offset) == 5:
        return f"{offset[:3]}:{offset[3:]}"
    return "+00:00"


def _encode_text(value: object) -> bytes:
    return str(value).encode("utf-8", "ignore")


def _set_tag(ifd: dict, tag: object, value: object) -> None:
    if tag is not None:
        ifd[tag] = value


def _device_profile(device_name: str) -> dict[str, object]:
    profile = dict(DEVICE_EXIF_PROFILES.get(device_name, {}))
    make, model = DEVICE_PRESETS.get(device_name, ("Apple", "iPhone 15 Pro"))
    profile.setdefault("make", make)
    profile.setdefault("model", model)
    profile.setdefault("lens_make", make)
    profile.setdefault("lens_model", f"{model} back camera")
    profile.setdefault("focal_length", 6.0)
    profile.setdefault("f_number", 1.8)
    profile.setdefault("exposure", (1, 60))
    profile.setdefault("iso", 100)
    return profile


def _build_exif_bytes(opts: ProcessOptions, capture_time: Optional[datetime]) -> bytes:
    zeroth_ifd: dict = {}
    exif_ifd:   dict = {}
    gps_ifd:    dict = {}

    if not opts.strip_exif:
        profile = _device_profile(opts.device_name)
        make = profile["make"]
        model = profile["model"]
        lens_make = profile["lens_make"]
        lens_model = profile["lens_model"]

        zeroth_ifd[piexif.ImageIFD.Make] = _encode_text(make)
        zeroth_ifd[piexif.ImageIFD.Model] = _encode_text(model)
        zeroth_ifd[piexif.ImageIFD.Software] = b"Image Metadata Modifier"

        if capture_time:
            exif_time = _format_exif_time(capture_time)
            offset = _format_exif_offset(capture_time)
            zeroth_ifd[piexif.ImageIFD.DateTime] = exif_time.encode()
            exif_ifd[piexif.ExifIFD.DateTimeOriginal] = exif_time.encode()
            exif_ifd[piexif.ExifIFD.DateTimeDigitized] = exif_time.encode()
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTime", 36880), offset.encode())
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTimeOriginal", 36881), offset.encode())
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTimeDigitized", 36882), offset.encode())

        exif_ifd[piexif.ExifIFD.LensMake] = _encode_text(lens_make)
        exif_ifd[piexif.ExifIFD.LensModel] = _encode_text(lens_model)
        exif_ifd[piexif.ExifIFD.ExifVersion] = b"0232"
        exif_ifd[piexif.ExifIFD.FlashpixVersion] = b"0100"
        exif_ifd[piexif.ExifIFD.ColorSpace] = 1
        exif_ifd[piexif.ExifIFD.FNumber] = _to_rational(float(profile["f_number"]))
        exif_ifd[piexif.ExifIFD.FocalLength] = _to_rational(float(profile["focal_length"]))
        exif_ifd[piexif.ExifIFD.FocalLengthIn35mmFilm] = int(
            round(float(profile["focal_length"]) * 4)
        )
        exposure = profile["exposure"]
        if isinstance(exposure, tuple) and len(exposure) == 2:
            exif_ifd[piexif.ExifIFD.ExposureTime] = exposure
        exif_ifd[piexif.ExifIFD.ISOSpeedRatings] = int(profile["iso"])

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
            if capture_time:
                gps_ifd[piexif.GPSIFD.GPSDateStamp] = capture_time.strftime("%Y:%m:%d").encode()
                gps_ifd[piexif.GPSIFD.GPSTimeStamp] = (
                    (capture_time.hour, 1),
                    (capture_time.minute, 1),
                    (capture_time.second, 1),
                )

        # Hidden note + optional nonce
        payload = opts.hidden_note.strip()
        unique_id = secrets.token_hex(16)
        if opts.randomize_metadata:
            payload = f"{payload} nonce={secrets.token_hex(8)}".strip()
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "BodySerialNumber", 42033),
                secrets.token_hex(8).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "LensSerialNumber", 42037),
                secrets.token_hex(8).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "ImageUniqueID", 42016),
                unique_id.encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTime", 37520),
                str(random.randint(0, 999)).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTimeOriginal", 37521),
                str(random.randint(0, 999)).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTimeDigitized", 37522),
                str(random.randint(0, 999)).encode(),
            )
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


def _apply_perceptual_tweak(base: Image.Image, attempt: int) -> Image.Image:
    img = base.copy()
    if attempt >= 1:
        corner = img.getpixel((0, 0))
        angle = 0.12 * (attempt + 1)
        if attempt % 2:
            angle = -angle
        img = img.rotate(
            angle,
            resample=Image.Resampling.BICUBIC,
            expand=False,
            fillcolor=corner,
        )
    if attempt >= 2:
        crop = min(attempt, max(1, img.width // 200), max(1, img.height // 200))
        img = img.crop((crop, 0, img.width, img.height - crop))
        img = img.resize((base.width, base.height), Image.Resampling.LANCZOS)
    if attempt >= 4 and ImageEnhance is not None:
        img = ImageEnhance.Contrast(img).enhance(1.006)

    rgb = img.convert("RGB")
    if attempt >= 1:
        strength = min(14, 4 + attempt * 2)
        height = max(1, rgb.height - 1)
        gradient = Image.new("L", (1, rgb.height))
        gradient.putdata(
            [
                max(0, min(255, 128 + round(((y / height) * 2 - 1) * strength)))
                for y in range(rgb.height)
            ]
        )
        gradient = gradient.resize(rgb.size)
        bias = Image.merge("RGB", (gradient, gradient, gradient))
        rgb = ImageChops.add(rgb, bias, scale=1.0, offset=-128)

    px = rgb.load()
    step_x = max(1, rgb.width // 28)
    step_y = max(1, rgb.height // 28)
    strength = min(4, attempt + 1)
    for y in range(step_y // 2, rgb.height, step_y):
        for x in range(step_x // 2, rgb.width, step_x):
            r, g, b = px[x, y]
            delta = strength if ((x + y + attempt) % 2 == 0) else -strength
            channel = (x // step_x + y // step_y + attempt) % 3
            if channel == 0:
                r = max(0, min(255, r + delta))
            elif channel == 1:
                g = max(0, min(255, g + delta))
            else:
                b = max(0, min(255, b + delta))
            px[x, y] = (r, g, b)
    return rgb


def _save_output(img: Image.Image, opts: ProcessOptions, exif_bytes: bytes) -> None:
    fmt = opts.output_format.upper()
    save_kwargs: dict[str, object] = {}
    if not opts.strip_exif:
        save_kwargs["exif"] = exif_bytes

    if fmt in {"JPEG", "JPG"}:
        img.convert("RGB").save(
            opts.dst,
            format="JPEG",
            quality=opts.jpeg_quality,
            optimize=True,
            **save_kwargs,
        )
    elif fmt == "PNG":
        img.save(opts.dst, format="PNG", optimize=True, **save_kwargs)
    elif fmt == "WEBP":
        img.save(opts.dst, format="WEBP", quality=opts.jpeg_quality, **save_kwargs)
    else:
        img.convert("RGB").save(
            opts.dst,
            format="JPEG",
            quality=opts.jpeg_quality,
            optimize=True,
            **save_kwargs,
        )


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

    _prog(0.25, "像素处理…")
    capture_time = _random_capture_time() if opts.randomize_timestamp else datetime.now().astimezone()

    _prog(0.50, "构建 EXIF 数据…")
    exif_bytes = _build_exif_bytes(opts, capture_time)

    _prog(0.70, "保存输出文件…")
    max_attempts = 6 if opts.tweak_phash and imagehash is not None else 1
    dst_phash = src_phash
    for attempt in range(max_attempts):
        working = _apply_perceptual_tweak(rgb, attempt) if opts.tweak_phash else rgb
        _save_output(working, opts, exif_bytes)
        if opts.randomize_timestamp and capture_time:
            ts = capture_time.timestamp()
            os.utime(opts.dst, (ts, ts))
        _prog(0.85, "计算哈希值…")
        with Image.open(opts.dst) as out_img:
            dst_phash = _phash(out_img)
        if not opts.tweak_phash or imagehash is None or dst_phash != src_phash:
            break

    result = ProcessResult(
        output_path=opts.dst,
        src_sha256 =_sha256_file(opts.src),
        dst_sha256 =_sha256_file(opts.dst),
        src_phash  =src_phash,
        dst_phash  =dst_phash,
    )
    _prog(1.0, "处理完成 ✓")
    return result


IMAGE_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".tif", ".heic", ".heif"
}


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
            randomize_timestamp= opts_template.randomize_timestamp,
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
