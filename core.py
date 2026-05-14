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

ADVANCED_METADATA_FIELDS: list[dict[str, str]] = [
    {"key": "software", "label": "软件 Software", "placeholder": "Image Metadata Modifier", "description": "写入导出软件名，常被平台用于来源判断。"},
    {"key": "host_computer", "label": "主机 HostComputer", "placeholder": "iPhone / MacBook / Workstation", "description": "写入处理设备或主机名。"},
    {"key": "artist", "label": "作者 Artist", "placeholder": "匿名作者", "description": "写入作者或创建者。"},
    {"key": "copyright", "label": "版权 Copyright", "placeholder": "Copyright 2026", "description": "写入版权声明。"},
    {"key": "image_description", "label": "描述 ImageDescription", "placeholder": "图片描述", "description": "写入图片描述。"},
    {"key": "make", "label": "设备品牌 Make", "placeholder": "Apple", "description": "覆盖拍摄设备厂商。"},
    {"key": "model", "label": "设备型号 Model", "placeholder": "iPhone 15 Pro", "description": "覆盖拍摄设备型号。"},
    {"key": "lens_make", "label": "镜头品牌 LensMake", "placeholder": "Apple", "description": "覆盖镜头厂商，应和设备匹配。"},
    {"key": "lens_model", "label": "镜头型号 LensModel", "placeholder": "iPhone back camera 6.86mm f/1.78", "description": "覆盖镜头型号，应和设备匹配。"},
    {"key": "lens_serial", "label": "镜头序列号 LensSerialNumber", "placeholder": "随机十六进制", "description": "写入镜头序列号。"},
    {"key": "body_serial", "label": "机身序列号 BodySerialNumber", "placeholder": "随机十六进制", "description": "写入机身序列号。"},
    {"key": "image_unique_id", "label": "图像唯一 ID ImageUniqueID", "placeholder": "32 位十六进制", "description": "写入图像唯一标识。"},
    {"key": "datetime", "label": "通用时间 DateTime", "placeholder": "2026:05:14 12:30:00", "description": "写入 0th DateTime。"},
    {"key": "datetime_original", "label": "拍摄时间 DateTimeOriginal", "placeholder": "2026:05:14 12:30:00", "description": "写入原始拍摄时间。"},
    {"key": "datetime_digitized", "label": "数字化时间 DateTimeDigitized", "placeholder": "2026:05:14 12:30:00", "description": "写入数字化时间。"},
    {"key": "offset_time", "label": "时区 OffsetTime", "placeholder": "+08:00", "description": "写入时间时区偏移。"},
    {"key": "subsec_time", "label": "亚秒 SubSecTime", "placeholder": "001-999", "description": "写入秒以下时间片段。"},
    {"key": "exposure_time", "label": "快门 ExposureTime", "placeholder": "1/120", "description": "写入快门速度。"},
    {"key": "f_number", "label": "光圈 FNumber", "placeholder": "1.8", "description": "写入光圈值。"},
    {"key": "focal_length", "label": "焦距 FocalLength", "placeholder": "6.86", "description": "写入实际焦距。"},
    {"key": "focal_length_35mm", "label": "等效焦距 35mm", "placeholder": "24", "description": "写入 35mm 等效焦距。"},
    {"key": "iso", "label": "ISO PhotographicSensitivity", "placeholder": "64", "description": "写入感光度。"},
    {"key": "exposure_program", "label": "曝光程序 ExposureProgram", "placeholder": "2", "description": "写入曝光程序编号。"},
    {"key": "exposure_mode", "label": "曝光模式 ExposureMode", "placeholder": "0", "description": "写入曝光模式编号。"},
    {"key": "metering_mode", "label": "测光 MeteringMode", "placeholder": "5", "description": "写入测光模式。"},
    {"key": "white_balance", "label": "白平衡 WhiteBalance", "placeholder": "0", "description": "写入白平衡模式。"},
    {"key": "flash", "label": "闪光 Flash", "placeholder": "16", "description": "写入闪光灯状态。"},
    {"key": "scene_capture_type", "label": "场景 SceneCaptureType", "placeholder": "0", "description": "写入拍摄场景类型。"},
    {"key": "digital_zoom_ratio", "label": "数码变焦 DigitalZoomRatio", "placeholder": "1.0", "description": "写入数码变焦倍率。"},
    {"key": "sensing_method", "label": "传感器 SensingMethod", "placeholder": "2", "description": "写入传感器类型。"},
    {"key": "gps_altitude", "label": "GPS 海拔", "placeholder": "35.5", "description": "写入海拔，单位米。"},
    {"key": "gps_img_direction", "label": "GPS 拍摄朝向", "placeholder": "0-359.99", "description": "写入镜头朝向角度。"},
    {"key": "gps_speed", "label": "GPS 速度", "placeholder": "0.0", "description": "写入移动速度，单位 km/h。"},
]

