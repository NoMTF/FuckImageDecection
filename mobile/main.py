"""
Image Privacy Tool — Mobile App (Kivy + KivyMD)
Android / iOS 手机端，触摸友好的 Material Design 界面
"""
from __future__ import annotations

import os
import sys
import threading
from pathlib import Path
from typing import Optional

# 将父目录加入路径以复用 core.py
sys.path.insert(0, str(Path(__file__).parent.parent))

from kivy.lang import Builder
from kivy.metrics import dp
from kivy.properties import StringProperty, BooleanProperty, NumericProperty
from kivy.uix.scrollview import ScrollView
from kivymd.app import MDApp
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.button import MDRaisedButton, MDFlatButton, MDIconButton
from kivymd.uix.dialog import MDDialog
from kivymd.uix.label import MDLabel
from kivymd.uix.progressbar import MDProgressBar
from kivymd.uix.selectioncontrol import MDCheckbox, MDSwitch
from kivymd.uix.slider import MDSlider
from kivymd.uix.snackbar import Snackbar
from kivymd.uix.textfield import MDTextField
from kivymd.uix.toolbar import MDTopAppBar

try:
    from android.permissions import Permission, request_permissions  # type: ignore[import]
    from android.storage import primary_external_storage_path  # type: ignore[import]
    ANDROID = True
except ImportError:
    ANDROID = False

try:
    from plyer import filechooser  # type: ignore[import]
    HAS_PLYER = True
except ImportError:
    HAS_PLYER = False

from core import (
    GPS_PRESETS,
    DEVICE_PRESETS,
    ProcessOptions,
    process_image,
    batch_process,
    IMAGE_EXTENSIONS,
)

KV = """
#:import dp kivy.metrics.dp
#:import MDColors kivymd.color_definitions.colors

<MainScreen>:
    orientation: "vertical"
    md_bg_color: app.theme_cls.bg_normal

    MDTopAppBar:
        id: toolbar
        title: "Image Privacy Tool"
        elevation: 2
        right_action_items:
            [["theme-light-dark", lambda x: app.toggle_theme()],
             ["information-outline", lambda x: app.show_about()]]

    ScrollView:
        MDBoxLayout:
            orientation: "vertical"
            adaptive_height: True
            padding: dp(16)
            spacing: dp(12)

            # ── Source file ──────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(8)
                    MDLabel:
                        text: "📂  源图片"
                        font_style: "Subtitle1"
                    MDBoxLayout:
                        adaptive_height: True
                        spacing: dp(8)
                        MDTextField:
                            id: src_field
                            hint_text: "点击右侧图标选择…"
                            mode: "rectangle"
                            size_hint_x: 1
                        MDIconButton:
                            icon: "folder-open"
                            on_release: app.pick_src()

            # ── Output path ──────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(8)
                    MDLabel:
                        text: "💾  输出路径"
                        font_style: "Subtitle1"
                    MDBoxLayout:
                        adaptive_height: True
                        spacing: dp(8)
                        MDTextField:
                            id: dst_field
                            hint_text: "自动生成，可修改…"
                            mode: "rectangle"
                            size_hint_x: 1
                        MDIconButton:
                            icon: "content-save"
                            on_release: app.pick_dst()

            # ── GPS ──────────────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(8)
                    MDLabel:
                        text: "📍  GPS 预设"
                        font_style: "Subtitle1"
                    MDTextField:
                        id: gps_field
                        text: "中国·北京"
                        hint_text: "GPS 预设名称"
                        mode: "rectangle"
                        on_focus: if self.focus: app.show_gps_picker()
                    MDBoxLayout:
                        adaptive_height: True
                        spacing: dp(8)
                        MDTextField:
                            id: lat_field
                            hint_text: "自定义纬度"
                            mode: "rectangle"
                            input_filter: "float"
                            size_hint_x: 0.5
                        MDTextField:
                            id: lon_field
                            hint_text: "自定义经度"
                            mode: "rectangle"
                            input_filter: "float"
                            size_hint_x: 0.5

            # ── Device ───────────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(8)
                    MDLabel:
                        text: "📷  拍摄设备"
                        font_style: "Subtitle1"
                    MDTextField:
                        id: device_field
                        text: "Apple iPhone 15 Pro"
                        hint_text: "设备预设名称"
                        mode: "rectangle"
                        on_focus: if self.focus: app.show_device_picker()

            # ── Options ──────────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(4)
                    MDLabel:
                        text: "⚙  处理选项"
                        font_style: "Subtitle1"
                    MDBoxLayout:
                        adaptive_height: True
                        MDLabel:
                            text: "微扰像素（改变感知哈希）"
                        MDSwitch:
                            id: tweak_sw
                            active: True
                    MDBoxLayout:
                        adaptive_height: True
                        MDLabel:
                            text: "随机 nonce"
                        MDSwitch:
                            id: rand_sw
                            active: True
                    MDBoxLayout:
                        adaptive_height: True
                        MDLabel:
                            text: "清除全部 EXIF"
                        MDSwitch:
                            id: strip_sw
                            active: False
                    MDLabel:
                        text: "JPEG 质量"
                    MDSlider:
                        id: quality_sl
                        min: 50
                        max: 100
                        value: 95
                        step: 1
                    MDLabel:
                        id: quality_lbl
                        text: "95"

            # ── Note ─────────────────────────
            MDCard:
                padding: dp(12)
                adaptive_height: True
                elevation: 1
                MDBoxLayout:
                    orientation: "vertical"
                    adaptive_height: True
                    spacing: dp(8)
                    MDLabel:
                        text: "💬  隐藏备注"
                        font_style: "Subtitle1"
                    MDTextField:
                        id: note_field
                        hint_text: "写入 EXIF UserComment…"
                        mode: "rectangle"

            # ── Progress ─────────────────────
            MDProgressBar:
                id: progress_bar
                value: 0

            MDLabel:
                id: status_lbl
                text: "就绪"
                halign: "center"

            # ── Process button ───────────────
            MDRaisedButton:
                text: "🚀  开始处理"
                size_hint_x: 1
                height: dp(52)
                font_size: "17sp"
                on_release: app.run_process()

            # ── Log ──────────────────────────
            MDCard:
                padding: dp(12)
                size_hint_y: None
                height: dp(200)
                elevation: 1
                ScrollView:
                    MDLabel:
                        id: log_lbl
                        text: "处理结果将显示在这里…"
                        size_hint_y: None
                        height: self.texture_size[1]
                        font_name: "RobotoMono-Regular"
                        font_size: "12sp"
"""


