# GEMINI.md — Farmerland Project Convention

> AI 代理人開發指南。本文件描述此專案的技術規格、目錄結構與程式撰寫規範，請在每次任務開始前參閱。

---

## Project Overview（專案概覽）

- **Name**：Farmerland
- **Type**：Vite 7 + React 19 SPA / CSR web app
- **Purpose**：個人部落格與作品集網站，包含文章列表、文章詳細頁、Portfolio 與 About 等頁面
- **Content**：使用 Velite 管理 Markdown/MDX 文章，frontmatter 以 Zod 驗證

---

## Tech Stack（依 package.json 實際版本）

| 類別             | 套件                                                   | 版本            |
| ---------------- | ------------------------------------------------------ | --------------- |
| Build Tool       | Vite                                                   | ^7.3.1          |
| UI Layer         | React                                                  | ^19.2.0         |
| Routing          | React Router DOM                                       | ^7.13.1         |
| Styling          | Tailwind CSS v4 (via @tailwindcss/vite)                | ^4.2.1          |
| State            | Zustand                                                | ^5.0.11         |
| Content CMS      | Velite                                                 | ^0.3.1          |
| Validation       | Zod                                                    | ^4.3.6          |
| Icon             | @iconify/react                                         | ^6.0.2          |
| Class Utility    | clsx + tailwind-merge                                  | ^2.1.1 / ^3.5.0 |
| Type System      | TypeScript (strict mode)                               | ~5.9.3          |
| Package Manager  | pnpm                                                   | —               |
| Linter           | ESLint + typescript-eslint + eslint-plugin-react-hooks | ^9.x            |
| Formatter        | Prettier + prettier-plugin-tailwindcss                 | ^3.8.1          |
| Syntax Highlight | rehype-pretty-code + shiki                             | —               |

> ⚠️ **此專案未使用 TanStack Query、React Hook Form、Vitest、Playwright**。不要引入這些套件，除非使用者明確要求。

---

## Commands（依 package.json scripts）

```bash
pnpm dev          # 啟動開發伺服器（同時執行 Velite content watch）
pnpm build        # 正式 build (tsc -b && vite build)
pnpm preview      # 預覽 production build
pnpm lint         # ESLint 檢查
```

> ⚠️ 目前專案**沒有** `typecheck`、`test`、`test:run`、`test:e2e` 指令。

---

## Project Structure（實際目錄結構）

```
/
├── public/                     # 靜態資源（不經 Vite 處理）
├── content/
│   └── posts/                  # Markdown/MDX 文章（Velite 來源）
├── src/
│   ├── assets/                 # 圖片、字型等（經 Vite 處理）
│   ├── components/             # 共用 UI 元件
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── layouts/                # 頁面 Layout 元件
│   │   └── MainLayout.tsx
│   ├── pages/                  # 對應路由的頁面元件（一個資料夾一頁）
│   │   ├── home/
│   │   ├── articles/
│   │   ├── article-detail/
│   │   ├── portfolio/
│   │   └── about/
│   ├── store/                  # Zustand stores（注意：此專案用 store/ 而非 stores/）
│   │   └── useArticleStore.ts
│   ├── App.tsx                 # 路由定義（createBrowserRouter）
│   ├── App.css
│   ├── index.css               # Tailwind 全域樣式
│   ├── code-hl.css             # 程式碼語法高亮樣式（rehype-pretty-code）
│   └── main.tsx
├── .velite/                    # Velite 編譯輸出（自動生成，勿手動修改）
├── velite.config.ts            # Velite 內容 schema 設定
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── .prettierrc
```

---

## Routing（路由）

路由定義集中在 `src/App.tsx`，使用 `createBrowserRouter`：

| 路徑              | 元件            |
| ----------------- | --------------- |
| `/`               | `Home`          |
| `/articles`       | `Articles`      |
| `/articles/:slug` | `ArticleDetail` |
| `/portfolio`      | `Portfolio`     |
| `/about`          | `About`         |

所有頁面共享 `MainLayout`（含 Header / Footer）。

---

## Content Management — Velite

- 文章存放於 `content/posts/*.md` 或 `*.mdx`
- frontmatter schema 在 `velite.config.ts` 用 Zod 定義
- 編譯後輸出至 `.velite/`，在元件中透過以下方式取用：

```typescript
import { posts } from "@/../.velite";
```

- `pnpm dev` 時 Velite 自動 watch 並重新編譯

---

## Do & do NOT（禁止事項）

- do: 若元件的邏輯過於複雜至於違反單一職責原則，應評估是否合適將邏輯另外抽至 Custom Hook 或 Zustand store(若有跨元件控制需求)
- do: 製作一個公用的useLogger取代 `console.log`。為了實踐資訊安全，需要在正式環境中移除或隱藏所有的log message.

- don't: 不使用 Class Component
- don't: 不使用 `any`。 盡量以unknown強制檢查
- don't: 不 hardcode 任何路徑或設定值
- don't: 不 commit 除了 `.env.example` 以外的.env前綴文件, 包含任何機密資料文件.
- don't: 不使用超過兩層的相對路徑，改用 `@/` alias
- don't: 不安裝此列表外的新套件，除非使用者明確批准
- don't: 不手動修改 `.velite/` 目錄下的任何檔案

---

## References（參考文件）

- Coding Conventions: @docs/coding-conventions.md
- Project Knowledge: @docs/knowledge/CODEBASE_KNOWLEDGE.md
