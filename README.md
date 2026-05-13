# 图片元数据修改器

[![GitHub 构建](https://github.com/NoMTF/FuckImageDecection/actions/workflows/workers-check.yml/badge.svg)](https://github.com/NoMTF/FuckImageDecection/actions/workflows/workers-check.yml)
[![下载源码 ZIP](https://img.shields.io/badge/下载-网页版源码_ZIP-2ea44f?style=for-the-badge)](https://github.com/NoMTF/FuckImageDecection/archive/refs/heads/main.zip)
[![查看构建产物](https://img.shields.io/badge/下载-GitHub_Actions_构建产物-0969da?style=for-the-badge)](https://github.com/NoMTF/FuckImageDecection/actions/workflows/workers-check.yml)

这是一个只维护网页版的图片元数据修改器。项目可直接部署到 Cloudflare Workers，图片读取、检测、改写和导出都在浏览器本地完成，不需要 Python、桌面端、后端服务或数据库。

## 现在能做什么

- 检测 EXIF、GPS、XMP、ICC、TIFF/DNG、HEIC/HEIF 等常见图片元数据。
- 尽量把检测到的参数翻译成中文，并给出简短解释。
- 支持设备、镜头、时间、GPS、唯一 ID 等安全字段随机化。
- 高影响字段会自动排除在“随机安全项”之外，避免明显破坏显示效果或元数据结构。
- 单张图片可一键下载，多张图片会打包成 ZIP。

## 下载

普通用户直接点上面的“网页版源码 ZIP”即可下载整个项目。GitHub Actions 每次构建也会上传 `image-metadata-editor-web.zip`，里面包含可部署的网页版文件。

旧版 `dist/ImagePrivacyTool-*.zip`、`.exe`、`.apk` 下载包已经废弃，不再保留按钮，避免继续出现 404。

## 本地运行

需要 Node.js 22 或更新版本。

```bat
npm install
npm run dev
```

也可以双击：

```bat
preview_workers.bat
```

## 构建检查

GitHub 默认构建会跑同一条命令：

```bat
npm run build
npm run check
```

`npm run build` 会执行 Wrangler dry-run，验证 Cloudflare Workers 静态资源部署是否能正常打包。

## 部署到 Workers

```bat
npm run deploy
```

或者双击：

```bat
login_workers.bat
deploy_workers.bat
```

## 目录

- `workers-site/`: 网站源码和本地 vendor 脚本。
- `wrangler.jsonc`: Cloudflare Workers 静态资源部署配置。
- `.github/workflows/workers-check.yml`: GitHub 构建、检查和网页版 ZIP 产物。
- `package.json` / `package-lock.json`: Wrangler 工具链依赖。
