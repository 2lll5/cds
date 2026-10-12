## Overview

This is the Coinbase Design System (CDS) - a cross-platform React component library.
Primary language: Typescript
Package manager: yarn
Task runner & monorepo tooling: Nx
Runtime: NodeJS (see .nvmrc for version)

## Agent Guidelines

- NEVER make commits without being instructed to do so directly
- IMPORTANT: After you are done writing code, ALWAYS perform these tasks:
  1. run the unit tests for the **specific file(s)** you modified
  2. run typecheck on the **specific package(s)** you modified
  3. run the formatter
- For complex tasks, ask clarifying questions to the user before executing
- ALWAYS look for relevant skills and rules you can apply before beginning your work

## Core Commands

- `yarn install` - Install dependencies
- `yarn release` - Automates versioning of packages unaffected by changes to keep version numbers in sync
- `yarn clean` - Removes all build artifacts, deletes .nx folder and resets the Nx daemon
- `yarn nx reset` - Reset Nx daemon cache

## Nx Commands

**ALWAYS** run Nx commands using the formats demonstrated by the commands below.

- `yarn nx show projects` - Show all projects in the workspace (project names differ from package names)
- `yarn nx affected --target=test` - Run tests only for affected projects
- `yarn nx run <project>:test` - Run tests for a specific project
- `yarn nx run <project>:test --testNamePattern=<pattern>` - Run tests matching pattern
- `yarn nx format:write` - Formats all files in the workspace with Prettier
- `yarn nx run <project>:lint` - Lint a specific project
- `yarn nx run <project>:typecheck` - Check for type errors in a specific project
- `yarn nx run-many --target=<target1>,<target2>` - Run targets for all projects
- `yarn nx run-many --target=<target1>,<target2> --projects=<project1>,<project2>` - Run targets for specific projects

## Architecture

### General Architecture

- **Platform-specific implementations**: Separate implementations for web (React) and mobile (React Native)
- **Shared functionality**: Common business logic in `packages/common` used across other packages
- **Theme system**: CDS design tokens are themable and applied via CSS variables (web) and styles (react-native) through a ThemeProvider
- **Design tokens**: Design tokens (e.g. "bgPrimary", "fgMuted") can be used as values for special CDS component "style props" (e.g. "background")
- **Component structure**: Each component has its own folder with the component, tests, stories, and Figma bindings
- **Testing**: Tests are written in Typescript and run with Jest.

### Key Packages & Apps:

- **`packages/web/`** - React web components (`@coinbase/cds-web`)
- **`packages/mobile/`** - React Native mobile components (`@coinbase/cds-mobile`)
- **`packages/common/`** - Shared functionality and types (`@coinbase/cds-common`)
- **`packages/icons/`** - Icon definitions and data (`@coinbase/cds-icons`)
- **`packages/illustrations/`** - Illustration assets (`@coinbase/illustrations`)
- **`apps/docs/`** - Public documentation website (Docusaurus)
- **`apps/storybook/`** - Component development and testing environment for cds-web
- **`apps/expo-app/`** - Expo app for testing and visual regression of CDS mobile components

## Standards & Best Practices

### General

- We prefer quality over quantity for unit tests: focus on high-quality tests that provide outsized value before writing exhaustive test cases for coverage.
- Prefer constants over magic numbers: replace hard-coded values with descriptively named constants in camelCase
- Use meaningful names: variables and functions should reveal their purpose
- Code is self-documenting: code shouldn't need comments unless it is unusually complex in which case add brief comments where appropriate
- NEVER use exports marked as deprecated in the codebase when writing code or a plan.

### React

- Always memoize CDS components with `memo` HOC
- Use `useMemo` for expensive computations or for computed/conditional styles
- Use `useCallback` for event handlers passed as props to other components
- Use `useEffect` only for side effects (e.g API calls, subscriptions, browser API calls, etc.)
- Consult React's docs if you feel you need a useEffect for something else (https://react.dev/learn/you-might-not-need-an-effect)

## Google Drive Build 交付規範（所有 Agent 必須遵守）
- Google Drive 位置：`AI Project/cds/`（資料夾名稱與 GitHub Repo 完全相同；AI Project ID `1Yhfro6Ss5TSCXCVIZIHEu5h7V1gL8b27`）。禁止把 Build 散放於 `AI Project/` 根目錄。
- **最新且完整的版本直接放在專案資料夾根目錄**，包含 ZIP／EXE、SHA-256、完整分片與必要啟動／還原工具。不同平台最新版可以並存。上傳後讀回 Drive 的 parent、大小、名稱及校驗結果；缺 ZIP、checksum 或分片時不得取代上一完整版本。
- **只有功能／架構／相容性／重要美術差異，才建立 `vX.Y.Z-說明/` 版本子資料夾**。一般舊版非破壞性移到 `歷史封存/`，不得刪除。不要每次 Build 都新增版本資料夾。
- 只有完成實際 Build 與測試才可稱為已完成；所有開發提交 GitHub。昂貴 GitHub Actions 建置只在 `workflow_dispatch` 或正式 `release: published` 觸發，不隨每次 main push 執行。回報版本、Drive 專案目錄、檔案清單及校驗情況。

**Codex/agents (English):** Current complete builds go directly in `AI Project/cds/`. Keep material milestones in version folders; archive ordinary older builds under `歷史封存/` without deletion; never promote incomplete uploads.
