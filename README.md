# Cursor 近一年迭代 · 用户增长分析

结构化阅读 Cursor 官方 Changelog（观察窗口 **2025-09-08 至 2026-09-08**），并从用户增长产品视角整理启发、可复用策略与应用场景。

这是一份给增长 / 产品同学用的研究站，不是 Cursor 官方文档。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端里提示的地址（默认 `http://127.0.0.1:43147`）。

```bash
npm run build
npm start
```

用于生产构建。

## 建公开仓库（给别人克隆、给 Vercel 拉代码）

当前是 Cursor 里的新项目，代码还只在这次 Agent 会话里。要对外分享或部署，先在 Cursor 界面点 **Create repo**（创建仓库）胶囊：

1. 用 GitHub 账号登录（没有就先注册 [github.com](https://github.com)）。
2. 仓库名可自定，例如 `cursor-growth-report`。
3. 可见性选 **Public（公开）**，否则 Vercel 免费导入和别人打开 GitHub 都会卡住。
4. 创建完成后，GitHub 上会出现完整代码（含本 README）。记下仓库地址，形如 `https://github.com/你的用户名/cursor-growth-report`。

创建仓库是你在 Cursor 里点一下即可，不需要在本机再敲 `git init`。

## 部署成长期网址（推荐 Vercel）

Next.js 用 Vercel 最省事，部署成功后会得到可长期转发的 `*.vercel.app` 链接。

1. 打开 [vercel.com](https://vercel.com) ，用 **同一个 GitHub 账号** 登录。
2. 点 **Add New… → Project**。
3. **Import** 刚建好的 GitHub 仓库。
4. 框架会识别为 Next.js。不要改 Root Directory。环境变量不用填。
5. 点 **Deploy**，等 1–2 分钟。
6. 完成后把 **Visit** 上的地址（如 `https://cursor-growth-report.vercel.app`）发给别人即可。

之后你每次往 GitHub 的 `main` 推送，Vercel 会自动重新发布。

### 可选：自定义域名

在 Vercel 项目 **Settings → Domains** 里添加你的域名，按提示配 DNS 即可。

## 备选：GitHub Pages

没有 Vercel 账号时，也可以用 GitHub Pages，但要改成静态导出，步骤比 Vercel 多。需要的话可以说一声再改配置。

## 报告里有什么

1. **五个阶段总览**：从 Agent IDE，到可编排系统，再到协作入口外溢与软件工厂。
2. **可筛选时间线**：功能创新、交互优化、性能改进、生态整合、企业治理、定价增长。
3. **增长启发**：获取、激活、留存、付费、粘性，每条带建议观察指标。
4. **策略 Playbook**：10 条可迁移打法，并按产品类型给出落地矩阵。

主要材料来自 [cursor.com/changelog](https://cursor.com/changelog)，并交叉 Composer 博客与 CLI 更新说明。
