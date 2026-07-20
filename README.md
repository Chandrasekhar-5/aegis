
# Aegis

> **Know your environment before you run your code.**

Aegis is a plugin-first **Developer Health Platform** that helps developers detect problems in their local development environment and repositories before they become hours of debugging.

> ⚠️ **Project Status:** Early development (v0.1.0). The architecture is actively being built and welcomes contributors.

---

## ✨ Why Aegis?

Developers lose time because of:

- Wrong Node.js version
- Missing Git or package managers
- Docker not running
- Missing `.env` files
- Repository standards not followed
- Incorrect project setup

Aegis aims to detect these issues early with a fast, extensible diagnostic engine.

---

## 🚀 Features

### Current

- Plugin-first architecture
- Diagnostic engine
- Runtime diagnostics (in progress)
- Repository health checks (in progress)
- Terminal reporting
- JSON output
- TypeScript monorepo (Turborepo + pnpm)

### Planned

- Database plugins
- Framework plugins
- Auto-fix suggestions
- VS Code extension
- GitHub Action
- Cloud dashboard

---

## 📦 Installation

```bash
pnpm add -D aegis
# or
npm install --save-dev aegis
```

Run without installation:

```bash
npx aegis doctor
```

---

## ⚡ Quick Start

```bash
aegis doctor
aegis pulse
aegis doctor --json
aegis pulse --json
```

---

## 🏗️ Architecture

```text
CLI
 │
 ▼
Engine
 │
 ▼
Plugin Loader
 │
 ▼
Plugins
 │
 ▼
Diagnostics
 │
 ▼
Reporter
```

The core engine is intentionally lightweight. All diagnostics are implemented as plugins.

---

## 📂 Repository Structure

```text
packages/
├── cli
├── engine
├── sdk
├── types
├── utils

plugins/
├── runtime
├── repository
├── database
└── framework
```

---

## 🤝 Contributing

We welcome contributors of all experience levels.

Areas to contribute:

- New diagnostics
- Bug fixes
- Documentation
- Tests
- Performance
- New plugins

Please read **CONTRIBUTING.md** before opening a pull request.

---

## 🗺️ Roadmap

### v0.1.0

- Core engine
- Plugin SDK
- Runtime plugin
- CLI
- JSON output

### Future

- Database diagnostics
- Framework ecosystem
- Plugin marketplace
- Auto-fix
- GitHub Action
- VS Code Extension

---

## 📜 License

Licensed under the MIT License.

---

## ⭐ Support

If Aegis helps you, consider giving the repository a ⭐ to support development.

Together, let's make development environments healthier.
