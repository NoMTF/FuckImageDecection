[app]
title = Image Privacy Tool
package.name = imageprivacytool
package.domain = org.imageprivacy

source.dir = .
source.include_exts = py,png,jpg,kv,atlas,json

# 入口
main = main

version = 2.1
requirements = python3,kivy==2.3.0,kivymd==1.2.0,pillow,piexif,plyer

orientation = portrait
fullscreen = 0

android.permissions = READ_MEDIA_IMAGES, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE, INTERNET
android.api = 34
android.minapi = 26
android.ndk = 25b
android.accept_sdk_license = True
android.archs = arm64-v8a, armeabi-v7a

# 图标 (替换为实际 icon.png)
# icon.filename = %(source.dir)s/assets/icon.png
# presplash.filename = %(source.dir)s/assets/splash.png

[buildozer]
log_level = 2
warn_on_root = 1
