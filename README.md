<div align="center">

<h1>🔒 Image Privacy Tool</h1>

<p><strong>一款专业的图片隐私处理工具</strong><br>
在肉眼无感的前提下，彻底改变图片的数字指纹</p>

[![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Platform](https://img.shields.io/badge/平台-Windows%20%7C%20Linux%20%7C%20macOS%20%7C%20Android-brightgreen?style=for-the-badge)](./dist/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ⬇️ 直接下载（开箱即用）

> 无需安装 Python，下载后直接运行

<div align="center">

<table>
<tr>
<td align="center">
<a href="https://github.com/NoMTF/FuckImageDecection/raw/main/dist/ImagePrivacyTool-Windows.zip">
<img src="https://img.shields.io/badge/Windows-立即下载-.exe-0078D4?style=for-the-badge&logo=windows&logoColor=white" height="48"/><br/>
<sub>解压 → 双击 <code>.exe</code></sub>
</a>
</td>
<td align="center">
<a href="https://github.com/NoMTF/FuckImageDecection/raw/main/dist/ImagePrivacyTool-Linux.tar.gz">
<img src="https://img.shields.io/badge/Linux-立即下载-binary-FCC624?style=for-the-badge&logo=linux&logoColor=black" height="48"/><br/>
<sub>解压 → <code>chmod +x</code> → 运行</sub>
</a>
</td>
<td align="center">
<a href="https://github.com/NoMTF/FuckImageDecection/raw/main/dist/ImagePrivacyTool-macOS.zip">
<img src="https://img.shields.io/badge/macOS-立即下载-.app-000000?style=for-the-badge&logo=apple&logoColor=white" height="48"/><br/>
<sub>解压 → 拖入应用程序</sub>
</a>
</td>
<td align="center">
<a href="https://github.com/NoMTF/FuckImageDecection/raw/main/dist/ImagePrivacyTool-Android.apk">
<img src="https://img.shields.io/badge/Android-立即下载-.apk-3DDC84?style=for-the-badge&logo=android&logoColor=white" height="48"/><br/>
<sub>允许未知来源 → 安装</sub>
</a>
</td>
</tr>
</table>

</div>

---

## 📖 项目简介

**Image Privacy Tool** 帮助用户保护图片隐私，在视觉效果几乎不变的前提下，对图片进行多维度的数字指纹改造：

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

| 功能 | 说明 |
|------|------|
| 🔑 **SHA-256 哈希修改** | 通过重新编码图片，使文件哈希完全改变 |
| 📍 **GPS 位置伪造** | 内置 24 个预设地点，支持自定义经纬度 |
| 📷 **设备信息替换** | 21 种预设设备（iPhone/小米/华为/索尼/尼康等） |
| 👁️ **感知哈希扰动** | 对单像素做 ±1 微调，改变 pHash（肉眼无感） |
| 💬 **隐藏备注写入** | 将文字嵌入 EXIF UserComment 字段 |
| 🎲 **随机 nonce** | 确保每次处理结果都独一无二 |
| 🧹 **完全清除 EXIF** | 抹除图片所有元数据 |
| 📦 **批量处理** | 整个文件夹一键处理，实时进度显示 |
| 🎨 **现代化 GUI** | 深色/浅色主题，图片预览对比 |
| 💾 **格式支持** | 输出 JPEG / PNG / WEBP |

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
│  └──────────┘  │  输出: /path/to/output_privacy.jpg             │
│                │  源 SHA256 : a1b2c3d4e5f6...                   │
│  🔧 处理选项   │  输出 SHA256: 9f8e7d6c5b4a...  → ✓ 已改变     │
│  ☑ 微扰像素   │  源 pHash  : aabbccdd...                       │
│  ☑ 随机nonce  │  输出 pHash : 11223344...  → ✓ 已改变          │
│  ☐ 清除EXIF   │                                                 │
│  💾 JPEG ● 95  │          [ 🚀  开始处理 ]                      │
└────────────────┴────────────────────────────────────────────────┘
```

---

## 🚀 从源码运行

**环境：** Python 3.9+

```bash
git clone https://github.com/NoMTF/FuckImageDecection.git
cd FuckImageDecection

python3 -m venv .venv
source .venv/bin/activate        # Linux / macOS
# .venv\Scripts\activate         # Windows

pip install -r requirements.txt
python3 image_privacy_tool.py
```

---

## 🌍 内置预设

<details>
<summary>📍 24 个 GPS 地点（点击展开）</summary>

| 地区 | 城市 | 坐标 |
|------|------|------|
| 🇨🇳 中国 | 山东 / 北京 / 上海 / 深圳 / 成都 / 广州 / 杭州 / 武汉 | — |
| 🇯🇵 日本 | 东京 / 大阪 | — |
| 🇰🇷 韩国 | 首尔 | — |
| 🇸🇬 新加坡 | — | — |
| 🇹🇭 泰国 | 曼谷 | — |
| 🇦🇺 澳大利亚 | 墨尔本 / 悉尼 | — |
| 🇺🇸 美国 | 纽约 / 洛杉矶 / 旧金山 | — |
| 🇬🇧 英国 | 伦敦 | — |
| 🇫🇷 法国 | 巴黎 | — |
| 🇩🇪 德国 | 柏林 | — |
| 🇮🇹 意大利 | 罗马 | — |
| 🇷🇺 俄罗斯 | 莫斯科 | — |
| 🇧🇷 巴西 | 圣保罗 | — |

</details>

<details>
<summary>📷 21 款设备（点击展开）</summary>

| 品牌 | 型号 |
|------|------|
| 🍎 Apple | iPhone 16 Pro / 15 Pro / 14 / 13 |
| 📱 小米 | 15 Ultra / 14 Ultra / 14 |
| 📱 华为 | Mate 70 Pro / Mate 60 Pro |
| 📱 OPPO | Find X8 Pro |
| 📱 三星 | Galaxy S25 Ultra / S24 |
| 📱 Google | Pixel 9 Pro / Pixel 8 Pro |
| 📷 索尼 | A7R5 / A7M3 |
| 📷 尼康 | Z 9 / Z 6III |
| 📷 佳能 | EOS R5 Mark II / EOS R6 |
| 📷 富士 | X-T5 / GFX 100S II |

</details>

---

## 🏗️ 项目结构

```
FuckImageDecection/
├── image_privacy_tool.py   # 桌面端 GUI（CustomTkinter）
├── core.py                 # 核心处理逻辑（桌面/移动共用）
├── requirements.txt
├── requirements-mobile.txt
├── dist/                   # ← 预构建可执行文件（CI 自动更新）
│   ├── ImagePrivacyTool-Windows.zip
│   ├── ImagePrivacyTool-Linux.tar.gz
│   ├── ImagePrivacyTool-macOS.zip
│   └── ImagePrivacyTool-Android.apk
├── mobile/
│   ├── main.py             # Android/iOS（Kivy + KivyMD）
│   └── buildozer.spec
└── .github/workflows/
    └── release.yml         # CI：构建完直接 commit 进 dist/
```

---

## ⚠️ 免责声明

仅供合法、合规的个人隐私保护场景使用。作者不对任何滥用行为负责。

---

<div align="center">

**觉得好用就点个 ⭐ Star 吧！**

</div>
