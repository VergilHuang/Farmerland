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

## Coding Conventions（程式撰寫規範）

### React

- 一律使用 Functional Component + Hooks，禁止 Class Component
- 元件命名：PascalCase（`ArticleCard.tsx`）
- Hook 命名：camelCase 加 `use` 前綴（`useArticleStore.ts`）
- 一個檔案只導出一個元件（除非是緊密相關的小元件）
- Props 用 `interface` 定義，放在元件檔案頂部
- 避免不必要的 `useEffect`

### 元件拆分原則

1. **單一職責（SRP）**：一個元件只做一件事
2. **元件大小**：
   - 100 行以下：通常不需要拆
   - 100–200 行：評估是否有拆分空間
   - **200 行以上：強烈建議拆分**
3. **可重用性**：同一段 JSX 出現兩次以上，抽成獨立元件
4. **邏輯與 UI 分離**：業務邏輯抽到 Custom Hook，元件只負責渲染

```typescript
// ❌ 邏輯與 UI 混在一起
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => { /* fetch */ }, []);
  return <ul>{articles.map(...)}</ul>;
};

// ✅ 邏輯抽到 Zustand store / custom hook
const useArticles = () => useArticleStore(s => s.articles);
const ArticleList = () => {
  const articles = useArticles();
  return <ul>{articles.map(...)}</ul>;
};
```

5. **Props 複雜度**：超過 5–7 個 props 時，考慮拆分子元件或使用 object 合併

### Styling — Tailwind CSS v4

- class 順序遵循官方推薦：`layout → spacing → typography → color`
- 動態 class 使用 `clsx` + `tailwind-merge`（`cn()` 工具函式），不用字串拼接

```typescript
// src/lib/utils.ts 中定義
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- 避免 inline style，除非是動態計算值（如 `style={{ width: dynamicWidth }}`）
- 使用 `@tailwindcss/typography` 的 `prose` class 渲染 Markdown 內容

### State Management — Zustand

- Client-only state 使用 Zustand，store 放在 `src/store/` 目錄
- Store 檔案命名：`use<Domain>Store.ts`（例如 `useArticleStore.ts`）
- **不把 Server state 放進 Zustand**

### TypeScript

- 禁止使用 `any`，改用 `unknown` + type guard
- 所有資料結構必須定義 `interface` 或 `type`
- Velite schema 型別從 Zod schema 推導（`z.infer<typeof schema>`）
- strict mode 已啟用：`noUnusedLocals`、`noUnusedParameters` 均為 `true`

---

## Path Alias（路徑別名）

`vite.config.ts` 與 `tsconfig.app.json` 均已設定 `@` 指向 `src/`：

```typescript
import MainLayout from "@/layouts/MainLayout";
import { cn } from "@/lib/utils";
import useArticleStore from "@/store/useArticleStore";
```

> ⚠️ 不得使用超過兩層的相對路徑 `../../`，一律改用 `@/` alias。

---

## Git Conventions（Git 規範）

- **Branch**：`feat/<short-description>` / `fix/<short-description>` / `chore/<short-description>`
- **Commit**：使用 Conventional Commits
  - `feat: add portfolio filter`
  - `fix: resolve article slug mismatch`
  - `chore: update tailwind to v4.2`
- Commit 前確認通過：`pnpm lint && pnpm build`

---

## Do NOT（禁止事項）

- ❌ 不使用 Class Component
- ❌ 不使用 `any`
- ❌ 不直接在元件內撰寫複雜業務邏輯，應抽至 Custom Hook 或 Zustand store
- ❌ 不 hardcode 任何路徑或設定值
- ❌ 不 commit `.env.local`
- ❌ 不使用 `console.log`（正式環境）
- ❌ 不使用超過兩層的相對路徑，改用 `@/` alias
- ❌ 不安裝此列表外的新套件，除非使用者明確批准
- ❌ 不手動修改 `.velite/` 目錄下的任何檔案

---

## References（參考文件）

- Project Knowledge: @context/knowledge/CODEBASE_KNOWLEDGE.md
