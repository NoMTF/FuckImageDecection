#!/usr/bin/env python3
"""Lightweight image privacy tool with simple GUI.

Features:
- Re-save image with randomized metadata to change file hash.
- Optional tiny pixel perturbation (visually lossless) to alter perceptual hash.
- Optional EXIF GPS/device presets.
- Optional hidden note stored in EXIF UserComment.
"""

from __future__ import annotations

import hashlib
import random
import secrets
from dataclasses import dataclass
from pathlib import Path
import tkinter as tk
from tkinter import filedialog, messagebox, ttk

try:
    from PIL import Image
except Exception as exc:  # pragma: no cover
    raise SystemExit("Please install Pillow: pip install Pillow") from exc

try:
    import piexif
except Exception as exc:  # pragma: no cover
    raise SystemExit("Please install piexif: pip install piexif") from exc

try:
    import imagehash
except Exception:
    imagehash = None


GPS_PRESETS = {
    "中国山东": (36.6512, 117.1201),
    "澳大利亚墨尔本": (-37.8136, 144.9631),
    "日本东京": (35.6762, 139.6503),
}

DEVICE_PRESETS = {
    "索尼相机": ("SONY", "ILCE-7M3"),
    "iPhone手机": ("Apple", "iPhone 15 Pro"),
    "小米手机": ("Xiaomi", "Xiaomi 14"),
}


@dataclass
class ProcessResult:
    output_path: Path
    src_sha256: str
    dst_sha256: str
    src_phash: str
    dst_phash: str


def _deg_to_dms_rational(deg_float: float):
    deg_abs = abs(deg_float)
    deg = int(deg_abs)
    minutes_float = (deg_abs - deg) * 60
    minute = int(minutes_float)
    sec = round((minutes_float - minute) * 60 * 100)
    return ((deg, 1), (minute, 1), (sec, 100))


def _build_exif_bytes(gps_name: str, device_name: str, hidden_note: str, randomize: bool) -> bytes:
    zeroth_ifd = {}
    exif_ifd = {}
    gps_ifd = {}

    if device_name in DEVICE_PRESETS:
        make, model = DEVICE_PRESETS[device_name]
        zeroth_ifd[piexif.ImageIFD.Make] = make.encode("utf-8")
        zeroth_ifd[piexif.ImageIFD.Model] = model.encode("utf-8")

    if gps_name in GPS_PRESETS:
        lat, lon = GPS_PRESETS[gps_name]
        gps_ifd[piexif.GPSIFD.GPSLatitudeRef] = b"N" if lat >= 0 else b"S"
        gps_ifd[piexif.GPSIFD.GPSLatitude] = _deg_to_dms_rational(lat)
        gps_ifd[piexif.GPSIFD.GPSLongitudeRef] = b"E" if lon >= 0 else b"W"
        gps_ifd[piexif.GPSIFD.GPSLongitude] = _deg_to_dms_rational(lon)

    payload = hidden_note.strip()
    if randomize:
        payload = f"{payload} nonce={secrets.token_hex(8)}".strip()

    if payload:
        exif_ifd[piexif.ExifIFD.UserComment] = b"ASCII\x00\x00\x00" + payload.encode("utf-8", "ignore")

    exif_dict = {
        "0th": zeroth_ifd,
        "Exif": exif_ifd,
        "GPS": gps_ifd,
        "1st": {},
        "thumbnail": None,
    }
    return piexif.dump(exif_dict)


def _sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def _phash(img: Image.Image) -> str:
    if imagehash is None:
        return "(install imagehash for pHash preview)"
    return str(imagehash.phash(img.convert("RGB")))


def process_image(
    src: Path,
    dst: Path,
    gps_name: str,
    device_name: str,
    hidden_note: str,
    tweak_phash: bool,
    randomize_metadata: bool,
) -> ProcessResult:
    with Image.open(src) as im:
        src_phash = _phash(im)
        rgb = im.convert("RGB")

        if tweak_phash:
            px = rgb.load()
            x = random.randint(0, rgb.width - 1)
            y = random.randint(0, rgb.height - 1)
            r, g, b = px[x, y]
            channel = random.randint(0, 2)
            delta = random.choice((-1, 1))
            if channel == 0:
                r = max(0, min(255, r + delta))
            elif channel == 1:
                g = max(0, min(255, g + delta))
            else:
                b = max(0, min(255, b + delta))
            px[x, y] = (r, g, b)

        exif_bytes = _build_exif_bytes(gps_name, device_name, hidden_note, randomize_metadata)

        format_hint = (im.format or "JPEG").upper()
        if format_hint in {"JPEG", "JPG"}:
            rgb.save(dst, format="JPEG", quality=95, exif=exif_bytes, optimize=True)
        elif format_hint == "PNG":
            pnginfo = None
            rgb.save(dst, format="PNG", pnginfo=pnginfo, optimize=True)
        else:
            rgb.save(dst, format="JPEG", quality=95, exif=exif_bytes, optimize=True)

    with Image.open(dst) as out_img:
        dst_phash = _phash(out_img)

    return ProcessResult(
        output_path=dst,
        src_sha256=_sha256_file(src),
        dst_sha256=_sha256_file(dst),
        src_phash=src_phash,
        dst_phash=dst_phash,
    )


