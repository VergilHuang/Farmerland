# PROJECT_KNOWLEDGE.md

> 自動生成於：2026-04-01 12:38
> 生成工具：analysis-codebase-fe workflow
> 職責範疇：僅涵蓋前端層（UI / 路由 / 狀態管理 / 樣式）
> ⚠️ 此文件為靜態快照，不會自動同步程式碼變更，請於重大架構調整後重新執行 workflow。

---

## 1. 專案概覽

- **專案名稱**：Farmerland
- **核心目的**：個人技術部落格與作品集網站，記錄程式開發、AI 應用、生活感悟等學習與實踐點滴
- **目標使用者**：技術讀者、潛在合作夥伴、求職面試官
- **專案狀態**：開發中
- **前端框架版本**：React 19.2.0 + Vite 7.3.1

---

## 2. 前端技術棧（Frontend Tech Stack）

| 分類          | 工具 / 版本                                                        |
| ------------- | ------------------------------------------------------------------ |
| 框架          | React 19.2.0                                                       |
| 建置工具      | Vite 7.3.1                                                         |
| UI 元件庫     | 無（自行實作）                                                     |
| 圖示庫        | @iconify/react ^6.0.2 + Google Material Symbols（CDN）             |
| 狀態管理      | Zustand ^5.0.11                                                    |
| 路由          | react-router-dom ^7.13.1（手動定義路由）                           |
| 樣式方案      | Tailwind CSS v4（@tailwindcss/vite plugin）+ Vanilla CSS           |
| 內容管理      | Velite ^0.3.1（Markdown/MDX → 型別安全靜態資料）                   |
| Markdown 渲染 | rehype-pretty-code ^0.14.3（語法高亮：github-light / github-dark） |
| HTML 安全     | DOMPurify ^3.3.3                                                   |
| 工具函式      | clsx ^2.1.1、tailwind-merge ^3.5.0                                 |
| TypeScript    | ✅ ~5.9.3                                                          |
| Lint          | ESLint ^9.39.1 + typescript-eslint ^8.48.0                         |
| 格式化        | Prettier ^3.8.1 + prettier-plugin-tailwindcss ^0.7.2               |
| 測試框架      | ❌ 無                                                              |
| 套件管理器    | pnpm（pnpm-lock.yaml 存在）                                        |

---

## 3. 前端目錄結構

```
d:\projects\Farmerland\
├── content/                    # Velite 原始 Markdown 內容
│   └── posts/                  # 文章（*.md），slug 自動推導
├── .velite/                    # Velite 編譯輸出（型別安全 posts 陣列）
├── public/
│   └── static/                 # Velite 資產輸出（圖片 hash 命名）
├── src/
│   ├── main.tsx                # App 入口，掛載 StrictMode + App
│   ├── index.css               # 全域樣式（Tailwind v4 @theme token）
│   ├── code-hl.css             # 程式碼高亮自訂樣式
│   ├── App.tsx                 # 路由定義（createBrowserRouter）
│   ├── App.css                 # App 根樣式
│   ├── components/             # 共用全域元件
│   │   ├── Header.tsx          # 頂部導覽列（含 Dark Mode 切換）
│   │   └── Footer.tsx          # 頁尾（社群連結 + Newsletter）
│   ├── layouts/
│   │   └── MainLayout.tsx      # 主版面（Header + Outlet + Footer）
│   ├── pages/
│   │   ├── home/
│   │   │   ├── index.tsx       # 首頁（Featured Posts + Latest Research）
│   │   │   └── HeroSection.tsx # Hero 區塊（獨立子元件）
│   │   ├── articles/
│   │   │   └── index.tsx       # 文章列表頁（搜尋 + 篩選 + 側邊欄）
│   │   ├── article-detail/
│   │   │   └── index.tsx       # 文章詳情頁（MDX 渲染 + TOC + 相關文章）
│   │   ├── portfolio/
│   │   │   └── index.tsx       # 作品集頁（靜態 6 張 Project Card）
│   │   └── about/
│   │       └── index.tsx       # 關於頁（個人履歷時間軸 + 技能矩陣）
│   ├── store/
│   │   └── useArticleStore.ts  # Zustand Store（文章篩選狀態）
│   └── assets/                 # ⚠️ 待確認（目錄存在但內容未探索）
├── vite.config.ts              # Vite 設定（react plugin + tailwindcss + alias @）
├── velite.config.ts            # Velite 設定（posts schema + rehypePrettyCode）
├── tsconfig.app.json           # TypeScript 前端設定
├── package.json                # 依賴與 scripts
└── context/
    └── knowledge/
        └── PROJECT_KNOWLEDGE.md
```

---

## 4. 路由結構（Route Structure）

路由採**手動定義**（`createBrowserRouter`），定義於 `src/App.tsx`。

