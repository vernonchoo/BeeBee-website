# BEE BEE Travel 项目启动与配置指南

> 本文档详细说明如何配置和启动 BEE BEE Travel 项目

---

## 📋 前置要求

### 系统要求
- **Node.js**: >= 18.0.0（推荐使用 18.x 或 20.x LTS 版本）
- **npm**: >= 9.0.0（或使用 yarn/pnpm）
- **操作系统**: macOS、Linux 或 Windows

### 检查环境
```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 如果版本不符合要求，请访问 https://nodejs.org/ 下载安装
```

---

## 🚀 快速启动（3 步）

### 步骤 1: 克隆项目（如果从 GitHub）
```bash
git clone https://github.com/vernonchoo/BeeBee-website.git
cd BeeBee-website
```

### 步骤 2: 安装依赖
```bash
npm install
```

⏱️ **预计时间**: 2-5 分钟（取决于网络速度）

### 步骤 3: 启动开发服务器
```bash
npm run dev
```

✅ **成功标志**: 终端显示类似以下信息：
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 步骤 4: 打开浏览器
访问: **http://localhost:5173/**

---

## ⚙️ 环境变量配置

### 创建环境变量文件

项目根目录下创建 `.env` 文件（开发环境）：

```bash
# 复制示例文件（如果存在）
cp .env.example .env

# 或直接创建
touch .env
```

### 环境变量说明

在 `.env` 文件中配置以下变量：

```env
# ============================================
# API 配置
# ============================================
# 后端 API 基础地址
# 开发环境: http://localhost:3000
# 生产环境: https://api.beebeetravel.com
VITE_API_BASE_URL=http://localhost:3000

# ============================================
# Mock 数据配置
# ============================================
# 是否启用 Mock 数据（开发时建议设为 true）
# true: 使用本地 Mock 数据，不请求真实 API
# false: 使用真实 API
VITE_ENABLE_MOCK=true

# ============================================
# 国际化配置
# ============================================
# 默认语言: th-TH (泰语) | en (英语) | zh-CN (简体中文)
VITE_DEFAULT_LOCALE=th-TH

# 可用语言列表（逗号分隔）
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN

# ============================================
# 第三方服务配置（可选）
# ============================================
# Google Analytics 4 ID（格式: G-XXXXXXXXXX）
VITE_GA_ID=

# LINE Tag ID（用于 LINE 广告追踪）
VITE_LINE_TAG_ID=

# Meta Pixel ID（Facebook 广告追踪）
VITE_META_PIXEL_ID=
```

### 不同环境的配置

#### 开发环境 (`.env`)
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_ENABLE_MOCK=true
VITE_DEFAULT_LOCALE=th-TH
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN
```

#### 生产环境 (`.env.production`)
```env
VITE_API_BASE_URL=https://api.beebeetravel.com
VITE_ENABLE_MOCK=false
VITE_DEFAULT_LOCALE=th-TH
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN
VITE_GA_ID=G-XXXXXXXXXX
VITE_LINE_TAG_ID=your-line-tag-id
VITE_META_PIXEL_ID=your-pixel-id
```

#### 测试环境 (`.env.test`)
```env
VITE_API_BASE_URL=https://api-test.beebeetravel.com
VITE_ENABLE_MOCK=false
VITE_DEFAULT_LOCALE=en
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN
```

---

## 📝 详细配置说明

### 1. API 配置

#### 使用 Mock 数据（开发推荐）
```env
VITE_ENABLE_MOCK=true
VITE_API_BASE_URL=http://localhost:3000
```
- ✅ 无需后端服务器
- ✅ 快速开发测试
- ✅ 数据在 `src/mocks/` 目录

#### 连接真实 API
```env
VITE_ENABLE_MOCK=false
VITE_API_BASE_URL=https://api.beebeetravel.com
```
- ⚠️ 需要后端 API 服务运行
- ⚠️ 确保 API 地址可访问
- ⚠️ 检查 CORS 配置

### 2. 语言配置

#### 设置默认语言
```env
# 泰语（默认）
VITE_DEFAULT_LOCALE=th-TH

# 英语
VITE_DEFAULT_LOCALE=en

# 简体中文
VITE_DEFAULT_LOCALE=zh-CN
```

#### 可用语言列表
```env
# 支持所有三种语言
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN

# 仅支持泰语和英语
VITE_AVAILABLE_LOCALES=th-TH,en

# 仅支持泰语
VITE_AVAILABLE_LOCALES=th-TH
```

### 3. 第三方服务配置

#### Google Analytics 4
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建属性并获取 Measurement ID（格式: `G-XXXXXXXXXX`）
3. 添加到 `.env`:
```env
VITE_GA_ID=G-XXXXXXXXXX
```

#### LINE Tag
1. 访问 [LINE Ads Manager](https://ads.line.me/)
2. 创建 Tag 并获取 Tag ID
3. 添加到 `.env`:
```env
VITE_LINE_TAG_ID=your-line-tag-id
```

#### Meta Pixel (Facebook)
1. 访问 [Facebook Events Manager](https://business.facebook.com/events_manager)
2. 创建 Pixel 并获取 Pixel ID
3. 添加到 `.env`:
```env
VITE_META_PIXEL_ID=your-pixel-id
```

---

## 🛠️ 常用命令

### 开发相关
```bash
# 启动开发服务器
npm run dev

