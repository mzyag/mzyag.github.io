# mzyag.github.io

Personal portfolio site for Ming Zhou — Tech Lead specializing in AI Agent platforms, distributed systems, and production operations.

Ming Zhou 的个人作品集网站 — 技术负责人，专注于 AI Agent 平台、分布式系统与生产运维。

**Live**: [mzyag.github.io](https://mzyag.github.io)

## Structure / 项目结构

```
index.html              Main page / 主页（项目、文章、关于、联系）
writing/                Technical articles / 技术文章（7 篇）
css/style.css           Styles / 样式
js/main.js              Language toggle, navigation / 语言切换、导航交互
assets/                 Resume PDF, web fonts / 简历、字体
```

## Features / 功能

- Bilingual (English / Chinese) with client-side toggle / 中英双语，客户端一键切换
- Pure HTML/CSS/JS — no build step, no framework / 纯 HTML/CSS/JS，无构建步骤，无框架
- Responsive design / 响应式设计
- Google Search Console verified / 已接入 Google Search Console

## Writing / 技术文章

| Article / 文章 | Topic / 主题 |
|---------|-------|
| [Deterministic Gating](https://mzyag.github.io/writing/deterministic-gating.html) | Four-outcome routing for production agents / 生产环境 Agent 的四路由决策 |
| [Three Layers of Evaluation](https://mzyag.github.io/writing/three-layers-evaluation.html) | Component, workflow, and operational evaluation / 组件、工作流与运营三层评估 |
| [When Not to Use an LLM](https://mzyag.github.io/writing/when-not-to-use-llm.html) | Decision framework: LLM vs deterministic code / LLM 与确定性代码的决策框架 |
| [Engineering the Harness](https://mzyag.github.io/writing/engineering-the-harness.html) | Governing agent behavior in production / 生产环境中的 Agent 行为治理 |
| [AI-Native Engineering](https://mzyag.github.io/writing/ai-native-engineering.html) | AI tools across the full development cycle / AI 工具贯穿完整开发周期 |
| [Memory Architecture](https://mzyag.github.io/writing/memory-architecture.html) | Three-tier temporal memory for production agents / 生产 Agent 的三层时序记忆架构 |
| [Distributed Systems in Practice](https://mzyag.github.io/writing/distributed-systems-production.html) | Patterns that survive regulated environments / 受监管环境下的分布式系统实战模式 |

## Local Development / 本地开发

Open `index.html` in a browser, or serve locally / 浏览器直接打开 `index.html`，或本地启动服务：

```bash
python3 -m http.server 8000
```

## License / 许可

Content and code are copyright Ming Zhou. All rights reserved.

内容与代码版权归 Ming Zhou 所有，保留所有权利。