class App:
    def __init__(self, root: tk.Tk):
        self.root = root
        root.title("Image Privacy Tool")
        root.geometry("680x460")

        self.src_var = tk.StringVar()
        self.dst_var = tk.StringVar()
        self.gps_var = tk.StringVar(value="中国山东")
        self.device_var = tk.StringVar(value="iPhone手机")
        self.note_var = tk.StringVar()
        self.tweak_var = tk.BooleanVar(value=True)
        self.rand_meta_var = tk.BooleanVar(value=True)

        self._build_ui()

    def _build_ui(self):
        frm = ttk.Frame(self.root, padding=12)
        frm.pack(fill="both", expand=True)

        ttk.Label(frm, text="源图片").grid(row=0, column=0, sticky="w")
        ttk.Entry(frm, textvariable=self.src_var, width=68).grid(row=1, column=0, sticky="we")
        ttk.Button(frm, text="选择", command=self.pick_src).grid(row=1, column=1, padx=6)

        ttk.Label(frm, text="输出路径").grid(row=2, column=0, pady=(10, 0), sticky="w")
        ttk.Entry(frm, textvariable=self.dst_var, width=68).grid(row=3, column=0, sticky="we")
        ttk.Button(frm, text="保存到", command=self.pick_dst).grid(row=3, column=1, padx=6)

        ttk.Label(frm, text="GPS预设").grid(row=4, column=0, pady=(10, 0), sticky="w")
        ttk.Combobox(frm, textvariable=self.gps_var, values=list(GPS_PRESETS.keys()), state="readonly").grid(
            row=5, column=0, sticky="w"
        )

        ttk.Label(frm, text="拍摄设备预设").grid(row=6, column=0, pady=(10, 0), sticky="w")
        ttk.Combobox(frm, textvariable=self.device_var, values=list(DEVICE_PRESETS.keys()), state="readonly").grid(
            row=7, column=0, sticky="w"
        )

        ttk.Label(frm, text="隐藏备注（写入EXIF UserComment）").grid(row=8, column=0, pady=(10, 0), sticky="w")
        ttk.Entry(frm, textvariable=self.note_var, width=68).grid(row=9, column=0, sticky="we")

        ttk.Checkbutton(
            frm,
            text="微扰1个像素（肉眼基本无感，用于改变感知哈希）",
            variable=self.tweak_var,
        ).grid(row=10, column=0, pady=(8, 0), sticky="w")

        ttk.Checkbutton(
            frm,
            text="随机元数据nonce（每次输出都不同）",
            variable=self.rand_meta_var,
        ).grid(row=11, column=0, sticky="w")

        ttk.Button(frm, text="开始处理", command=self.run).grid(row=12, column=0, pady=14, sticky="w")

        self.log = tk.Text(frm, height=10)
        self.log.grid(row=13, column=0, columnspan=2, sticky="nsew")

        frm.columnconfigure(0, weight=1)
        frm.rowconfigure(13, weight=1)

    def pick_src(self):
        path = filedialog.askopenfilename(filetypes=[("Images", "*.jpg *.jpeg *.png *.webp *.bmp")])
        if path:
            self.src_var.set(path)
            src = Path(path)
            self.dst_var.set(str(src.with_name(src.stem + "_privacy.jpg")))

    def pick_dst(self):
        path = filedialog.asksaveasfilename(defaultextension=".jpg", filetypes=[("JPEG", "*.jpg")])
        if path:
            self.dst_var.set(path)

    def run(self):
        src = Path(self.src_var.get().strip())
        dst = Path(self.dst_var.get().strip())

        if not src.exists():
            messagebox.showerror("错误", "源图片不存在")
            return
        if not dst.parent.exists():
            messagebox.showerror("错误", "输出目录不存在")
            return

        try:
            result = process_image(
                src=src,
                dst=dst,
                gps_name=self.gps_var.get(),
                device_name=self.device_var.get(),
                hidden_note=self.note_var.get(),
                tweak_phash=self.tweak_var.get(),
                randomize_metadata=self.rand_meta_var.get(),
            )
        except Exception as exc:
            messagebox.showerror("处理失败", str(exc))
            return

        self.log.delete("1.0", "end")
        self.log.insert("end", f"输出文件: {result.output_path}\n")
        self.log.insert("end", f"源文件 SHA256: {result.src_sha256}\n")
        self.log.insert("end", f"输出 SHA256: {result.dst_sha256}\n")
        self.log.insert("end", f"源图 pHash: {result.src_phash}\n")
        self.log.insert("end", f"输出 pHash: {result.dst_phash}\n")
        self.log.insert("end", "\n提示：若只改元数据可关闭像素微扰；要变更感知哈希通常需要极小像素变化。\n")

        messagebox.showinfo("完成", "处理完成")


def main():
    root = tk.Tk()
    App(root)
    root.mainloop()


if __name__ == "__main__":
    main()
