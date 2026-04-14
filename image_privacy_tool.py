#!/usr/bin/env python3
"""
Image Privacy Tool v2.0 — Desktop GUI (CustomTkinter)
现代化深色/浅色主题图形界面，支持单张 & 批量处理
"""
from __future__ import annotations

import sys
import threading
import tkinter as tk
from pathlib import Path
from tkinter import filedialog, messagebox
from typing import Optional

try:
    import customtkinter as ctk
except ImportError:
    sys.exit(
        "请安装 CustomTkinter:\n  pip install customtkinter\n"
        "或运行: pip install -r requirements.txt"
    )

try:
    from PIL import Image, ImageTk
except ImportError:
    sys.exit("请安装 Pillow: pip install Pillow")

from core import (
    GPS_PRESETS,
    DEVICE_PRESETS,
    ProcessOptions,
    ProcessResult,
    batch_process,
    load_settings,
    process_image,
    save_settings,
    IMAGE_EXTENSIONS,
)

# ──────────────────────────────────────────────
# App-wide constants
# ──────────────────────────────────────────────
APP_NAME    = "Image Privacy Tool"
APP_VERSION = "v2.0"
THUMB_SIZE  = (300, 220)

ACCENT  = "#2b9af3"
SUCCESS = "#2ec27e"
DANGER  = "#e0453a"
WARN    = "#f0a500"


# ──────────────────────────────────────────────
# Helper: thumbnail
# ──────────────────────────────────────────────
def _make_thumb(path: Path) -> Optional[ImageTk.PhotoImage]:
    try:
        with Image.open(path) as im:
            im.thumbnail(THUMB_SIZE, Image.LANCZOS)
            return ImageTk.PhotoImage(im)
    except Exception:
        return None


