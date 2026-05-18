# mzyag.github.io

[English](README.md)

Ming Zhou 的个人作品集网站 — 技术负责人，专注于 AI Agent 平台、分布式系统与生产运维。

**在线访问**: [mzyag.github.io](https://mzyag.github.io)

## 项目结构

```
index.html              主页（项目、文章、关于、联系）
writing/                技术文章（7 篇）
css/style.css           样式
js/main.js              语言切换、导航交互
assets/                 简历、字体
```

## 功能

- 中英双语，客户端一键切换
- 纯 HTML/CSS/JS，无构建步骤，无框架
- 响应式设计
- 已接入 Google Search Console

## 技术文章

| 文章 | 主题 |
|------|------|
| [Deterministic Gating](https://mzyag.github.io/writing/deterministic-gating.html) | 生产环境 Agent 的四路由决策 |
| [Three Layers of Evaluation](https://mzyag.github.io/writing/three-layers-evaluation.html) | 组件、工作流与运营三层评估 |
| [When Not to Use an LLM](https://mzyag.github.io/writing/when-not-to-use-llm.html) | LLM 与确定性代码的决策框架 |
| [Engineering the Harness](https://mzyag.github.io/writing/engineering-the-harness.html) | 生产环境中的 Agent 行为治理 |
| [AI-Native Engineering](https://mzyag.github.io/writing/ai-native-engineering.html) | AI 工具贯穿完整开发周期 |
| [Memory Architecture](https://mzyag.github.io/writing/memory-architecture.html) | 生产 Agent 的三层时序记忆架构 |
| [Distributed Systems in Practice](https://mzyag.github.io/writing/distributed-systems-production.html) | 受监管环境下的分布式系统实战模式 |

## 本地开发

浏览器直接打开 `index.html`，或本地启动服务：

```bash
python3 -m http.server 8000
```

## 许可

内容与代码版权归 Ming Zhou 所有，保留所有权利。