| 路由路徑          | 對應檔案                         | 頁面功能                                        | Layout     | Auth 需求 |
| ----------------- | -------------------------------- | ----------------------------------------------- | ---------- | --------- |
| `/`               | `pages/home/index.tsx`           | 首頁（Hero + Featured Posts + Latest Research） | MainLayout | ❌        |
| `/articles`       | `pages/articles/index.tsx`       | 文章列表（搜尋 + Category/Tag 篩選）            | MainLayout | ❌        |
| `/articles/:slug` | `pages/article-detail/index.tsx` | 文章詳情（Markdown 渲染 + 關聯文章）            | MainLayout | ❌        |
| `/portfolio`      | `pages/portfolio/index.tsx`      | 作品集（6 個 Project Card + 靜態篩選 UI）       | MainLayout | ❌        |
| `/about`          | `pages/about/index.tsx`          | 關於（個人 Bio + 職涯時間軸 + 技能矩陣）        | MainLayout | ❌        |

> ⚠️ Header 中有 `Contact`、`Research` 連結（`href="#"`），尚未對應路由頁面，為佔位符。

---

## 5. 全域狀態管理（Global State）

| Store 名稱        | 檔案路徑                       | 管理的狀態         | 主要 Actions                                                         |
| ----------------- | ------------------------------ | ------------------ | -------------------------------------------------------------------- |
| `useArticleStore` | `src/store/useArticleStore.ts` | 文章列表頁篩選條件 | `setSearchQuery`, `setSelectedCategory`, `toggleTag`, `clearFilters` |

### useArticleStore 狀態詳情

```ts
interface ArticleState {
  searchQuery: string;           // 全文搜尋關鍵字
  selectedCategory: string | null; // 已選取的分類
  selectedTags: string[];          // 已選取的 Tag 陣列（支援多選）
}
```

> ⚠️ Store 狀態不會在頁面切換後重置（Zustand 預設 in-memory）。切換到其他頁面再返回 `/articles` 時篩選條件仍保留。

---

## 6. 共用 Composables / Hooks

本專案為 React，無 Composables。自訂 Hook 目前**僅限** Header.tsx 中的內聯 Dark Mode 邏輯，尚未抽離為獨立 Hook。

| 邏輯           | 位置                            | 功能說明                                                                          |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------- |
| Dark Mode 切換 | `components/Header.tsx`（內聯） | 讀取 `localStorage.theme` + `prefers-color-scheme`，切換 `<html>` 的 `dark` class |

---

## 7. 元件架構概覽

### 設計分層

```
基礎層（Layout）：MainLayout（Header + Footer）
↓
頁面層（Page）：Home / Articles / ArticleDetail / Portfolio / About
↓
頁面子元件：HeroSection（服務於 Home）
```

### 元件清單

| 元件名稱      | 路徑                             | 職責                                                              | 備註                                     |
| ------------- | -------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| `Header`      | `src/components/Header.tsx`      | 頂部導覽列、Logo、Nav Links、Dark Mode 按鈕                       | 使用 `useLocation` 計算 active link 樣式 |
| `Footer`      | `src/components/Footer.tsx`      | 頁尾、社群連結（Twitter/GitHub/LinkedIn 佔位）、Newsletter 輸入框 | Newsletter 功能為靜態 UI，無提交邏輯     |
| `MainLayout`  | `src/layouts/MainLayout.tsx`     | 全頁框架，包裝 Header + `<Outlet />` + Footer                     | `flex min-h-screen` 確保 Footer 齊底     |
| `HeroSection` | `src/pages/home/HeroSection.tsx` | 首頁主視覺橫幅（圖片 + Tagline + CTA 按鈕）                       | "Read Resume" 連結目前被 comment 掉      |

---

## 8. 內容管理（Velite CMS）

Velite 作為**靜態內容端**，在 build/dev 時將 `content/posts/*.md` 編譯為型別安全的 TypeScript 物件。

### Post Schema

```ts
{
  title: string;          // 最長 99 字
  slug: string;           // file-based，唯一識別
  date: string;           // ISO 格式
  excerpt?: string;
  category?: string;
  cover?: string;         // 封面圖 URL
  coverAlt?: string;
  tags?: string[];
  content: string;        // 編譯後的 HTML 字串
  metadata?: object;
}
```

### 使用方式

```ts
import { posts } from '../../../.velite';
// posts: Post[]  完整型別推導，build-time 確定
```

### 程式碼高亮

- 引擎：`rehype-pretty-code` + `shiki`
- Light theme：`github-light`
- Dark theme：`github-dark`
- 自訂樣式：`src/code-hl.css`

---

## 9. 樣式方案

### Tailwind CSS v4

- 使用 **`@tailwindcss/vite`** plugin，不需要 `tailwind.config.ts`
- 透過 `src/index.css` 的 `@theme {}` 定義設計 token

### 設計 Token（`src/index.css`）