# ──────────────────────────────────────────────
# Settings panel (left sidebar)
# ──────────────────────────────────────────────
class SettingsPanel(ctk.CTkScrollableFrame):
    def __init__(self, master, **kw):
        super().__init__(master, width=280, label_text="⚙  处理设置", **kw)
        self._build()

    def _build(self):
        pad = {"padx": 10, "pady": (4, 0), "sticky": "w"}

        # ── GPS ──────────────────────────────
        ctk.CTkLabel(self, text="📍  GPS 预设位置", font=ctk.CTkFont(weight="bold")).pack(**pad)
        self.gps_var = ctk.StringVar(value="中国·北京")
        self.gps_cb  = ctk.CTkComboBox(
            self, variable=self.gps_var,
            values=list(GPS_PRESETS.keys()), width=250, state="readonly"
        )
        self.gps_cb.pack(padx=10, pady=(2, 0))

        ctk.CTkLabel(self, text="自定义坐标（留空则用预设）",
                     font=ctk.CTkFont(size=11)).pack(**pad)
        coord_frm = ctk.CTkFrame(self, fg_color="transparent")
        coord_frm.pack(padx=10, pady=(2, 6), fill="x")
        self.lat_var = ctk.StringVar()
        self.lon_var = ctk.StringVar()
        ctk.CTkEntry(coord_frm, textvariable=self.lat_var,
                     placeholder_text="纬度  e.g. 39.90", width=118).pack(side="left")
        ctk.CTkEntry(coord_frm, textvariable=self.lon_var,
                     placeholder_text="经度  e.g. 116.40", width=118).pack(side="right")

        ctk.CTkSeparator(self, orientation="horizontal").pack(fill="x", padx=8, pady=6)

        # ── Device ───────────────────────────
        ctk.CTkLabel(self, text="📷  拍摄设备预设",
                     font=ctk.CTkFont(weight="bold")).pack(**pad)
        self.device_var = ctk.StringVar(value="Apple iPhone 15 Pro")
        self.device_cb  = ctk.CTkComboBox(
            self, variable=self.device_var,
            values=list(DEVICE_PRESETS.keys()), width=250, state="readonly"
        )
        self.device_cb.pack(padx=10, pady=(2, 6))

        ctk.CTkSeparator(self, orientation="horizontal").pack(fill="x", padx=8, pady=6)

        # ── Note ─────────────────────────────
        ctk.CTkLabel(self, text="💬  隐藏备注 (EXIF UserComment)",
                     font=ctk.CTkFont(weight="bold")).pack(**pad)
        self.note_var = ctk.StringVar()
        ctk.CTkEntry(self, textvariable=self.note_var,
                     placeholder_text="写入 EXIF 的隐藏文字…", width=250).pack(padx=10, pady=(2, 6))

        ctk.CTkSeparator(self, orientation="horizontal").pack(fill="x", padx=8, pady=6)

        # ── Options ──────────────────────────
        ctk.CTkLabel(self, text="🔧  处理选项",
                     font=ctk.CTkFont(weight="bold")).pack(**pad)

        self.tweak_var = ctk.BooleanVar(value=True)
        ctk.CTkCheckBox(
            self, text="微扰像素（改变感知哈希）",
            variable=self.tweak_var
        ).pack(**pad)

        self.rand_var = ctk.BooleanVar(value=True)
        ctk.CTkCheckBox(
            self, text="随机 nonce（每次输出不同）",
            variable=self.rand_var
        ).pack(**pad)

        self.strip_var = ctk.BooleanVar(value=False)
        ctk.CTkCheckBox(
            self, text="清除所有 EXIF（完全抹除）",
            variable=self.strip_var
        ).pack(**pad)

        ctk.CTkSeparator(self, orientation="horizontal").pack(fill="x", padx=8, pady=6)

        # ── Output format ────────────────────
        ctk.CTkLabel(self, text="💾  输出格式",
                     font=ctk.CTkFont(weight="bold")).pack(**pad)
        self.fmt_var = ctk.StringVar(value="JPEG")
        fmt_frm = ctk.CTkFrame(self, fg_color="transparent")
        fmt_frm.pack(padx=10, pady=(2, 0), fill="x")
        for fmt in ("JPEG", "PNG", "WEBP"):
            ctk.CTkRadioButton(fmt_frm, text=fmt, variable=self.fmt_var,
                               value=fmt).pack(side="left", padx=6)

        # ── Quality ──────────────────────────
        ctk.CTkLabel(self, text="🎚  JPEG/WEBP 质量",
                     font=ctk.CTkFont(weight="bold")).pack(**pad)
        self.quality_var = ctk.IntVar(value=95)
        quality_row = ctk.CTkFrame(self, fg_color="transparent")
        quality_row.pack(padx=10, pady=(2, 8), fill="x")
        self.quality_lbl = ctk.CTkLabel(quality_row, text="95", width=32)
        self.quality_lbl.pack(side="right")
        ctk.CTkSlider(
            quality_row, from_=50, to=100,
            variable=self.quality_var, number_of_steps=50,
            command=lambda v: self.quality_lbl.configure(text=str(int(v)))
        ).pack(side="left", fill="x", expand=True)

    # ── public helpers ────────────────────────
    def get_custom_coords(self) -> tuple[Optional[float], Optional[float]]:
        try:
            lat = float(self.lat_var.get().strip()) if self.lat_var.get().strip() else None
            lon = float(self.lon_var.get().strip()) if self.lon_var.get().strip() else None
            return lat, lon
        except ValueError:
            return None, None

    def build_options(self, src: Path, dst: Path) -> ProcessOptions:
        lat, lon = self.get_custom_coords()
        return ProcessOptions(
            src=src, dst=dst,
            gps_name          = self.gps_var.get(),
            device_name       = self.device_var.get(),
            custom_lat        = lat,
            custom_lon        = lon,
            hidden_note       = self.note_var.get(),
            tweak_phash       = self.tweak_var.get(),
            randomize_metadata= self.rand_var.get(),
            strip_exif        = self.strip_var.get(),
            jpeg_quality      = self.quality_var.get(),
            output_format     = self.fmt_var.get(),
        )

    def to_dict(self) -> dict:
        return {
            "gps_name":    self.gps_var.get(),
            "device_name": self.device_var.get(),
            "tweak":       self.tweak_var.get(),
            "rand":        self.rand_var.get(),
            "strip":       self.strip_var.get(),
            "fmt":         self.fmt_var.get(),
            "quality":     self.quality_var.get(),
        }

    def from_dict(self, d: dict) -> None:
        self.gps_var.set(d.get("gps_name",    "中国·北京"))
        self.device_var.set(d.get("device_name", "Apple iPhone 15 Pro"))
        self.tweak_var.set(d.get("tweak", True))
        self.rand_var.set(d.get("rand",  True))
        self.strip_var.set(d.get("strip", False))
        self.fmt_var.set(d.get("fmt",    "JPEG"))
        self.quality_var.set(d.get("quality", 95))
        self.quality_lbl.configure(text=str(d.get("quality", 95)))


