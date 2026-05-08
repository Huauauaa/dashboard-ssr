# dashboard-ssr

一个基于 Next.js、ECharts 和 TailwindCSS 的大屏应用示例，包含：

- 顶部 logo、消息通知和用户入口
- 应用指标卡片无缝横向滚动
- 折线图、横向柱状图、饼图和数据表格
- GitHub Pages 静态部署 workflow

## 本地开发

```bash
npm install
npm run dev
```

打开 <http://localhost:3000> 查看页面。

## 构建

```bash
npm run build
```

构建产物会输出到 `out/`，可用于静态托管。

## GitHub Pages

仓库已添加 `.github/workflows/pages.yml`。推送到 `main` 后会自动：

1. 安装依赖
2. 使用 `GITHUB_PAGES=true` 构建静态站点
3. 上传 `out/` 并部署到 GitHub Pages
