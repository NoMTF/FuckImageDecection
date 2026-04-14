<div align="center">

<h1>🔒 Image Privacy Tool</h1>

<p><strong>一款专业的图片隐私处理工具</strong><br>
在肉眼无感的前提下，彻底改变图片的数字指纹</p>

[![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Platform](https://img.shields.io/badge/平台-Windows%20%7C%20Linux%20%7C%20macOS%20%7C%20Android-brightgreen?style=for-the-badge)](https://github.com/nomtf/fuckimagedecection/releases)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Release](https://img.shields.io/github/v/release/nomtf/fuckimagedecection?style=for-the-badge&color=blue)](https://github.com/nomtf/fuckimagedecection/releases/latest)

</div>

---

## 📖 项目简介

**Image Privacy Tool** 是一个帮助用户保护图片隐私的轻量级工具。  
它能在视觉效果几乎不变的前提下，对图片进行多维度的数字指纹改造：

```
原始图片                          处理后图片
━━━━━━━━━━━━━━                   ━━━━━━━━━━━━━━━━━━━━
SHA-256: a1b2c3…  ──────────►   SHA-256: 9f8e7d…  ✓ 已改变
pHash:   aabbcc…  ──────────►   pHash:   112233…  ✓ 已改变（可选）
GPS:     真实位置  ──────────►   GPS:     中国北京  ✓ 已伪造
设备:    真实机型  ──────────►   设备:    iPhone 15  ✓ 已替换
```

---

## ✨ 功能特性

### 核心处理能力

| 功能 | 说明 |
|------|------|
| 🔑 **SHA-256 哈希修改** | 通过重新编码图片，使文件哈希完全改变 |
| 📍 **GPS 位置伪造** | 内置 24 个预设地点，支持自定义经纬度 |
| 📷 **设备信息替换** | 21 种预设设备（iPhone/小米/华为/索尼/尼康等） |
| 👁️ **感知哈希扰动** | 对单个像素做 ±1 微调，改变 pHash（肉眼无感） |
| 💬 **隐藏备注写入** | 将文字嵌入 EXIF UserComment 字段 |
| 🎲 **随机 nonce** | 确保每次处理结果都独一无二 |
| 🧹 **完全清除 EXIF** | 抹除图片所有元数据 |

### 界面与操作

| 功能 | 说明 |
|------|------|
| 🎨 **现代化 GUI** | CustomTkinter 深色/浅色主题，一键切换 |
| 📦 **批量处理** | 整个文件夹一键处理，支持进度显示 |
| 🖼️ **图片预览** | 处理前后缩略图对比 |
| 💾 **格式支持** | 输出 JPEG / PNG / WEBP |
| 🎚️ **质量控制** | JPEG/WEBP 质量 50–100 滑块调节 |
| 📱 **移动端 APP** | Android APK（Kivy + Material Design） |
| 💾 **设置持久化** | 自动记忆上次使用的配置 |

---

## 🖥️ 界面预览

```
┌─────────────────────────────────────────────────────────────────┐
│  🔒 Image Privacy Tool                          v2.0  🌙 深色   │
├────────────────┬────────────────────────────────────────────────┤
│  ⚙ 处理设置   │  [ 单张处理 ]  [ 批量处理 ]  [ 关于 ]          │
│                │                                                 │
│  📍 GPS 预设  │  源图片  [___________________________] [浏览]   │
│  ┌──────────┐  │  输出路径 [___________________________] [保存] │
│  │中国·北京 │  │                                                 │
│  └──────────┘  │  ┌──────────────┐  ┌──────────────┐           │
│  自定义坐标:   │  │   源图预览   │  │   输出预览   │           │
│  [纬度][经度]  │  │  (thumbnail) │  │  (thumbnail) │           │
│                │  └──────────────┘  └──────────────┘           │
│  📷 设备预设   │                                                 │
│  ┌──────────┐  │  ████████████████████████░░░░  75%            │
│  │iPhone 15 │  │                                                 │
│  └──────────┘  │  ┌─────────────────────────────────────────┐   │
│                │  │ 输出文件: /path/to/output_privacy.jpg   │   │
│  💬 隐藏备注   │  │ 源 SHA256 : a1b2c3d4e5f6...             │   │
│  [__________]  │  │ 输出 SHA256: 9f8e7d6c5b4a...            │   │
│                │  │   → ✓ 已改变                            │   │
│  🔧 处理选项   │  │ 源 pHash  : aabbccdd...                 │   │
│  ☑ 微扰像素   │  │ 输出 pHash : 11223344...                 │   │
│  ☑ 随机nonce  │  │   → ✓ 已改变                            │   │
│  ☐ 清除EXIF   │  └─────────────────────────────────────────┘   │
│                │                                                 │
│  💾 输出格式   │          [ 🚀 开始处理 ]                       │
│  ● JPEG ○ PNG  │                                                 │
│  🎚 质量: 95   │                                                 │
└────────────────┴────────────────────────────────────────────────┘
```

---

## 🚀 快速开始

### 方式一：直接下载可执行文件（推荐）

前往 [Releases 页面](https://github.com/nomtf/fuckimagedecection/releases/latest) 下载对应平台版本：

| 系统 | 文件 | 运行方式 |
|------|------|---------|
| 🪟 Windows | `ImagePrivacyTool-Windows.zip` | 解压 → 双击 `.exe` |
| 🐧 Linux | `ImagePrivacyTool-Linux.tar.gz` | `tar xzf` → `chmod +x` → 运行 |
| 🍎 macOS | `ImagePrivacyTool-macOS.zip` | 解压 → 拖入应用程序 |
| 🤖 Android | `ImagePrivacyTool-Android.apk` | 允许未知来源 → 安装 |

### 方式二：源码运行

**环境要求：** Python 3.9+

```bash
# 1. 克隆仓库
git clone https://github.com/nomtf/fuckimagedecection.git
cd fuckimagedecection

# 2. 创建虚拟环境（推荐）
python3 -m venv .venv
source .venv/bin/activate      # Linux/macOS
# .venv\Scripts\activate       # Windows

# 3. 安装依赖
pip install -r requirements.txt

# 4. 启动桌面端
python3 image_privacy_tool.py
```

**移动端（Android）开发运行：**
```bash
pip install -r requirements-mobile.txt
cd mobile
python3 main.py           # 桌面模拟运行
buildozer android debug   # 编译 APK
```

---

## 📋 详细使用说明

### 单张图片处理

1. 点击 **「浏览」** 选择源图片（支持 JPG/PNG/WEBP/BMP）
2. 在左侧设置面板配置处理参数：
   - 选择 **GPS 预设** 或输入自定义坐标
   - 选择 **拍摄设备** 预设
   - 填写 **隐藏备注**（可选）
   - 勾选所需的 **处理选项**
3. 点击 **「🚀 开始处理」**
4. 在日志区查看处理结果（SHA256 / pHash 前后对比）

### 批量处理

1. 切换到 **「批量处理」** 选项卡
2. 点击 **「＋ 添加图片」** 或 **「📁 添加文件夹」**
3. 选择 **输出目录**
4. 点击 **「🚀 批量处理」**
5. 实时查看进度和每张图片的处理结果

### 选项说明

| 选项 | 效果 | 建议 |
|------|------|------|
| **微扰像素** | 改变感知哈希（pHash）| 需要躲避以图搜图时开启 |
| **随机 nonce** | 每次输出不同，防止重放识别 | 建议保持开启 |
| **清除全部 EXIF** | 抹除所有元数据，比伪造更彻底 | 极端隐私场景使用 |

---

## 🌍 内置预设

### GPS 地点（24 个）

<details>
<summary>点击展开完整列表</summary>

| 地区 | 城市 | 坐标 |
|------|------|------|
| 🇨🇳 中国 | 山东 | 36.65°N, 117.12°E |
| 🇨🇳 中国 | 北京 | 39.90°N, 116.41°E |
| 🇨🇳 中国 | 上海 | 31.23°N, 121.47°E |
| 🇨🇳 中国 | 深圳 | 22.54°N, 114.06°E |
| 🇨🇳 中国 | 成都 | 30.57°N, 104.07°E |
| 🇨🇳 中国 | 广州 | 23.13°N, 113.26°E |
| 🇨🇳 中国 | 杭州 | 30.27°N, 120.16°E |
| 🇨🇳 中国 | 武汉 | 30.59°N, 114.31°E |
| 🇯🇵 日本 | 东京 | 35.68°N, 139.65°E |
| 🇯🇵 日本 | 大阪 | 34.69°N, 135.50°E |
| 🇰🇷 韩国 | 首尔 | 37.57°N, 126.98°E |
| 🇸🇬 新加坡 | — | 1.35°N, 103.82°E |
| 🇹🇭 泰国 | 曼谷 | 13.76°N, 100.50°E |
| 🇦🇺 澳大利亚 | 墨尔本 | 37.81°S, 144.96°E |
| 🇦🇺 澳大利亚 | 悉尼 | 33.87°S, 151.21°E |
| 🇺🇸 美国 | 纽约 | 40.71°N, 74.01°W |
| 🇺🇸 美国 | 洛杉矶 | 34.05°N, 118.24°W |
| 🇺🇸 美国 | 旧金山 | 37.77°N, 122.42°W |
| 🇬🇧 英国 | 伦敦 | 51.51°N, 0.13°W |
| 🇫🇷 法国 | 巴黎 | 48.86°N, 2.35°E |
| 🇩🇪 德国 | 柏林 | 52.52°N, 13.41°E |
| 🇮🇹 意大利 | 罗马 | 41.90°N, 12.50°E |
| 🇷🇺 俄罗斯 | 莫斯科 | 55.76°N, 37.62°E |
| 🇧🇷 巴西 | 圣保罗 | 23.55°S, 46.63°W |

</details>

### 设备预设（21 款）

<details>
<summary>点击展开完整列表</summary>

| 品牌 | 型号 |
|------|------|
| 🍎 Apple | iPhone 16 Pro / 15 Pro / 14 / 13 |
| 🤖 小米 | 15 Ultra / 14 Ultra / 14 |
| 📱 华为 | Mate 70 Pro / Mate 60 Pro |
| 📱 OPPO | Find X8 Pro |
| 📱 三星 | Galaxy S25 Ultra / S24 |
| 📱 Google | Pixel 9 Pro / Pixel 8 Pro |
| 📷 索尼 | ILCE-7RM5 (A7R5) / ILCE-7M3 (A7M3) |
| 📷 尼康 | Z 9 / Z 6III |
| 📷 佳能 | EOS R5 Mark II / EOS R6 |
| 📷 富士 | X-T5 / GFX 100S II |

</details>

---

## 🏗️ 项目结构

```
FuckImageDecection/
├── 📄 image_privacy_tool.py   # 桌面端主程序（CustomTkinter GUI）
├── 📄 core.py                 # 核心处理逻辑（桌面/移动共用）
├── 📄 requirements.txt        # 桌面端依赖
├── 📄 requirements-mobile.txt # 移动端依赖
├── 📁 mobile/
│   ├── 📄 main.py             # Android/iOS 移动端（Kivy + KivyMD）
│   └── 📄 buildozer.spec      # Android APK 编译配置
└── 📁 .github/workflows/
    └── 📄 release.yml         # CI/CD 自动构建发布
```

### 架构说明

```
┌─────────────────────────────────────────────────────┐
│                  core.py (核心逻辑)                  │
│   GPS_PRESETS  DEVICE_PRESETS  ProcessOptions       │
│   process_image()  batch_process()                  │
│   save_settings()  load_settings()                  │
└────────────────┬───────────────┬────────────────────┘
                 │               │
    ┌────────────▼──┐     ┌──────▼─────────────┐
    │ 桌面端 GUI     │     │ 移动端 GUI          │
    │ CustomTkinter  │     │ Kivy + KivyMD       │
    │ (Windows/      │     │ (Android / iOS)     │
    │  Linux/macOS)  │     │                     │
    └───────────────┘     └─────────────────────┘
```

---

## 🔬 技术原理

### SHA-256 哈希变更

图片以不同的 EXIF 二进制数据重新保存，即使像素完全不变，文件的二进制内容也会改变，从而导致 SHA-256 散列值完全不同。

### 感知哈希（pHash）扰动

感知哈希基于图片的整体视觉内容计算。工具对图片随机一个像素的某个颜色通道做 ±1 的修改——这对于 8-bit 通道是 0.4% 的变化，人眼完全无法感知，但足以改变 pHash 的若干比特位。

### EXIF 伪造

使用 `piexif` 库构造完整的 EXIF 二进制数据，注入：
- `ImageIFD.Make` / `Model`：设备制造商和型号
- `GPSIFD.GPSLatitude` / `Longitude`：GPS 坐标（DMS 格式）
- `ExifIFD.UserComment`：隐藏备注 + 随机 nonce

---

## 🛠️ 从源码构建可执行文件

### 桌面端（PyInstaller）

```bash
pip install pyinstaller

# Windows
pyinstaller --onefile --windowed --name ImagePrivacyTool \
    --add-data "core.py;." image_privacy_tool.py

# Linux / macOS
pyinstaller --onefile --windowed --name ImagePrivacyTool \
    --add-data "core.py:." image_privacy_tool.py
```

### Android APK（Buildozer）

```bash
# 需要 Linux 环境（推荐 Ubuntu 22.04）
sudo apt-get install -y python3-pip git openjdk-17-jdk
pip install buildozer cython

cp core.py mobile/
cd mobile
buildozer android debug
# APK 输出在 mobile/bin/
```

---

## ❓ 常见问题

**Q: 处理后图片和原图肉眼有区别吗？**  
A: 没有。微扰模式下只改动 1 个像素的 1 个颜色通道 ±1，ΔE 远小于人眼感知阈值。

**Q: 关闭"微扰像素"后，感知哈希会变吗？**  
A: 通常不会。关闭后只改变文件哈希和 EXIF 元数据，pHash 取决于像素内容。

**Q: 支持哪些输入格式？**  
A: JPG、JPEG、PNG、WEBP、BMP、TIFF。

**Q: macOS 提示「无法打开，因为无法验证开发者」？**  
A: 右键点击应用 → 打开 → 点击「打开」，或前往系统偏好设置 → 安全性 → 仍要打开。

**Q: Android 安装提示「存在风险」？**  
A: 这是非 Google Play 渠道安装的正常提示，确认安装即可。

---

## ⚠️ 免责声明

本工具仅供 **合法、合规的个人隐私保护** 场景使用，例如：
- 上传至社交平台前去除真实位置信息
- 防止图片被反向追踪到真实设备

**严禁** 用于任何违法用途。作者不对任何滥用行为负责。

---

## 📄 开源协议

[MIT License](LICENSE) © 2026 唐毓文 (Tang Yuwen)

---

<div align="center">

**如果这个工具对你有帮助，欢迎 ⭐ Star！**

</div>