# ──────────────────────────────────────────────
# Single-image tab
# ──────────────────────────────────────────────
class SingleTab(ctk.CTkFrame):
    def __init__(self, master, settings: SettingsPanel, status_cb, **kw):
        super().__init__(master, fg_color="transparent", **kw)
        self._settings   = settings
        self._status_cb  = status_cb
        self._src_thumb  = None
        self._dst_thumb  = None
        self._build()

    def _build(self):
        # ── File row ──────────────────────────
        file_frm = ctk.CTkFrame(self)
        file_frm.pack(fill="x", padx=10, pady=(10, 4))

        ctk.CTkLabel(file_frm, text="源图片").grid(row=0, column=0, sticky="w", padx=8, pady=(6,0))
        self.src_var = ctk.StringVar()
        ctk.CTkEntry(file_frm, textvariable=self.src_var, width=420,
                     placeholder_text="点击右侧按钮选择图片…").grid(row=1, column=0, padx=8, pady=(2,6), sticky="we")
        ctk.CTkButton(file_frm, text="浏览", width=70,
                      command=self._pick_src).grid(row=1, column=1, padx=(0,8), pady=(2,6))

        ctk.CTkLabel(file_frm, text="输出路径").grid(row=2, column=0, sticky="w", padx=8)
        self.dst_var = ctk.StringVar()
        ctk.CTkEntry(file_frm, textvariable=self.dst_var, width=420,
                     placeholder_text="自动根据源文件生成，可修改…").grid(row=3, column=0, padx=8, pady=(2,8), sticky="we")
        ctk.CTkButton(file_frm, text="保存到", width=70,
                      command=self._pick_dst).grid(row=3, column=1, padx=(0,8), pady=(2,8))
        file_frm.columnconfigure(0, weight=1)

        # ── Preview row ───────────────────────
        prev_frm = ctk.CTkFrame(self)
        prev_frm.pack(fill="x", padx=10, pady=4)

        self.src_canvas = self._make_canvas(prev_frm, "源图预览")
        self.src_canvas.pack(side="left", expand=True, fill="both", padx=(8,4), pady=8)
        self.dst_canvas = self._make_canvas(prev_frm, "输出预览")
        self.dst_canvas.pack(side="left", expand=True, fill="both", padx=(4,8), pady=8)

        # ── Progress + button ─────────────────
        ctrl_frm = ctk.CTkFrame(self, fg_color="transparent")
        ctrl_frm.pack(fill="x", padx=10, pady=4)
        self.progress = ctk.CTkProgressBar(ctrl_frm)
        self.progress.pack(fill="x", padx=8, pady=(0,6))
        self.progress.set(0)
        ctk.CTkButton(
            ctrl_frm, text="🚀  开始处理", height=42,
            font=ctk.CTkFont(size=15, weight="bold"),
            fg_color=ACCENT, hover_color="#1a7ad4",
            command=self._run
        ).pack(fill="x", padx=8)

        # ── Log ───────────────────────────────
        log_frm = ctk.CTkFrame(self)
        log_frm.pack(fill="both", expand=True, padx=10, pady=(6,10))
        ctk.CTkLabel(log_frm, text="处理结果", font=ctk.CTkFont(weight="bold")).pack(anchor="w", padx=8, pady=(6,2))
        self.log = ctk.CTkTextbox(log_frm, height=160, state="disabled",
                                  font=ctk.CTkFont(family="Courier", size=12))
        self.log.pack(fill="both", expand=True, padx=8, pady=(0,8))

        # copy-to-clipboard button
        ctk.CTkButton(
            log_frm, text="📋  复制结果", width=120, height=28,
            fg_color="gray40", hover_color="gray30",
            command=self._copy_log
        ).pack(anchor="e", padx=8, pady=(0,8))

    @staticmethod
    def _make_canvas(parent, label: str) -> ctk.CTkFrame:
        frm = ctk.CTkFrame(parent, width=THUMB_SIZE[0], height=THUMB_SIZE[1] + 28)
        frm.pack_propagate(False)
        ctk.CTkLabel(frm, text=label, font=ctk.CTkFont(size=11)).pack(pady=(4,0))
        lbl = ctk.CTkLabel(frm, text="")
        lbl.pack(expand=True)
        frm._img_label = lbl  # type: ignore[attr-defined]
        return frm

    def _pick_src(self):
        path = filedialog.askopenfilename(
            title="选择源图片",
            filetypes=[("图片文件", " ".join(f"*{e}" for e in IMAGE_EXTENSIONS)),
                       ("所有文件", "*.*")]
        )
        if not path:
            return
        self.src_var.set(path)
        src = Path(path)
        fmt_ext = {"JPEG": ".jpg", "PNG": ".png", "WEBP": ".webp"}.get(
            self._settings.fmt_var.get(), ".jpg")
        self.dst_var.set(str(src.with_name(src.stem + "_privacy" + fmt_ext)))
        # preview
        thumb = _make_thumb(src)
        if thumb:
            self._src_thumb = thumb
            self.src_canvas._img_label.configure(image=thumb, text="")

    def _pick_dst(self):
        fmt = self._settings.fmt_var.get()
        ext_map = {"JPEG": ".jpg", "PNG": ".png", "WEBP": ".webp"}
        ext = ext_map.get(fmt, ".jpg")
        path = filedialog.asksaveasfilename(
            defaultextension=ext,
            filetypes=[(fmt, f"*{ext}"), ("所有文件", "*.*")]
        )
        if path:
            self.dst_var.set(path)

    def _log_write(self, text: str, color: str = "white"):
        self.log.configure(state="normal")
        self.log.delete("1.0", "end")
        self.log.insert("end", text)
        self.log.configure(state="disabled")

    def _copy_log(self):
        content = self.log.get("1.0", "end").strip()
        self.log.clipboard_clear()
        self.log.clipboard_append(content)
        self._status_cb("已复制到剪贴板 ✓")

    def _run(self):
        src_str = self.src_var.get().strip()
        dst_str = self.dst_var.get().strip()
        if not src_str:
            messagebox.showerror("错误", "请先选择源图片")
            return
        src = Path(src_str)
        if not src.exists():
            messagebox.showerror("错误", f"源图片不存在:\n{src}")
            return
        if not dst_str:
            messagebox.showerror("错误", "请指定输出路径")
            return
        dst = Path(dst_str)
        if not dst.parent.exists():
            messagebox.showerror("错误", f"输出目录不存在:\n{dst.parent}")
            return

        opts = self._settings.build_options(src, dst)

        def _task():
            def _prog(frac: float, msg: str):
                self.progress.set(frac)
                self._status_cb(msg)

            try:
                result = process_image(opts, progress_cb=_prog)
            except Exception as exc:
                self.after(0, lambda: messagebox.showerror("处理失败", str(exc)))
                self.after(0, lambda: self.progress.set(0))
                return

            def _done():
                self._log_write(result.summary())
                self.progress.set(1.0)
                # output thumbnail
                thumb = _make_thumb(result.output_path)
                if thumb:
                    self._dst_thumb = thumb
                    self.dst_canvas._img_label.configure(image=thumb, text="")
                sha_ok  = "✓" if result.hash_changed  else "✗"
                phash_ok = "✓" if result.phash_changed else "✗"
                self._status_cb(
                    f"完成  SHA256:{sha_ok}  pHash:{phash_ok}"
                )

            self.after(0, _done)

        threading.Thread(target=_task, daemon=True).start()


