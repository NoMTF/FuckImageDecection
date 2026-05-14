# 图片元数据修改器

一个面向反跟踪场景的图片隐私工具。网页端、Windows、Linux、macOS、Android 都继续维护，不再只保留网页版。

[![Workers 检查](https://github.com/NoMTF/FuckImageDecection/actions/workflows/workers-check.yml/badge.svg)](https://github.com/NoMTF/FuckImageDecection/actions/workflows/workers-check.yml)
[![全端下载构建](https://github.com/NoMTF/FuckImageDecection/actions/workflows/release.yml/badge.svg)](https://github.com/NoMTF/FuckImageDecection/actions/workflows/release.yml)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## 直接下载（开箱即用）

> 无需安装 Python。下载后按对应平台说明运行。下载地址来自 GitHub Release 的 `latest` 资产，不再使用会 404 的旧 `dist/` 假链接。

| Windows | Linux | macOS | Android | Web / Workers |
|---|---|---|---|---|
| [![Windows](https://img.shields.io/badge/WINDOWS-立即下载_.EXE-0078D4?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/NoMTF/FuckImageDecection/releases/latest/download/ImagePrivacyTool-Windows.zip) | [![Linux](https://img.shields.io/badge/LINUX-立即下载_BINARY-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://github.com/NoMTF/FuckImageDecection/releases/latest/download/ImagePrivacyTool-Linux.tar.gz) | [![macOS](https://img.shields.io/badge/MACOS-立即下载_.APP-000000?style=for-the-badge&logo=apple&logoColor=white)](https://github.com/NoMTF/FuckImageDecection/releases/latest/download/ImagePrivacyTool-macOS.zip) | [![Android](https://img.shields.io/badge/ANDROID-立即下载_.APK-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/NoMTF/FuckImageDecection/releases/latest/download/ImagePrivacyTool-Android.apk) | [![Web](https://img.shields.io/badge/WEB-下载静态版_ZIP-38BDF8?style=for-the-badge&logo=cloudflare&logoColor=white)](https://github.com/NoMTF/FuckImageDecection/releases/latest/download/ImagePrivacyTool-Web.zip) |
| 解压后双击 `.exe` | 解压后 `chmod +x ImagePrivacyTool` 再运行 | 解压后拖入“应用程序” | 允许未知来源后安装 | 可部署到 Cloudflare Workers |

## 项目简介

有些平台和客户端会同时看文件哈希、感知哈希、EXIF、XMP、设备、镜头、时间、GPS、缩略图、文件名等线索。这个工具会在尽量不影响肉眼观感的前提下，帮助你检测并改写这些可追踪信息。

网页端是纯静态本地处理：图片不会上传到服务器，浏览器内完成检测、改写和下载。桌面端和 Android 端也复用同一套核心处理逻辑。

## 功能特性

| 功能 | 说明 |
|---|---|
| SHA-256 哈希修改 | 通过重新编码图片，使文件哈希完全改变 |
| pHash 感知哈希扰动 | 对图像做微小重采样和像素微扰，尽量肉眼无感地改变感知哈希 |
| EXIF / GPS 改写 | 支持伪造或清理拍摄设备、GPS、时间、备注、唯一 ID 等常见字段 |
| 网页端同款可编辑字段 | 桌面端新增软件、主机、作者、版权、描述、镜头、序列号、曝光、ISO、白平衡、闪光、GPS 海拔/朝向/速度等扩展字段；Android 同步常用扩展项 |
| 设备与镜头成套随机 | iPhone、小米、华为、三星、Pixel、索尼、尼康、佳能、富士等设备会匹配对应镜头，避免“三星机身配苹果镜头” |
| 随机拍摄时间 | 写入随机 EXIF 时间，并同步输出文件最后修改时间 |
| 原始信息检测 | 网页端会检测 EXIF、XMP、ICC、TIFF/DNG、HEIC/HEIF、SHA-256、pHash 等信息 |
| 安全随机项 | 高影响字段默认不参与一键随机，避免亮度分块、方向错误、颜色异常等明显破坏 |
| 批量处理 | 桌面端支持文件夹批处理；网页端多图会自动打包 ZIP |
| 格式支持 | 读取 JPEG / PNG / WEBP / TIFF / BMP / HEIC / HEIF，输出 JPEG / PNG / WEBP |
| 现代化 GUI | 桌面端有深色/浅色主题、图片预览和结果对比 |
| 手机适配 | Android APK 使用触摸界面，并适配 Android 13+ 图片读取权限 |
| Workers 部署 | 网页版可一键部署到 Cloudflare Workers 静态资源 |

## 本地运行

### 网页版 / Cloudflare Workers

需要 Node.js 22 或更高版本。

```bat
npm install
npm run dev
```

部署：

```bat
npm run deploy
```

### 桌面端

需要 Python 3.9 或更高版本。

```bat
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python image_privacy_tool.py
```

Linux / macOS：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 image_privacy_tool.py
```

### Android

源码在 `mobile/`，GitHub Actions 会用 Buildozer 自动构建 `ImagePrivacyTool-Android.apk`。

## 自动构建

仓库包含两条工作流：

| 工作流 | 作用 |
|---|---|
| `workers-check.yml` | 快速检查网页版 Workers 静态资源是否能打包 |
| `release.yml` | 构建 Windows / Linux / macOS / Android / Web 下载包，并发布到 `latest` Release |

## 目录结构

```text
FuckImageDecection/
├── workers-site/              # 网页版静态源码
├── core.py                    # 桌面端 / 移动端共用处理核心
├── image_privacy_tool.py      # Windows / Linux / macOS 桌面 GUI
├── mobile/
│   ├── main.py                # Android Kivy 界面
│   └── buildozer.spec         # Android 构建配置
├── .github/workflows/
│   ├── workers-check.yml
│   └── release.yml
├── requirements.txt
├── requirements-mobile.txt
├── package.json
└── wrangler.jsonc
```

## 说明

本项目用于合法的个人隐私保护、反跟踪和图片元数据清理场景。请不要用于冒充他人、绕过平台安全机制或其他违法用途。

作者：南盺<br>
推特：[@xynMTFxyn](https://x.com/xynMTFxyn)<br>
备案号：大包字京IPC备1145141919号
