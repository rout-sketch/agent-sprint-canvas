# Agent Sprint Canvas

一个面向 AI Agent 场景的静态网页项目。输入一句项目目标，页面会自动生成任务拆解、Agent 分工、执行步骤、风险清单和可复制摘要，适合拿来做作品集起步仓库、演示页或立项说明助手。

## 为什么这个项目适合做 GitHub 展示

- 主题明确：直接对应 Agent / AI 协作工作流。
- 零依赖：纯 HTML、CSS、JavaScript，打开 `index.html` 就能运行。
- 易部署：可以直接发布到 GitHub Pages。
- 易讲故事：很适合在 README 或申请表里描述成“我用 Agent 方式构建了一个多步骤协作演示工具”。

## 项目能力

- 把自然语言目标转成结构化执行方案
- 自动生成 Planner / Research / Builder / Reviewer 四类 Agent 分工
- 输出执行步骤、风险检查和人工兜底建议
- 一键复制 Markdown 摘要，用于 README、飞书文档或活动申请表

## 本地运行

直接双击打开 `index.html`，或者用任意静态服务器启动。

## 部署到 GitHub Pages

1. 在 GitHub 上新建仓库，比如 `agent-sprint-canvas`
2. 把本目录文件上传到仓库根目录
3. 在 GitHub 仓库 `Settings -> Pages` 中选择从当前分支部署
4. 保存后等待几十秒，就会得到一个公开链接

## 适合你在申请表里怎么写

可以参考下面这段：

> 我基于 Agent 协作思路做了一个项目规划与执行画布工具。用户输入项目目标后，系统会自动拆解核心问题，生成 Planner、Research、Builder、Reviewer 多角色分工，并输出执行步骤、风险检查和可复制的项目摘要。这个项目主要用于把模糊需求快速转成可执行方案，减少人工整理和反复沟通成本，也方便后续接入更强的模型能力。

## 仓库结构

```text
agent-sprint-canvas/
├─ index.html
├─ styles.css
├─ app.js
└─ README.md
```