# ──────────────────────────────────────────────
# Batch-processing tab
# ──────────────────────────────────────────────
class BatchTab(ctk.CTkFrame):
    def __init__(self, master, settings: SettingsPanel, status_cb, **kw):
        super().__init__(master, fg_color="transparent", **kw)
        self._settings  = settings
        self._status_cb = status_cb
        self._file_list: list[Path] = []
        self._build()

    def _build(self):
        # ── File list controls ────────────────
        ctrl = ctk.CTkFrame(self)
        ctrl.pack(fill="x", padx=10, pady=(10, 4))

        ctk.CTkLabel(ctrl, text="批量处理文件列表",
                     font=ctk.CTkFont(size=13, weight="bold")).pack(anchor="w", padx=8, pady=(6,2))

        btn_row = ctk.CTkFrame(ctrl, fg_color="transparent")
        btn_row.pack(fill="x", padx=8, pady=(0,6))
        ctk.CTkButton(btn_row, text="＋ 添加图片", width=110,
                      command=self._add_files).pack(side="left", padx=(0,6))
        ctk.CTkButton(btn_row, text="📁 添加文件夹", width=110,
                      command=self._add_folder).pack(side="left", padx=(0,6))
        ctk.CTkButton(btn_row, text="✕ 清空列表", width=100, fg_color=DANGER,
                      hover_color="#b03030",
                      command=self._clear).pack(side="left")
        self.count_lbl = ctk.CTkLabel(btn_row, text="0 个文件")
        self.count_lbl.pack(side="right", padx=8)

        # ── Scrollable file list ──────────────
        self.list_box = ctk.CTkTextbox(self, height=180,
                                       font=ctk.CTkFont(family="Courier", size=11),
                                       state="disabled")
        self.list_box.pack(fill="x", padx=10, pady=4)

        # ── Output dir ───────────────────────
        out_frm = ctk.CTkFrame(self)
        out_frm.pack(fill="x", padx=10, pady=4)
        ctk.CTkLabel(out_frm, text="输出目录").grid(row=0, column=0, sticky="w", padx=8)
        self.dst_dir_var = ctk.StringVar()
        ctk.CTkEntry(out_frm, textvariable=self.dst_dir_var,
                     placeholder_text="选择输出目录…", width=420).grid(
                         row=1, column=0, padx=8, pady=(2,8), sticky="we")
        ctk.CTkButton(out_frm, text="选择", width=70,
                      command=self._pick_dst_dir).grid(row=1, column=1, padx=(0,8), pady=(2,8))
        out_frm.columnconfigure(0, weight=1)

        # ── Progress ──────────────────────────
        self.progress = ctk.CTkProgressBar(self)
        self.progress.pack(fill="x", padx=10, pady=4)
        self.progress.set(0)
        self.prog_lbl = ctk.CTkLabel(self, text="")
        self.prog_lbl.pack(anchor="w", padx=10)

        ctk.CTkButton(
            self, text="🚀  批量处理", height=42,
            font=ctk.CTkFont(size=15, weight="bold"),
            fg_color=ACCENT, hover_color="#1a7ad4",
            command=self._run
        ).pack(fill="x", padx=10, pady=8)

        # ── Results log ───────────────────────
        self.log = ctk.CTkTextbox(self, height=180, state="disabled",
                                  font=ctk.CTkFont(family="Courier", size=11))
        self.log.pack(fill="both", expand=True, padx=10, pady=(0,10))

    def _refresh_list(self):
        self.list_box.configure(state="normal")
        self.list_box.delete("1.0", "end")
        for p in self._file_list:
            self.list_box.insert("end", str(p) + "\n")
        self.list_box.configure(state="disabled")
        self.count_lbl.configure(text=f"{len(self._file_list)} 个文件")

    def _add_files(self):
        paths = filedialog.askopenfilenames(
            title="选择图片",
            filetypes=[("图片文件", " ".join(f"*{e}" for e in IMAGE_EXTENSIONS)),
                       ("所有文件", "*.*")]
        )
        for p in paths:
            pp = Path(p)
            if pp not in self._file_list:
                self._file_list.append(pp)
        self._refresh_list()

    def _add_folder(self):
        folder = filedialog.askdirectory(title="选择包含图片的文件夹")
        if not folder:
            return
        for p in Path(folder).iterdir():
            if p.suffix.lower() in IMAGE_EXTENSIONS and p not in self._file_list:
                self._file_list.append(p)
        self._refresh_list()

    def _clear(self):
        self._file_list.clear()
        self._refresh_list()

    def _pick_dst_dir(self):
        folder = filedialog.askdirectory(title="选择输出目录")
        if folder:
            self.dst_dir_var.set(folder)

    def _log_append(self, text: str):
        self.log.configure(state="normal")
        self.log.insert("end", text + "\n")
        self.log.see("end")
        self.log.configure(state="disabled")

    def _run(self):
        if not self._file_list:
            messagebox.showwarning("警告", "文件列表为空，请先添加图片")
            return
        dst_str = self.dst_dir_var.get().strip()
        if not dst_str:
            messagebox.showerror("错误", "请选择输出目录")
            return
        dst_dir = Path(dst_str)
        if not dst_dir.exists():
            try:
                dst_dir.mkdir(parents=True)
            except Exception as exc:
                messagebox.showerror("错误", f"无法创建输出目录: {exc}")
                return

        # dummy opts for template (src/dst overridden inside batch_process)
        dummy = Path(".")
        opts_tpl = self._settings.build_options(dummy, dummy)

        total = len(self._file_list)

        self.log.configure(state="normal")
        self.log.delete("1.0", "end")
        self.log.configure(state="disabled")
        self.progress.set(0)

        def _task():
            def _prog(i: int, n: int, name: str):
                frac = i / n if n else 0
                self.progress.set(frac)
                self.prog_lbl.configure(text=f"{i}/{n}  {name}")
                self._status_cb(f"批量处理 {i}/{n}: {name}")

            results = batch_process(
                src_paths    = self._file_list,
                dst_dir      = dst_dir,
                opts_template= opts_tpl,
                progress_cb  = _prog,
            )

            def _done():
                ok = sum(1 for _, r, e in results if e is None)
                fail = total - ok
                self._log_append(f"━━━ 批量完成: {ok} 成功 / {fail} 失败 ━━━")
                for src, res, err in results:
                    if err:
                        self._log_append(f"✗  {src.name}: {err}")
                    else:
                        assert res
                        sha_ok   = "✓" if res.hash_changed  else "✗"
                        phash_ok = "✓" if res.phash_changed else "✗"
                        self._log_append(
                            f"✓  {src.name} → {res.output_path.name}"
                            f"  SHA:{sha_ok}  pHash:{phash_ok}"
                        )
                self.progress.set(1.0)
                self.prog_lbl.configure(text=f"完成 {ok}/{total}")
                self._status_cb(f"批量完成: {ok} 成功 / {fail} 失败")

            self.after(0, _done)

        threading.Thread(target=_task, daemon=True).start()


