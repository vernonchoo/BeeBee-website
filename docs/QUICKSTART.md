# 🚀 BEE BEE Travel 快速启动指南

## 一键启动（3 步）

### 1️⃣ 检查环境

```bash
# 检查 Node.js 版本（需要 >= 18.0.0）
node --version

# 检查 npm 版本
npm --version
```

### 2️⃣ 安装依赖

```bash
npm install
```

### 3️⃣ 配置环境变量（首次启动必须）

在项目根目录创建 `.env` 文件：

**Windows (PowerShell)**:

```powershell
@"
VITE_API_BASE_URL=http://localhost:3000
VITE_ENABLE_MOCK=true
VITE_DEFAULT_LOCALE=th-TH
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN
VITE_GA_ID=
VITE_LINE_TAG_ID=
VITE_META_PIXEL_ID=
"@ | Out-File -FilePath .env -Encoding utf8
```

**macOS/Linux**:

```bash
cat > .env << 'EOF'
VITE_API_BASE_URL=http://localhost:3000
VITE_ENABLE_MOCK=true
VITE_DEFAULT_LOCALE=th-TH
VITE_AVAILABLE_LOCALES=th-TH,en,zh-CN
VITE_GA_ID=
VITE_LINE_TAG_ID=
VITE_META_PIXEL_ID=
EOF
```

**或手动创建**:

1. 在项目根目录创建 `.env` 文件
2. 复制上面的内容到文件中
3. 保存

### 4️⃣ 启动项目

```bash
npm run dev
```

### 5️⃣ 打开浏览器

访问: **http://localhost:5173**

---

## ✅ 验证启动成功

看到以下内容说明启动成功：

**终端输出**:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**浏览器显示**:

- ✅ 看到 BEE BEE Travel 首页
- ✅ 顶部导航栏显示 "BEE BEE Travel"
- ✅ 可以看到 4 条线路卡片
- ✅ 语言切换按钮可以点击

---

## 🔧 常见问题

### ❌ 问题：端口被占用

```bash
# 使用其他端口启动
npm run dev -- --port 3000
```

### ❌ 问题：依赖安装失败

```bash
# 清除缓存并重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ❌ 问题：页面空白

1. 按 F12 打开开发者工具
2. 查看 Console 标签页的错误信息
3. 确保 `.env` 文件已创建
4. 重启开发服务器

---

## 📚 更多信息

- **详细配置**: 查看 [SETUP.md](./SETUP.md)
- **内容准备**: 查看 [CONTENT_TODO.md](./CONTENT_TODO.md)
- **项目文档**: 查看 [README.md](./README.md)

---

**需要帮助？** 查看 SETUP.md 获取详细配置说明！
