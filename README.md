# BEE BEE Travel - 中国研学旅行网站

面向泰国市场的中国研学旅行产品独立站，使用 Vue 3 + TypeScript 构建。

## 项目特点

- **技术栈**: Vue 3 (Composition API) + TypeScript + Vite
- **预渲染**: 使用 `vite-ssg` 实现 SSR/SSG，增强 SEO
- **样式**: Tailwind CSS + 自定义设计系统
- **国际化**: 支持泰语（默认）、英语、简体中文
- **状态管理**: Pinia
- **路由**: Vue Router
- **性能优化**: 代码切分、懒加载、图片优化
- **PWA**: 支持离线访问

## 快速开始

### 前置要求

- **Node.js**: >= 18.0.0（推荐使用 18.x 或 20.x LTS 版本）
- **npm**: >= 9.0.0

检查版本：

```bash
node --version
npm --version
```

### 安装依赖

```bash
npm install
```

⏱️ 预计时间: 2-5 分钟

### 环境变量配置

在项目根目录创建 `.env` 文件：

```env
# API 配置
VITE_API_BASE_URL=http://localhost:3000

# Mock 数据（开发时建议设为 true）
VITE_ENABLE_MOCK=true

# 默认语言: th-TH | en | zh-CN
VITE_DEFAULT_LOCALE=th-TH

# 可用语言列表
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN

# 第三方服务（可选）
VITE_GA_ID=
VITE_LINE_TAG_ID=
VITE_META_PIXEL_ID=
```

**重要提示**:

- 开发环境建议设置 `VITE_ENABLE_MOCK=true`（使用本地 Mock 数据）
- 生产环境设置 `VITE_ENABLE_MOCK=false`（连接真实 API）
- 环境变量必须以 `VITE_` 开头
- 修改环境变量后需要重启开发服务器

### 开发模式

```bash
npm run dev
```

✅ 成功标志: 终端显示 `Local: http://localhost:5173/`

访问: **http://localhost:5173**

### 生产构建（含 SSG 预渲染）

```bash
npm run build
```

构建输出在 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

### 常用命令

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format

# 单元测试
npm run test:unit

# E2E 测试
npm run test:e2e

# 类型检查
npm run type-check
```

### 详细配置文档

更多配置说明请查看: **[SETUP.md](./SETUP.md)**

## 项目结构

```
src/
├── api/              # API 接口
├── assets/           # 静态资源
├── components/       # 组件
│   ├── base/        # 基础组件
│   ├── home/        # 首页组件
│   ├── routes/      # 线路组件
│   ├── promos/      # 促销组件
│   ├── layout/      # 布局组件
│   ├── search/      # 搜索组件
│   └── inquiry/     # 咨询组件
├── composables/      # 组合式函数
├── i18n/            # 国际化配置
│   └── locales/     # 语言文件
├── layouts/         # 页面布局
├── mocks/           # Mock 数据
├── pages/           # 页面
├── router/          # 路由配置
├── stores/          # Pinia stores
├── styles/          # 全局样式
├── types/           # TypeScript 类型
├── utils/           # 工具函数
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 核心功能

### 页面

- **首页** (`/`): Hero 区域、搜索框、精选线路、促销入口、USP 展示
- **线路列表** (`/routes`): 筛选、排序、分页，URL 状态同步
- **线路详情** (`/routes/:id`): 详细信息、日程、FAQ、咨询表单
- **促销页面** (`/promos`): 机票/酒店/套餐促销
- **搜索** (`/search`): 关键字搜索
- **关于/联系/FAQ** (`/about`, `/contact`, `/faq`): 信息页面

### 组件

#### 基础组件

- Button, Card, Badge, Modal, Drawer, Toast, Skeleton

#### 业务组件

- RouteCard, PromoCard, SearchBox, FilterPanel, InquiryModal

### 国际化

默认语言为泰语 (`th-TH`)，支持切换至英语 (`en`) 和简体中文 (`zh-CN`)。

语言文件位于 `src/i18n/locales/`。

### Mock 数据

开发模式下默认使用 Mock 数据。Mock 数据位于 `src/mocks/`。

可通过设置 `VITE_ENABLE_MOCK=false` 切换到真实 API。

## 首发线路

1. **上海 · AI 科创实验营**（STEM/AI，5 天）
2. **广州 · 机器人与岭南文化探访**（STEM/Culture，4 天）
3. **北京 · 历史博物馆 × 人工智能体验**（History/AI，6 天）
4. **珠海 · 航空航天与海洋科普**（Aerospace/STEM，4 天）

## 设计系统

### 颜色

- **Primary (中国红)**: `#D91616` - CTA、强调
- **Tech (科技蓝)**: `#1F6FEB` - 链接、交互
- **Ink**: `#0F172A` - 正文
- **Muted**: `#64748B` - 次要文本
- **Gold**: `#CDAF63` - 徽章、点缀

### 字体

- 泰文: Noto Sans Thai
- 拉丁: Inter
- 中文: 思源黑体 (Source Han Sans)

## SEO 优化

- 预渲染关键页面（首页、列表、详情）
- 动态 meta 标签（title、description、OpenGraph）
- JSON-LD 结构化数据
- Sitemap 和 robots.txt
- Canonical URLs

## 性能优化

- 路由级代码切分
- 组件懒加载
- 图片懒加载
- WebP 图片格式
- 首屏 LCP < 2.5s（目标）

## 浏览器支持

- 现代浏览器（Chrome、Firefox、Safari、Edge 最新版本）
- 移动端优先，适配 iPhone 12 及以上尺寸

## 相关文档

- **[快速启动指南](./QUICKSTART.md)** - 3 步快速启动项目
- **[详细配置文档](./SETUP.md)** - 完整的配置和启动说明
- **[素材准备清单](./MATERIALS_CHECKLIST.md)** - 网站内容准备完整清单（170+ 项）
- **[内容准备清单](./CONTENT_TODO.md)** - 简版内容准备清单

## License

Copyright © 2024 BEE BEE Travel. All rights reserved.
