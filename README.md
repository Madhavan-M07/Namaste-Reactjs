# Namaste React

> A minimal React starter built with Parcel. Small, fast, and great for learning how bundlers work.

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Getting Started](#getting-started)
* [Scripts](#scripts)
* [Dev Build & Local Server (Parcel)](#dev-build--local-server-parcel)
* [Hot Module Replacement (HMR)](#hot-module-replacement-hmr)
* [File Watching Algorithm](#file-watching-algorithm)
* [Caching & Faster Builds](#caching--faster-builds)
* [Project Structure](#project-structure)
* [Troubleshooting](#troubleshooting)
* [Contributing](#contributing)
* [License](#license)

---

## About

This repository is a lightweight React project scaffolded using Parcel as the bundler. The goal is to keep the dev experience simple while showing key Parcel features like dev server, HMR, file-watching, and caching.

## Features

* Zero-config Parcel bundler setup
* Fast development server with Hot Module Replacement (HMR)
* Efficient file watching (Platform-optimized algorithm written in C++)
* Persistent caching for faster incremental rebuilds
* Simple React + Vite-like folder structure (but using Parcel)

## Getting Started

### Prerequisites

* Node.js (v14+ recommended)
* npm or yarn

### Install

```bash
# Using npm
npm install

# or using yarn
yarn
```

## Scripts

Add these scripts to your `package.json` (example provided below):

```json
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html --dist-dir build",
  "clean": "rimraf .parcel-cache build"
}
```

* `start` — runs Parcel in development mode with dev server + HMR.
* `build` — production build with minification and optimizations.
* `clean` — removes Parcel cache and previous build folder.

## Dev Build & Local Server (Parcel)

Parcel provides a development server out of the box. When you run:

```bash
npm run start
```

Parcel does the following:

* Serves `src/index.html` on a local HTTP server (default `http://localhost:1234`).
* Builds modules on demand (no full bundle up-front), which improves startup time.
* Watches your source files and rebuilds only the changed modules.

Useful flags:

* `--port <number>` — change the server port.
* `--open` — open the browser automatically.

## Hot Module Replacement (HMR)

Parcel supports HMR for many module types (JS/JSX, CSS, etc.). HMR allows a module update to be applied in the browser without a full page reload, preserving app state where possible.

* HMR is enabled automatically in dev mode.
* For React, use component-level state or libraries like React Fast Refresh for better DX.

Example: edit a React component, save — Parcel pushes a module update to the browser; if the module accepts HMR updates, it will be swapped in place.

## File Watching Algorithm

Parcel’s file-watching subsystem uses platform-specific strategies to detect filesystem changes efficiently. The heavy lifting in many modern watchers (including components used by Parcel) is implemented in native code (often C++), because:

* Native watchers can use low-level OS APIs (`inotify` on Linux, `FSEvents` on macOS, `ReadDirectoryChangesW` on Windows) which are far more efficient than polling in JavaScript.
* Native code can batch and debounce events before passing them to the JS layer, reducing CPU usage.

Key points:

* **Event-driven watchers:** The watcher receives native events from the OS and maps them to file-change events in the bundler.
* **Debouncing & coalescing:** Rapid file changes (e.g., TypeScript/IDE temp files) are debounced so the bundler rebuilds only once.
* **Platform fallbacks:** If native APIs are unavailable, watchers can fall back to efficient polling.

> Note: Parcel itself uses libraries that may include native bindings for efficient watching; the exact implementation is delegated to those dependencies.

## Caching — Faster Builds

Parcel uses persistent caches to speed up incremental builds:

* **Transform cache:** Results of expensive transforms (Babel, PostCSS, TypeScript transpilation) are cached on disk.
* **Bundle cache:** Parcel stores intermediate graph and bundle data so subsequent runs reuse previously computed results.
* **Content hashing & cache invalidation:** Cache keys are derived from file content + transformer options. When you change a file or its transform config, Parcel invalidates only affected cache entries.

Tips to keep builds fast:

* Keep `.parcel-cache` in your project root (default). Do not delete it between quick iterations.
* Use `npm run clean` only when necessary (to clear stale caches).
* Avoid extremely large `node_modules` workspaces on the same watch root — prefer monorepo strategies or separate processes.

## Project Structure

A suggested structure:

```
namaste-react/
├─ package.json
├─ .parcel-cache/        # Parcel's persistent cache
├─ src/
│  ├─ index.html
│  ├─ index.js
│  ├─ App.jsx
│  └─ styles/
│     └─ main.css
└─ build/                # output from `npm run build`
```

## Troubleshooting

### `Library targets are not supported in serve mode` (Parcel)

This means `package.json` has a `main` field or `targets` that suggest a library build but you're running Parcel in dev/serve mode. Common fixes:

1. Remove or adjust the `main`/`targets` fields in `package.json` while developing.
2. Use a separate `package.json` target for library builds and a different dev script for local development.

Example `package.json` snippet:

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "main": "src/index.js",              // set to your entry for dev or remove
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html --dist-dir build"
  }
}
```

### HMR not updating React components properly

* Ensure your component files export correctly and the module accepts HMR.
* Consider adding React Fast Refresh or `@prefresh`-style tooling if you need preserved component state.

## Contributing

Feel free to open issues or PRs. Keep changes small and focused. Document why a change was made if it affects build behavior.

## License

MIT — feel free to use and adapt this starter for your projects.

---

*Happy coding — Namaste!*
