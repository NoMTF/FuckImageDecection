# FuckImageDecection

一个轻量的图片隐私处理工具（Python + Tkinter GUI），用于在**尽量不影响肉眼观感**的前提下，改变：

- 文件哈希（SHA-256 会变化）
- 图片元数据（EXIF）
- 感知哈希（可选，需极小像素微扰）

> 说明：
> - 仅修改元数据时，像素内容不变，感知哈希通常不变。
> - 如果你需要连感知哈希也改变，通常必须做非常微小的像素改动（肉眼几乎无感）。

## 功能

- 图形界面操作（无需命令行）
- GPS 预设位置随机/选择：
  - 中国山东
  - 澳大利亚墨尔本
  - 日本东京
- 拍摄设备预设：
  - 索尼相机
  - iPhone 手机
  - 小米手机
- 可选写入隐藏备注（EXIF `UserComment`）
- 可选“随机 nonce”，保证每次输出元数据不同

## 安装

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## 运行

```bash
python3 image_privacy_tool.py
```

## 使用建议

- 如果你只想改文件哈希和元数据：
  - 关闭“微扰1个像素”选项
- 如果你还想改感知哈希：
  - 开启“微扰1个像素”选项

## 免责声明

请仅在合法、合规、保护个人隐私的场景使用。