# ──────────────────────────────────────────────
# About tab
# ──────────────────────────────────────────────
class AboutTab(ctk.CTkFrame):
    def __init__(self, master, **kw):
        super().__init__(master, fg_color="transparent", **kw)
        self._build()

    def _build(self):
        ctk.CTkLabel(
            self,
            text="🔒  Image Privacy Tool",
            font=ctk.CTkFont(size=26, weight="bold"),
        ).pack(pady=(40, 4))
        ctk.CTkLabel(self, text=APP_VERSION,
                     font=ctk.CTkFont(size=14), text_color="gray").pack()

        info = (
            "\n"
            "一款轻量级图片隐私处理工具，帮助您：\n\n"
            "  ✅  修改 SHA-256 文件哈希\n"
            "  ✅  伪造 EXIF GPS 地理位置\n"
            "  ✅  伪造拍摄设备信息\n"
            "  ✅  写入隐藏备注（UserComment）\n"
            "  ✅  可选像素微扰以改变感知哈希(pHash)\n"
            "  ✅  支持批量处理整个文件夹\n"
            "  ✅  支持 JPEG / PNG / WEBP 输出\n"
            "  ✅  深色 / 浅色主题切换\n\n"
            "⚠  请仅在合法、合规的场景下使用本工具。\n"
            "本工具不对任何滥用行为负责。\n\n"
            "MIT License © 2026"
        )
        ctk.CTkLabel(
            self, text=info,
            font=ctk.CTkFont(size=13),
            justify="left",
        ).pack(padx=40)


