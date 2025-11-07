# 部署指南

## 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录。

## 部署到 Vercel

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
vercel --prod
```

或者通过 Vercel 控制台连接 Git 仓库自动部署。

## 部署到 Netlify

1. 安装 Netlify CLI：
```bash
npm i -g netlify-cli
```

2. 部署：
```bash
netlify deploy --prod
```

或者通过 Netlify 控制台连接 Git 仓库自动部署。

## 环境变量配置

在部署平台设置以下环境变量：

- `VITE_API_BASE_URL`: 后端 API 地址
- `VITE_ENABLE_MOCK`: 是否启用 Mock 数据（生产环境设为 `false`）
- `VITE_DEFAULT_LOCALE`: 默认语言（建议 `th-TH`）
- `VITE_AVAILABLE_LOCALES`: 可用语言列表
- `VITE_GA_ID`: Google Analytics ID（可选）
- `VITE_LINE_TAG_ID`: LINE Tag ID（可选）

## 性能优化建议

1. 启用 CDN 加速
2. 开启 Gzip/Brotli 压缩
3. 配置缓存策略
4. 使用图片 CDN 优化图片加载
5. 启用 HTTP/2 或 HTTP/3

## 监控

建议集成以下监控服务：

- Google Analytics 4 (GA4)
- Sentry（错误追踪）
- Lighthouse CI（性能监控）

## 备份

定期备份以下内容：

- 数据库
- 用户上传的图片
- 配置文件

