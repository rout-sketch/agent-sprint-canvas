# Agent Sprint Canvas

Agent Sprint Canvas is a lightweight front-end demo for turning a project idea into a structured execution plan. Given a short natural-language goal, the app generates task breakdowns, agent roles, execution steps, risk checks, and a reusable Markdown summary.

It is built as a static prototype for showcasing multi-agent workflow design and can be extended later with real LLM APIs or workflow engines.

## Demo

- Live site: [GitHub Pages](https://rout-sketch.github.io/agent-sprint-canvas/)
- Repository: [rout-sketch/agent-sprint-canvas](https://github.com/rout-sketch/agent-sprint-canvas)

## Features

- Turn a natural-language project goal into a structured execution plan
- Simulate multi-agent collaboration with Planner, Research, Builder, and Reviewer roles
- Generate execution steps, risk checks, and fallback guidance
- Export a reusable Markdown summary for docs or internal planning

## How It Works

1. Enter a project goal in plain language
2. Choose a project type and delivery timeline
3. Generate a planning canvas with positioning, role assignment, steps, and risks
4. Copy the generated summary for reuse in documentation or planning notes

## 本地运行

直接打开 `index.html`，或者使用任意静态服务器启动。

```bash
# Example
python -m http.server 8000
```

## Use Cases

- Early-stage project planning
- Multi-agent workflow demos
- Internal task breakdown and review templates

## Roadmap

- Support editable agent templates
- Add shareable scenario presets
- Integrate real LLM APIs for dynamic generation
- Improve export formats for docs and presentation workflows

## 仓库结构

```text
agent-sprint-canvas/
├─ index.html
├─ styles.css
├─ app.js
└─ README.md
```
