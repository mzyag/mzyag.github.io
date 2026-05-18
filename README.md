# mzyag.github.io

Personal portfolio site for Ming Zhou — Tech Lead specializing in AI Agent platforms, distributed systems, and production operations.

**Live**: [mzyag.github.io](https://mzyag.github.io)

## Structure

```
index.html              Main page (projects, writing, about, contact)
writing/                Technical articles (7 posts)
css/style.css           Styles
js/main.js              Language toggle, navigation, interactions
assets/                 Resume PDF, web fonts
```

## Features

- Bilingual (English / Chinese) with client-side toggle
- Pure HTML/CSS/JS — no build step, no framework
- Responsive design
- Google Search Console verified

## Writing

| Article | Topic |
|---------|-------|
| [Deterministic Gating](https://mzyag.github.io/writing/deterministic-gating.html) | Four-outcome routing for production agents |
| [Three Layers of Evaluation](https://mzyag.github.io/writing/three-layers-evaluation.html) | Component, workflow, and operational evaluation |
| [When Not to Use an LLM](https://mzyag.github.io/writing/when-not-to-use-llm.html) | Decision framework: LLM vs deterministic code |
| [Engineering the Harness](https://mzyag.github.io/writing/engineering-the-harness.html) | Governing agent behavior in production |
| [AI-Native Engineering](https://mzyag.github.io/writing/ai-native-engineering.html) | AI tools across the full development cycle |
| [Memory Architecture](https://mzyag.github.io/writing/memory-architecture.html) | Three-tier temporal memory for production agents |
| [Distributed Systems in Practice](https://mzyag.github.io/writing/distributed-systems-production.html) | Patterns that survive regulated environments |

## Local Development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

## License

Content and code are copyright Ming Zhou. All rights reserved.