MOBILE_ADVANCED_METADATA_KEYS = [
    "software",
    "host_computer",
    "artist",
    "copyright",
    "image_description",
    "lens_make",
    "lens_model",
    "exposure_time",
    "f_number",
    "focal_length",
    "iso",
    "gps_altitude",
    "gps_img_direction",
    "gps_speed",
]

EDITABLE_EXIF_TAGS: dict[tuple[str, str], str] = {
    ("0th", "Software"): "software",
    ("0th", "HostComputer"): "host_computer",
    ("0th", "Artist"): "artist",
    ("0th", "Copyright"): "copyright",
    ("0th", "ImageDescription"): "image_description",
    ("0th", "Make"): "make",
    ("0th", "Model"): "model",
    ("0th", "DateTime"): "datetime",
    ("Exif", "LensMake"): "lens_make",
    ("Exif", "LensModel"): "lens_model",
    ("Exif", "LensSerialNumber"): "lens_serial",
    ("Exif", "BodySerialNumber"): "body_serial",
    ("Exif", "ImageUniqueID"): "image_unique_id",
    ("Exif", "DateTimeOriginal"): "datetime_original",
    ("Exif", "DateTimeDigitized"): "datetime_digitized",
    ("Exif", "OffsetTime"): "offset_time",
    ("Exif", "OffsetTimeOriginal"): "offset_time",
    ("Exif", "OffsetTimeDigitized"): "offset_time",
    ("Exif", "SubSecTime"): "subsec_time",
    ("Exif", "SubSecTimeOriginal"): "subsec_time",
    ("Exif", "SubSecTimeDigitized"): "subsec_time",
    ("Exif", "ExposureTime"): "exposure_time",
    ("Exif", "FNumber"): "f_number",
    ("Exif", "FocalLength"): "focal_length",
    ("Exif", "FocalLengthIn35mmFilm"): "focal_length_35mm",
    ("Exif", "ISOSpeedRatings"): "iso",
    ("Exif", "PhotographicSensitivity"): "iso",
    ("Exif", "ExposureProgram"): "exposure_program",
    ("Exif", "ExposureMode"): "exposure_mode",
    ("Exif", "MeteringMode"): "metering_mode",
    ("Exif", "WhiteBalance"): "white_balance",
    ("Exif", "Flash"): "flash",
    ("Exif", "SceneCaptureType"): "scene_capture_type",
    ("Exif", "DigitalZoomRatio"): "digital_zoom_ratio",
    ("Exif", "SensingMethod"): "sensing_method",
    ("Exif", "UserComment"): "hidden_note",
    ("GPS", "GPSAltitude"): "gps_altitude",
    ("GPS", "GPSImgDirection"): "gps_img_direction",
    ("GPS", "GPSSpeed"): "gps_speed",
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
    random_extra_metadata: bool = True
    metadata_overrides: dict[str, str] = field(default_factory=dict)
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


def _rational_to_float(value: object) -> Optional[float]:
    if isinstance(value, tuple) and len(value) == 2:
        numerator, denominator = value
        try:
            denominator = float(denominator)
            if denominator == 0:
                return None
            return float(numerator) / denominator
        except (TypeError, ValueError):
            return None
    if isinstance(value, list) and len(value) == 2:
        return _rational_to_float(tuple(value))
    return _parse_float(value)


def _rational_to_display(value: object, decimals: int = 4) -> str:
    number = _rational_to_float(value)
    if number is None:
        return str(value)
    text = f"{number:.{decimals}f}".rstrip("0").rstrip(".")
    return text or "0"


def _exposure_to_display(value: object) -> str:
    if isinstance(value, tuple) and len(value) == 2:
        numerator, denominator = value
        if numerator == 1:
            return f"1/{denominator}"
    return _rational_to_display(value, 6)


def _decode_user_comment(value: object) -> str:
    if isinstance(value, bytes):
        for prefix in (b"ASCII\x00\x00\x00", b"UNICODE\x00"):
            if value.startswith(prefix):
                value = value[len(prefix):]
                break
    return _decode_metadata_text(value)


def _decode_metadata_text(value: object) -> str:
    if isinstance(value, bytes):
        for encoding in ("utf-8", "utf-16", "latin-1"):
            try:
                return value.decode(encoding, "ignore").replace("\x00", "").strip()
            except Exception:
                pass
        return value.hex()
    if isinstance(value, tuple):
        if len(value) == 2 and all(isinstance(item, int) for item in value):
            return _rational_to_display(value)
        return ", ".join(_decode_metadata_text(item) for item in value)
    if isinstance(value, list):
        return ", ".join(_decode_metadata_text(item) for item in value)
    return str(value).replace("\x00", "").strip()


def _encode_text(value: object) -> bytes:
    return str(value).encode("utf-8", "ignore")


def _set_tag(ifd: dict, tag: object, value: object) -> None:
    if tag is not None and value is not None:
        ifd[tag] = value


def _clean_overrides(values: Optional[dict[str, str]]) -> dict[str, str]:
    if not values:
        return {}
    return {
        str(key): str(value).strip()
        for key, value in values.items()
        if value is not None and str(value).strip()
    }


def _parse_int(value: object) -> Optional[int]:
    try:
        return int(float(str(value).strip()))
    except (TypeError, ValueError):
        return None


def _parse_float(value: object) -> Optional[float]:
    try:
        text = str(value).strip().lower()
        if text.startswith("f/"):
            text = text[2:]
        return float(text)
    except (TypeError, ValueError):
        return None


def _parse_rational(value: object, scale: int = 100) -> Optional[tuple[int, int]]:
    text = str(value).strip().lower().replace("f/", "")
    try:
        if "/" in text:
            left, right = text.split("/", 1)
            numerator = float(left.strip())
            denominator = int(float(right.strip()))
            if denominator <= 0:
                return None
            if numerator.is_integer():
                return (int(numerator), denominator)
            multiplier = 1000
            return (int(round(numerator * multiplier)), denominator * multiplier)
        number = float(text)
    except (TypeError, ValueError):
        return None
    return _to_rational(number, scale)


def _parse_datetime_value(value: object) -> Optional[datetime]:
    text = str(value).strip()
    if not text:
        return None
    for fmt in ("%Y:%m:%d %H:%M:%S", "%Y-%m-%d %H:%M:%S", "%Y/%m/%d %H:%M:%S"):
        try:
            return datetime.strptime(text, fmt).astimezone()
        except ValueError:
            pass
    try:
        parsed = datetime.fromisoformat(text.replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            return parsed.astimezone()
        return parsed
    except ValueError:
        return None


def _normalize_exif_time(value: object) -> Optional[str]:
    parsed = _parse_datetime_value(value)
    if parsed:
        return _format_exif_time(parsed)
    text = str(value).strip()
    if len(text) >= 19:
        return text[:19].replace("-", ":").replace("/", ":")
    return None


def _normalize_offset(value: object) -> Optional[str]:
    text = str(value).strip()
    if not text:
        return None
    if len(text) == 5 and (text[0] in "+-") and text[1:].isdigit():
        return f"{text[:3]}:{text[3:]}"
    if len(text) == 6 and text[0] in "+-" and text[3] == ":":
        return text
    return None


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


def generate_random_metadata_overrides(
    device_name: str = "Apple iPhone 15 Pro",
    capture_time: Optional[datetime] = None,
    include_time: bool = True,
) -> dict[str, str]:
    profile = _device_profile(device_name)
    make = str(profile["make"])
    model = str(profile["model"])
    focal = float(profile["focal_length"])
    f_number = float(profile["f_number"])
    capture_time = capture_time or _random_capture_time()
    exposure_den = random.choice([30, 40, 50, 60, 80, 100, 120, 125, 160, 200, 250])
    iso_base = int(profile["iso"])
    iso = random.choice([max(25, iso_base - 20), iso_base, iso_base + 20, iso_base + 40])
    values = {
        "software": random.choice(["Image Metadata Modifier", "Photos", "Camera", "Lightroom", "Snapseed"]),
        "host_computer": random.choice([model, f"{make} mobile", "MacBook", "Windows Photo Editor"]),
        "artist": f"user-{secrets.token_hex(3)}",
        "copyright": f"Copyright {capture_time.year} {secrets.token_hex(3)}",
        "image_description": f"processed-{secrets.token_hex(4)}",
        "make": make,
        "model": model,
        "lens_make": str(profile["lens_make"]),
        "lens_model": str(profile["lens_model"]),
        "lens_serial": secrets.token_hex(8),
        "body_serial": secrets.token_hex(8),
        "image_unique_id": secrets.token_hex(16),
        "subsec_time": f"{random.randint(0, 999):03d}",
        "exposure_time": f"1/{exposure_den}",
        "f_number": f"{max(1.0, f_number + random.uniform(-0.05, 0.05)):.2f}",
        "focal_length": f"{max(1.0, focal + random.uniform(-0.08, 0.08)):.2f}",
        "focal_length_35mm": str(max(1, int(round(focal * 4 + random.choice([-1, 0, 1]))))),
        "iso": str(iso),
        "exposure_program": random.choice(["2", "3"]),
        "exposure_mode": random.choice(["0", "1"]),
        "metering_mode": random.choice(["3", "5"]),
        "white_balance": random.choice(["0", "1"]),
        "flash": random.choice(["0", "16", "24"]),
        "scene_capture_type": random.choice(["0", "1", "2", "3"]),
        "digital_zoom_ratio": random.choice(["1.0", "1.1", "1.2"]),
        "sensing_method": random.choice(["2", "3"]),
        "gps_altitude": f"{random.uniform(5, 120):.1f}",
        "gps_img_direction": f"{random.uniform(0, 359.99):.2f}",
        "gps_speed": f"{random.uniform(0, 3):.1f}",
    }
    if include_time:
        exif_time = _format_exif_time(capture_time)
        offset = _format_exif_offset(capture_time)
        values.update(
            {
                "datetime": exif_time,
                "datetime_original": exif_time,
                "datetime_digitized": exif_time,
                "offset_time": offset,
            }
        )
    return values


def _select_capture_time(opts: ProcessOptions) -> datetime:
    overrides = _clean_overrides(opts.metadata_overrides)
    for key in ("datetime_original", "datetime", "datetime_digitized"):
        parsed = _parse_datetime_value(overrides.get(key))
        if parsed:
            return parsed.astimezone()
    if opts.randomize_timestamp:
        return _random_capture_time()
    return datetime.now().astimezone()


def _build_exif_bytes(opts: ProcessOptions, capture_time: Optional[datetime]) -> bytes:
    zeroth_ifd: dict = {}
    exif_ifd:   dict = {}
    gps_ifd:    dict = {}

    if not opts.strip_exif:
        profile = _device_profile(opts.device_name)
        effective = (
            generate_random_metadata_overrides(
                opts.device_name,
                capture_time,
                include_time=opts.randomize_timestamp,
            )
            if opts.random_extra_metadata
            else {}
        )
        effective.update(_clean_overrides(opts.metadata_overrides))

        make = profile["make"]
        model = profile["model"]
        lens_make = profile["lens_make"]
        lens_model = profile["lens_model"]

        zeroth_ifd[piexif.ImageIFD.Make] = _encode_text(effective.get("make", make))
        zeroth_ifd[piexif.ImageIFD.Model] = _encode_text(effective.get("model", model))
        zeroth_ifd[piexif.ImageIFD.Software] = _encode_text(
            effective.get("software", "Image Metadata Modifier")
        )
        _set_tag(
            zeroth_ifd,
            getattr(piexif.ImageIFD, "HostComputer", 316),
            _encode_text(effective["host_computer"]) if "host_computer" in effective else None,
        )
        if "artist" in effective:
            zeroth_ifd[piexif.ImageIFD.Artist] = _encode_text(effective["artist"])
        if "copyright" in effective:
            zeroth_ifd[piexif.ImageIFD.Copyright] = _encode_text(effective["copyright"])
        if "image_description" in effective:
            zeroth_ifd[piexif.ImageIFD.ImageDescription] = _encode_text(
                effective["image_description"]
            )

        if capture_time:
            exif_time = _format_exif_time(capture_time)
            offset = _format_exif_offset(capture_time)
            zeroth_ifd[piexif.ImageIFD.DateTime] = effective.get("datetime", exif_time).encode()
            exif_ifd[piexif.ExifIFD.DateTimeOriginal] = effective.get(
                "datetime_original", exif_time
            ).encode()
            exif_ifd[piexif.ExifIFD.DateTimeDigitized] = effective.get(
                "datetime_digitized", exif_time
            ).encode()
            normalized_offset = _normalize_offset(effective.get("offset_time", offset)) or offset
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTime", 36880), normalized_offset.encode())
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTimeOriginal", 36881), normalized_offset.encode())
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "OffsetTimeDigitized", 36882), normalized_offset.encode())

        for key, tag in (
            ("datetime", piexif.ImageIFD.DateTime),
        ):
            value = _normalize_exif_time(effective.get(key))
            if value:
                zeroth_ifd[tag] = value.encode()
        for key, tag in (
            ("datetime_original", piexif.ExifIFD.DateTimeOriginal),
            ("datetime_digitized", piexif.ExifIFD.DateTimeDigitized),
        ):
            value = _normalize_exif_time(effective.get(key))
            if value:
                exif_ifd[tag] = value.encode()

        exif_ifd[piexif.ExifIFD.LensMake] = _encode_text(effective.get("lens_make", lens_make))
        exif_ifd[piexif.ExifIFD.LensModel] = _encode_text(effective.get("lens_model", lens_model))
        exif_ifd[piexif.ExifIFD.ExifVersion] = b"0232"
        exif_ifd[piexif.ExifIFD.FlashpixVersion] = b"0100"
        exif_ifd[piexif.ExifIFD.ColorSpace] = 1
        exif_ifd[piexif.ExifIFD.FNumber] = _parse_rational(
            effective.get("f_number", profile["f_number"])
        ) or _to_rational(float(profile["f_number"]))
        exif_ifd[piexif.ExifIFD.FocalLength] = _parse_rational(
            effective.get("focal_length", profile["focal_length"])
        ) or _to_rational(float(profile["focal_length"]))
        exif_ifd[piexif.ExifIFD.FocalLengthIn35mmFilm] = int(
            _parse_int(effective.get("focal_length_35mm"))
            or round(float(profile["focal_length"]) * 4)
        )
        exposure = profile["exposure"]
        exposure_override = _parse_rational(effective.get("exposure_time"), scale=100000)
        if exposure_override:
            exif_ifd[piexif.ExifIFD.ExposureTime] = exposure_override
        elif isinstance(exposure, tuple) and len(exposure) == 2:
            exif_ifd[piexif.ExifIFD.ExposureTime] = exposure
        iso = _parse_int(effective.get("iso")) or int(profile["iso"])
        exif_ifd[piexif.ExifIFD.ISOSpeedRatings] = iso
        _set_tag(exif_ifd, getattr(piexif.ExifIFD, "PhotographicSensitivity", None), iso)

        for key, tag_name in (
            ("exposure_program", "ExposureProgram"),
            ("exposure_mode", "ExposureMode"),
            ("metering_mode", "MeteringMode"),
            ("white_balance", "WhiteBalance"),
            ("flash", "Flash"),
            ("scene_capture_type", "SceneCaptureType"),
            ("sensing_method", "SensingMethod"),
        ):
            value = _parse_int(effective.get(key))
            if value is not None:
                _set_tag(exif_ifd, getattr(piexif.ExifIFD, tag_name, None), value)

        zoom = _parse_rational(effective.get("digital_zoom_ratio"))
        if zoom:
            _set_tag(exif_ifd, getattr(piexif.ExifIFD, "DigitalZoomRatio", None), zoom)

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
            altitude = _parse_rational(effective.get("gps_altitude"))
            if altitude:
                gps_ifd[piexif.GPSIFD.GPSAltitudeRef] = 0
                gps_ifd[piexif.GPSIFD.GPSAltitude] = altitude
            direction = _parse_rational(effective.get("gps_img_direction"))
            if direction:
                gps_ifd[piexif.GPSIFD.GPSImgDirectionRef] = b"T"
                gps_ifd[piexif.GPSIFD.GPSImgDirection] = direction
            speed = _parse_rational(effective.get("gps_speed"))
            if speed:
                gps_ifd[piexif.GPSIFD.GPSSpeedRef] = b"K"
                gps_ifd[piexif.GPSIFD.GPSSpeed] = speed

        # Hidden note + optional nonce
        payload = opts.hidden_note.strip()
        unique_id = effective.get("image_unique_id", secrets.token_hex(16))
        if opts.randomize_metadata:
            payload = f"{payload} nonce={secrets.token_hex(8)}".strip()
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "BodySerialNumber", 42033),
                effective.get("body_serial", secrets.token_hex(8)).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "LensSerialNumber", 42037),
                effective.get("lens_serial", secrets.token_hex(8)).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "ImageUniqueID", 42016),
                unique_id.encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTime", 37520),
                effective.get("subsec_time", str(random.randint(0, 999))).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTimeOriginal", 37521),
                effective.get("subsec_time", str(random.randint(0, 999))).encode(),
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "SubSecTimeDigitized", 37522),
                effective.get("subsec_time", str(random.randint(0, 999))).encode(),
            )
        else:
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "BodySerialNumber", 42033),
                effective["body_serial"].encode() if "body_serial" in effective else None,
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "LensSerialNumber", 42037),
                effective["lens_serial"].encode() if "lens_serial" in effective else None,
            )
            _set_tag(
                exif_ifd,
                getattr(piexif.ExifIFD, "ImageUniqueID", 42016),
                unique_id.encode() if "image_unique_id" in effective else None,
            )
            for tag_name in ("SubSecTime", "SubSecTimeOriginal", "SubSecTimeDigitized"):
                _set_tag(
                    exif_ifd,
                    getattr(piexif.ExifIFD, tag_name, None),
                    effective["subsec_time"].encode() if "subsec_time" in effective else None,
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
    if imagehash is not None:
        return str(imagehash.phash(img.convert("RGB")))
    small = img.convert("L").resize((32, 32), Image.Resampling.LANCZOS)
    return "visual:" + hashlib.sha256(small.tobytes()).hexdigest()[:16]


def _tag_name(section: str, tag_id: object) -> str:
    try:
        return piexif.TAGS.get(section, {}).get(int(tag_id), {}).get("name") or f"Tag {tag_id}"
    except (TypeError, ValueError):
        return f"Tag {tag_id}"


def _scan_value_to_editable(key: str, value: object) -> str:
    if key == "hidden_note":
        return _decode_user_comment(value)
    if key == "exposure_time":
        return _exposure_to_display(value)
    if key in {
        "f_number",
        "focal_length",
        "digital_zoom_ratio",
        "gps_altitude",
        "gps_img_direction",
        "gps_speed",
    }:
        return _rational_to_display(value)
    if key in {
        "focal_length_35mm",
        "iso",
        "exposure_program",
        "exposure_mode",
        "metering_mode",
        "white_balance",
        "flash",
        "scene_capture_type",
        "sensing_method",
    }:
        parsed = _parse_int(value)
        return str(parsed) if parsed is not None else _decode_metadata_text(value)
    return _decode_metadata_text(value)


def _match_device_preset(make: str, model: str) -> str:
    make_norm = make.strip().lower()
    model_norm = model.strip().lower()
    for preset_name, (preset_make, preset_model) in DEVICE_PRESETS.items():
        if preset_make.lower() == make_norm and preset_model.lower() == model_norm:
            return preset_name
    for preset_name, (preset_make, preset_model) in DEVICE_PRESETS.items():
        if preset_make.lower() == make_norm and preset_model.lower() in model_norm:
            return preset_name
    return ""


def _read_xmp_excerpt(path: Path, limit: int = 800) -> str:
    try:
        data = path.read_bytes()
    except Exception:
        return ""
    start = data.find(b"<x:xmpmeta")
    if start < 0:
        start = data.find(b"<rdf:RDF")
    if start < 0:
        return ""
    end = data.find(b"</x:xmpmeta>", start)
    end_len = len(b"</x:xmpmeta>")
    if end < 0:
        end = data.find(b"</rdf:RDF>", start)
        end_len = len(b"</rdf:RDF>")
    if end < 0:
        end = min(len(data), start + limit)
        end_len = 0
    text = data[start : min(end + end_len, start + limit)].decode("utf-8", "ignore")
    return " ".join(text.split())


def _dms_array_to_decimal(ref: str, value: object) -> Optional[float]:
    if not isinstance(value, (tuple, list)) or len(value) < 3:
        return None
    degrees = _rational_to_float(value[0])
    minutes = _rational_to_float(value[1])
    seconds = _rational_to_float(value[2])
    if degrees is None or minutes is None or seconds is None:
        return None
    decimal = degrees + minutes / 60 + seconds / 3600
    if ref.upper() in {"S", "W"}:
        decimal *= -1
    return decimal


def _format_scan_value(section: str, name: str, value: object) -> str:
    if name == "UserComment":
        return _decode_user_comment(value)
    if name == "ExposureTime":
        return _exposure_to_display(value)
    if name in {
        "FNumber",
        "FocalLength",
        "DigitalZoomRatio",
        "GPSAltitude",
        "GPSImgDirection",
        "GPSSpeed",
    }:
        return _rational_to_display(value)
    return _decode_metadata_text(value)


def scan_image_metadata(path: Path) -> dict[str, object]:
    """
    Scan source image metadata for display and editing.
    Returns:
      - fields: every detected row that we can read locally
      - editable: subset mapped to ProcessOptions.metadata_overrides / hidden_note
      - gps: decimal custom_lat/custom_lon if present
      - device_name: matched device preset if Make/Model match a known preset
    """
    path = Path(path)
    fields: list[dict[str, str]] = []
    editable: dict[str, str] = {}
    gps: dict[str, float] = {}
    device_name = ""
    exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "Interop": {}, "1st": {}}

    with Image.open(path) as im:
        fields.extend(
            [
                {"group": "File", "name": "Name", "label": "文件名", "value": path.name, "editable_key": ""},
                {"group": "File", "name": "Size", "label": "文件大小", "value": str(path.stat().st_size), "editable_key": ""},
                {"group": "Image", "name": "Format", "label": "格式", "value": str(im.format or ""), "editable_key": ""},
                {"group": "Image", "name": "Mode", "label": "色彩模式", "value": str(im.mode), "editable_key": ""},
                {"group": "Image", "name": "Width", "label": "宽度", "value": str(im.width), "editable_key": ""},
                {"group": "Image", "name": "Height", "label": "高度", "value": str(im.height), "editable_key": ""},
                {"group": "Hash", "name": "SHA256", "label": "SHA256", "value": _sha256_file(path), "editable_key": ""},
                {"group": "Hash", "name": "pHash", "label": "pHash", "value": _phash(im), "editable_key": ""},
            ]
        )
        if im.info.get("icc_profile"):
            fields.append(
                {
                    "group": "ICC",
                    "name": "ICCProfile",
                    "label": "ICC 色彩配置",
                    "value": f"{len(im.info['icc_profile'])} bytes",
                    "editable_key": "",
                }
            )
        exif_bytes = im.info.get("exif")

    try:
        if exif_bytes:
            exif_dict = piexif.load(exif_bytes)
        else:
            exif_dict = piexif.load(str(path))
    except Exception:
        exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "Interop": {}, "1st": {}}

    make = model = ""
    for section in ("0th", "Exif", "GPS", "Interop", "1st"):
        entries = exif_dict.get(section) or {}
        for tag_id, raw_value in entries.items():
            name = _tag_name(section, tag_id)
            editable_key = EDITABLE_EXIF_TAGS.get((section, name), "")
            display = _format_scan_value(section, name, raw_value)
            if editable_key and editable_key not in editable:
                editable[editable_key] = _scan_value_to_editable(editable_key, raw_value)
            fields.append(
                {
                    "group": section,
                    "name": name,
                    "label": name,
                    "value": display,
                    "editable_key": editable_key,
                }
            )
            if section == "0th" and name == "Make":
                make = display
            elif section == "0th" and name == "Model":
                model = display

    gps_entries = exif_dict.get("GPS") or {}
    lat = _dms_array_to_decimal(
        _decode_metadata_text(gps_entries.get(piexif.GPSIFD.GPSLatitudeRef, "")),
        gps_entries.get(piexif.GPSIFD.GPSLatitude),
    )
    lon = _dms_array_to_decimal(
        _decode_metadata_text(gps_entries.get(piexif.GPSIFD.GPSLongitudeRef, "")),
        gps_entries.get(piexif.GPSIFD.GPSLongitude),
    )
    if lat is not None and lon is not None:
        gps["custom_lat"] = lat
        gps["custom_lon"] = lon
        fields.append(
            {
                "group": "GPS",
                "name": "DecimalCoordinates",
                "label": "GPS 十进制坐标",
                "value": f"{lat:.6f}, {lon:.6f}",
                "editable_key": "custom_lat/custom_lon",
            }
        )

    xmp_excerpt = _read_xmp_excerpt(path)
    if xmp_excerpt:
        fields.append(
            {
                "group": "XMP",
                "name": "Packet",
                "label": "XMP 数据包",
                "value": xmp_excerpt,
                "editable_key": "",
            }
        )

    if make or model:
        device_name = _match_device_preset(make, model)

    return {
        "fields": fields,
        "editable": editable,
        "gps": gps,
        "device_name": device_name,
        "summary": f"扫描到 {len(fields)} 项，其中 {len(editable)} 项可自动填入编辑器。",
    }


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
    capture_time = _select_capture_time(opts)

    _prog(0.50, "构建 EXIF 数据…")
    exif_bytes = _build_exif_bytes(opts, capture_time)

    _prog(0.70, "保存输出文件…")
    max_attempts = 6 if opts.tweak_phash else 1
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
            random_extra_metadata= opts_template.random_extra_metadata,
            metadata_overrides= dict(opts_template.metadata_overrides),
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