# ──────────────────────────────────────────────
# Main application window
# ──────────────────────────────────────────────
class App(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title(f"{APP_NAME}  {APP_VERSION}")
        self.geometry("1080x720")
        self.minsize(860, 600)
        ctk.set_appearance_mode("dark")
        ctk.set_default_color_theme("blue")
        self._build_ui()
        self._load_settings()

    def _build_ui(self):
        # ── Top bar ───────────────────────────
        top = ctk.CTkFrame(self, height=48, corner_radius=0)
        top.pack(fill="x", side="top")
        ctk.CTkLabel(
            top, text=f"🔒  {APP_NAME}",
            font=ctk.CTkFont(size=18, weight="bold")
        ).pack(side="left", padx=16, pady=8)
        ctk.CTkLabel(top, text=APP_VERSION,
                     text_color="gray", font=ctk.CTkFont(size=12)).pack(side="left")

        self._theme_btn = ctk.CTkButton(
            top, text="🌙 深色", width=88, height=30,
            command=self._toggle_theme
        )
        self._theme_btn.pack(side="right", padx=10, pady=8)

        ctk.CTkButton(
            top, text="💾 保存设置", width=90, height=30,
            fg_color="gray40", hover_color="gray30",
            command=self._save_settings
        ).pack(side="right", padx=(0, 6), pady=8)

        # ── Body: sidebar + tabs ──────────────
        body = ctk.CTkFrame(self, fg_color="transparent")
        body.pack(fill="both", expand=True, side="top")

        self.settings_panel = SettingsPanel(body)
        self.settings_panel.pack(side="left", fill="y", padx=(8, 4), pady=8)

        right = ctk.CTkFrame(body, fg_color="transparent")
        right.pack(side="left", fill="both", expand=True, padx=(4, 8), pady=8)

        tabs = ctk.CTkTabview(right)
        tabs.pack(fill="both", expand=True)

        def_status = lambda msg: self._status_bar.configure(text=msg)

        tab_single = tabs.add("  单张处理  ")
        tab_batch  = tabs.add("  批量处理  ")
        tab_about  = tabs.add("  关于  ")

        SingleTab(tab_single, self.settings_panel, def_status).pack(fill="both", expand=True)
        BatchTab (tab_batch,  self.settings_panel, def_status).pack(fill="both", expand=True)
        AboutTab (tab_about).pack(fill="both", expand=True)

        # ── Status bar ────────────────────────
        self._status_bar = ctk.CTkLabel(
            self, text="就绪", anchor="w",
            font=ctk.CTkFont(size=11), height=24,
            fg_color=("gray85", "gray20")
        )
        self._status_bar.pack(fill="x", side="bottom", padx=0, pady=0)

    def _toggle_theme(self):
        current = ctk.get_appearance_mode()
        if current.lower() == "dark":
            ctk.set_appearance_mode("light")
            self._theme_btn.configure(text="☀ 浅色")
        else:
            ctk.set_appearance_mode("dark")
            self._theme_btn.configure(text="🌙 深色")

    def _save_settings(self):
        save_settings(self.settings_panel.to_dict())
        self._status_bar.configure(text="设置已保存 ✓")

    def _load_settings(self):
        data = load_settings()
        if data:
            self.settings_panel.from_dict(data)


# ──────────────────────────────────────────────
# Entry point
# ──────────────────────────────────────────────
def main():
    app = App()
    app.mainloop()


if __name__ == "__main__":
    main()