# 启动开发服务器并暴露到局域网
npm run dev -- --host

# 指定端口启动（默认 5173）
npm run dev -- --port 3000
```

### 构建相关
```bash
# 构建生产版本（含 SSG 预渲染）
npm run build

# 预览生产构建
npm run preview

# 仅类型检查（不构建）
npm run type-check
```

### 代码质量
```bash
# ESLint 代码检查
npm run lint

# ESLint 自动修复
npm run lint -- --fix

# Prettier 格式化代码
npm run format

# 同时运行检查和格式化
npm run lint && npm run format
```

### 测试相关
```bash
# 运行单元测试
npm run test:unit

# 运行单元测试（监听模式）
npm run test:unit -- --watch

# 运行 E2E 测试
npm run test:e2e

# 运行 E2E 测试（UI 模式）
npm run test:e2e -- --ui
```

---

## 🔧 常见问题排查

### 问题 1: 端口被占用

**错误信息**:
```
Port 5173 is in use, trying another one...
```

**解决方案**:
```bash
# 方案 1: 使用其他端口
npm run dev -- --port 3000

# 方案 2: 查找并关闭占用端口的进程（macOS/Linux）
lsof -ti:5173 | xargs kill -9

# 方案 2: Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### 问题 2: 依赖安装失败

**错误信息**:
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**解决方案**:
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install

# 如果还有问题，尝试使用 --legacy-peer-deps
npm install --legacy-peer-deps
```

### 问题 3: 环境变量不生效

**原因**: Vite 的环境变量必须以 `VITE_` 开头

**解决方案**:
1. 确保变量名以 `VITE_` 开头
2. 重启开发服务器
3. 检查 `.env` 文件是否在项目根目录
4. 确保没有语法错误（不要有空格、引号等）

### 问题 4: TypeScript 类型错误

**解决方案**:
```bash
# 检查类型错误
npm run type-check

# 如果错误太多，可以先忽略（不推荐）
# 在 tsconfig.json 中设置 "noEmit": true
```

### 问题 5: 页面空白/白屏

**排查步骤**:
1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签页的错误信息
3. 查看 Network 标签页的网络请求
4. 检查是否有 JavaScript 错误

**常见原因**:
- API 请求失败（检查 `VITE_API_BASE_URL`）
- 环境变量未正确配置
- 浏览器缓存问题（强制刷新: Cmd+Shift+R / Ctrl+Shift+R）

---

## 🌐 网络配置

### 开发服务器访问

#### 本地访问
```
http://localhost:5173
```

#### 局域网访问（同一 WiFi）
```bash
# 启动时添加 --host 参数
npm run dev -- --host
```
然后访问: `http://<你的IP地址>:5173`

#### 查找本机 IP 地址
```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### CORS 配置（如果连接真实 API）

如果后端 API 有 CORS 限制，可以在 `vite.config.ts` 中配置代理：

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

---

## 📦 项目结构说明

```
BeeBee-website/
├── .env                    # 环境变量（本地，不提交到 Git）
├── .env.example           # 环境变量示例（提交到 Git）
├── .gitignore             # Git 忽略文件
├── package.json           # 项目配置和依赖
├── vite.config.ts        # Vite 构建配置
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
├── public/               # 静态资源目录
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
└── src/                  # 源代码目录
    ├── api/              # API 接口
    ├── assets/           # 静态资源（图片、字体等）
    ├── components/       # Vue 组件
    ├── composables/      # 组合式函数
    ├── i18n/            # 国际化配置
    ├── layouts/         # 布局组件
    ├── mocks/           # Mock 数据
    ├── pages/           # 页面组件
    ├── router/          # 路由配置
    ├── stores/          # Pinia 状态管理
    ├── styles/          # 全局样式
    ├── types/           # TypeScript 类型定义
    ├── utils/           # 工具函数
    ├── App.vue          # 根组件
    └── main.ts          # 入口文件
```

---

## ✅ 启动检查清单

在启动项目前，请确认：

- [ ] ✅ Node.js 版本 >= 18.0.0
- [ ] ✅ 已运行 `npm install` 安装依赖
- [ ] ✅ 已创建 `.env` 文件并配置环境变量
- [ ] ✅ 端口 5173 未被占用（或使用其他端口）
- [ ] ✅ 如果使用真实 API，确保后端服务已启动
- [ ] ✅ 浏览器支持现代 JavaScript（Chrome、Firefox、Safari、Edge 最新版本）

---

## 🎯 下一步

项目启动成功后，您可以：

1. **浏览网站**: 访问 http://localhost:5173
2. **测试功能**: 
   - 语言切换
   - 搜索和筛选
   - 查看线路详情
   - 提交咨询表单
3. **查看代码**: 在 `src/` 目录中探索代码结构
4. **修改内容**: 编辑 `src/mocks/` 中的 Mock 数据
5. **自定义样式**: 修改 `tailwind.config.js` 和 `src/styles/main.css`

---

## 📚 相关文档

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Vue Router 文档](https://router.vuejs.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [vue-i18n 文档](https://vue-i18n.intlify.dev/)

---

**最后更新**: 2024-11-07  
**维护者**: Vernon

