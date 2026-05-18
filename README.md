# Agent Sprint Canvas

一个面向 AI Agent 场景的静态网页项目。输入一句项目目标，页面会自动生成任务拆解、Agent 分工、执行步骤、风险清单和可复制摘要，适合拿来做作品集起步仓库、演示页或立项说明助手。

## 为什么这个项目适合做 GitHub 展示

- 主题明确：直接对应 Agent / AI 协作工作流。
- 零依赖：纯 HTML、CSS、JavaScript，打开 `index.html` 就能运行。
- 易部署：可以直接发布到 GitHub Pages。
- 易扩展：后续可以接入真实模型、API 或工作流引擎。

## 项目能力

- 把自然语言目标转成结构化执行方案
- 自动生成 Planner / Research / Builder / Reviewer 四类 Agent 分工
- 输出执行步骤、风险检查和人工兜底建议
- 一键复制 Markdown 摘要，用于 README、需求文档或内部协作记录

## 本地运行

直接双击打开 `index.html`，或者用任意静态服务器启动。


## 使用场景

- 在项目立项阶段快速生成执行方案草稿
- 在 AI Agent 演示中展示多角色协作思路
- 在团队内部用作需求拆解和风险检查模板

## 仓库结构

```text
agent-sprint-canvas/
├─ index.html
├─ styles.css
├─ app.js
└─ README.md
```