| Token                      | 值                                    |
| -------------------------- | ------------------------------------- |
| `--color-primary`          | `#1e293b`（slate-800 深藍灰）         |
| `--color-accent`           | `#3498db`（亮藍）                     |
| `--color-background-light` | `#f8f7f2`（暖白）                     |
| `--color-background-dark`  | `#1e293b`                             |
| `--font-display`           | `"Inter", "Noto Sans TC", sans-serif` |
| `--font-sans`              | `"Inter", "Noto Sans TC", sans-serif` |

### Dark Mode 策略

- 使用 `class` 策略：`@custom-variant dark (&:is(.dark *))`
- 由 `Header.tsx` 在 `<html>` 上切換 `.dark` class
- 使用者偏好透過 `localStorage.theme` 持久化

### Tailwind Plugins

- `@tailwindcss/typography`：文章 `prose` 排版
- `@tailwindcss/forms`：表單元素樣式重置

### 字體

- Inter（拉丁文）+ Noto Sans TC（繁中支援）
- 透過 `unplugin-fonts ^1.4.0` 引入

---

## 10. 前端開發指南

### 啟動方式

```bash
pnpm install       # 安裝依賴
pnpm dev           # 開發模式（Vite dev server + Velite watch）
pnpm build         # 正式建置（tsc -b && vite build）
pnpm lint          # ESLint 檢查
pnpm preview       # 預覽 production build
```

### Path Alias

```ts
// vite.config.ts
"@" → "./src"
// 使用範例：import Header from "@/components/Header";
```

### 程式碼規範

- **元件命名**：PascalCase（e.g., `HeroSection.tsx`）
- **檔案結構**：每個頁面放在 `pages/<page-name>/index.tsx`（支援未來加入子元件）
- **CSS Class 命名**：Tailwind utility-first，搭配 `clsx` + `tailwind-merge` 處理條件樣式
- **TypeScript**：✅ 強制使用，`.velite` 型別自動生成
- **Prettier**：`.prettierrc` 存在，含 `prettier-plugin-tailwindcss` 排序

---

## 11. 已知前端問題與技術債

- [ ] **Portfolio 篩選按鈕無功能**：`pages/portfolio/index.tsx` 的 Filter Buttons（React / Node.js / AWS / AI/ML）僅為靜態 UI，無對應狀態邏輯
- [ ] **Pagination 無功能**：`pages/articles/index.tsx` 的分頁按鈕目前為靜態，無實際分頁邏輯
- [ ] **Table of Contents 未動態生成**：`pages/article-detail/index.tsx` 的 TOC 側欄固定顯示「No headings found」，未解析文章 heading
- [ ] **Contact / Research 路由缺失**：Header 中的 Contact 和 Research 連結指向 `href="#"`，尚未建立對應頁面
- [ ] **Footer 社群連結為佔位符**：Twitter / GitHub / LinkedIn 都指向 `href="#"`
- [ ] **Newsletter 功能未實作**：Footer 和 Articles 側邊欄的訂閱表單僅有靜態 UI，無提交邏輯
- [ ] **Dark Mode 邏輯未抽離**：Dark Mode toggle 邏輯直接內嵌在 `Header.tsx`，建議抽成 `useTheme` hook
- [ ] **Home 頁 Featured Posts 為硬編碼**：首頁的 3 張 Featured Cards 為靜態硬編碼，未從 Velite posts 動態取得
- [ ] **About 頁按鈕無功能**：「Get In Touch」、「Download Resume」、「View Portfolio」按鈕均無實際跳轉或行為

---

## 12. 前端設計決策備忘

- **SSR vs CSR 策略**：純 CSR（Vite SPA），無 SSR。Velite 在 build time 預先編譯 Markdown，避免 client-side runtime 解析開銷
- **內容管理選型**：選用 Velite 而非 CMS（Contentful / Notion 等），因為可完全 local、型別安全、且 git-based 版控
- **狀態管理選型**：Zustand（輕量），僅用於跨頁面持久的文章篩選狀態；其餘 UI state 使用 React local state
- **路由策略**：react-router-dom v7 手動定義，而非 file-based routing（未用 Tanstack Router 等）
- **API 呼叫**：目前**無後端 API**，所有內容來自 Velite 編譯的靜態資料
- **圖標方案**：雙軌併行 — Google Material Symbols（`<span className="material-symbols-outlined">`，CDN）+ @iconify/react（npm）
- **HTML 安全**：文章 content 使用 `DOMPurify.sanitize()` 過濾後再 `dangerouslySetInnerHTML`

---

## 13. 參考資源

- 設計稿（Figma）：⚠️ 待確認
- API 文件連結：N/A（目前無後端 API）
- Velite 官方文件：https://velite.js.org/
- Tailwind CSS v4 文件：https://tailwindcss.com/docs
- react-router-dom v7：https://reactrouter.com/
