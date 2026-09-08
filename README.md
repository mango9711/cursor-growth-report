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

## GitHub 仓库

公开仓库：[mango9711/cursor-growth-report](https://github.com/mango9711/cursor-growth-report)

若 GitHub 上还只有默认 README、看不到 `app/` 和 `package.json`，在已登录 GitHub 的 Cursor 终端里把 `main` 推上去（GitHub 初始化提交需要覆盖一次）：

```bash
git remote add github https://github.com/mango9711/cursor-growth-report.git
git push -u github main --force
```

如果 `git remote -v` 里 `origin` 已经指向这个 GitHub 地址，改用：

```bash
git push -u origin main --force
```

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