class MainScreen(MDBoxLayout):
    pass


class ImagePrivacyApp(MDApp):
    def build(self):
        self.theme_cls.primary_palette = "Blue"
        self.theme_cls.theme_style = "Dark"
        Builder.load_string(KV)
        self.screen = MainScreen()

        # quality slider callback
        self.screen.ids.quality_sl.bind(
            value=lambda inst, val: self.screen.ids.quality_lbl.setter("text")(
                self.screen.ids.quality_lbl, str(int(val))
            )
        )

        if ANDROID:
            request_permissions([Permission.READ_EXTERNAL_STORAGE,
                                  Permission.WRITE_EXTERNAL_STORAGE])
        return self.screen

    def toggle_theme(self):
        if self.theme_cls.theme_style == "Dark":
            self.theme_cls.theme_style = "Light"
        else:
            self.theme_cls.theme_style = "Dark"

    def show_about(self):
        dialog = MDDialog(
            title="关于 Image Privacy Tool",
            text=(
                "版本: v2.0\n\n"
                "轻量级图片隐私处理工具\n"
                "修改文件哈希、EXIF 元数据、可选感知哈希\n\n"
                "MIT License © 2026"
            ),
            buttons=[MDFlatButton(text="关闭", on_release=lambda x: dialog.dismiss())],
        )
        dialog.open()

    def _show_picker_dialog(self, title: str, items: list[str], callback):
        from kivymd.uix.list import MDList, OneLineListItem
        dialog_content = ScrollView(size_hint_y=None, height=dp(300))
        lst = MDList()
        dlg = [None]

        def _pick(item_text):
            callback(item_text)
            dlg[0].dismiss()

        for item in items:
            lst.add_widget(OneLineListItem(
                text=item,
                on_release=lambda x, t=item: _pick(t)
            ))
        dialog_content.add_widget(lst)
        dlg[0] = MDDialog(title=title, type="custom", content_cls=dialog_content,
                          buttons=[MDFlatButton(text="取消",
                                                on_release=lambda x: dlg[0].dismiss())])
        dlg[0].open()

    def show_gps_picker(self):
        self._show_picker_dialog(
            "选择 GPS 预设",
            list(GPS_PRESETS.keys()),
            lambda t: setattr(self.screen.ids.gps_field, "text", t),
        )

    def show_device_picker(self):
        self._show_picker_dialog(
            "选择设备预设",
            list(DEVICE_PRESETS.keys()),
            lambda t: setattr(self.screen.ids.device_field, "text", t),
        )

    def pick_src(self):
        if HAS_PLYER:
            filechooser.open_file(
                on_selection=self._on_src_selected,
                filters=["*.jpg", "*.jpeg", "*.png", "*.webp", "*.bmp"],
                title="选择源图片",
            )
        else:
            Snackbar(text="当前平台不支持文件选择器").open()

    def _on_src_selected(self, selection):
        if selection:
            path = selection[0]
            self.screen.ids.src_field.text = path
            src = Path(path)
            self.screen.ids.dst_field.text = str(
                src.with_name(src.stem + "_privacy.jpg")
            )

    def pick_dst(self):
        if HAS_PLYER:
            filechooser.save_file(
                on_selection=self._on_dst_selected,
                filters=["*.jpg"],
                title="保存到…",
            )
        else:
            Snackbar(text="当前平台不支持文件选择器").open()

    def _on_dst_selected(self, selection):
        if selection:
            self.screen.ids.dst_field.text = selection[0]

    def _set_status(self, text: str, frac: float = -1):
        self.screen.ids.status_lbl.text = text
        if frac >= 0:
            self.screen.ids.progress_bar.value = int(frac * 100)

    def _log(self, text: str):
        self.screen.ids.log_lbl.text = text

    def run_process(self):
        ids = self.screen.ids
        src_str = ids.src_field.text.strip()
        dst_str = ids.dst_field.text.strip()

        if not src_str:
            Snackbar(text="请先选择源图片").open()
            return
        src = Path(src_str)
        if not src.exists():
            Snackbar(text=f"文件不存在: {src_str}").open()
            return
        if not dst_str:
            Snackbar(text="请指定输出路径").open()
            return
        dst = Path(dst_str)

        try:
            lat = float(ids.lat_field.text.strip()) if ids.lat_field.text.strip() else None
            lon = float(ids.lon_field.text.strip()) if ids.lon_field.text.strip() else None
        except ValueError:
            lat = lon = None

        opts = ProcessOptions(
            src               = src,
            dst               = dst,
            gps_name          = ids.gps_field.text,
            device_name       = ids.device_field.text,
            custom_lat        = lat,
            custom_lon        = lon,
            hidden_note       = ids.note_field.text,
            tweak_phash       = ids.tweak_sw.active,
            randomize_metadata= ids.rand_sw.active,
            strip_exif        = ids.strip_sw.active,
            jpeg_quality      = int(ids.quality_sl.value),
            output_format     = "JPEG",
        )

        def _task():
            def _prog(frac: float, msg: str):
                from kivy.clock import Clock
                Clock.schedule_once(lambda dt: self._set_status(msg, frac))

            try:
                result = process_image(opts, progress_cb=_prog)
            except Exception as exc:
                from kivy.clock import Clock
                Clock.schedule_once(
                    lambda dt: Snackbar(text=f"处理失败: {exc}").open()
                )
                return

            from kivy.clock import Clock
            def _done(dt):
                self._log(result.summary())
                sha_ok   = "✓" if result.hash_changed  else "✗"
                phash_ok = "✓" if result.phash_changed else "✗"
                Snackbar(
                    text=f"处理完成  SHA256:{sha_ok}  pHash:{phash_ok}"
                ).open()
            Clock.schedule_once(_done)

        threading.Thread(target=_task, daemon=True).start()


def main():
    ImagePrivacyApp().run()


if __name__ == "__main__":
    main()
