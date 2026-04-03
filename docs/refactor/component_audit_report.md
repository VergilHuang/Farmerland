# Farmerland 元件審查報告（第二版）

> **審查基準**：`GEMINI.md` + `docs/coding-conventions.md`（2026-04-02 最新版本）
> **審查日期**：2026-04-02
> **審查範圍**：`src/components/`、`src/layouts/`、`src/pages/`、`src/store/`、`src/hooks/`
> **重要規範變更**：元件拆分閾值從舊版「200 行強烈建議」更新為新版「**300 行以上強烈建議**」，200–300 行為「評估是否拆分」。

---

## 審查總覽

| 元件 | 行數 | 嚴重程度 | 主要問題（與前次報告的差異） |
|------|------|----------|---------------------------|
| `components/Header.tsx` | 83 | 🟡 中 | Dark Mode 邏輯未抽離、`getLinkClasses` 未用 `cn()`、無 Mobile Menu — **與前次相同** |
| `components/Footer.tsx` | 53 | 🟡 中 | 版權年份/品牌名硬編碼、Newsletter input 無無障礙屬性 — **與前次相同** |
| `layouts/MainLayout.tsx` | 16 | 🟢 低 | 無問題，符合規範 — **與前次相同** |
| `pages/home/HeroSection.tsx` | 45 | 🟡 中 | `Read Resume` 被 comment 掉、外部圖片 URL 硬編碼 — **與前次相同** |
| `pages/home/index.tsx` | 196 | 🟡 中 | ⬇️ **降級**（未超過 300 行新閾值）但仍有 3 張 Featured Card 重複 JSX、資料硬編碼未接 Velite |
| `pages/articles/index.tsx` | 238 | 🟡 中 | ⬇️ **降級**（未超過 300 行新閾值）但有三層相對路徑、動態 class 未用 `cn()`、Pagination 無功能 |
| `pages/article-detail/index.tsx` | 146 | 🔴 高 | TOC 永遠顯示「No headings found」、三層相對路徑 import — **與前次相同** |
| `pages/portfolio/index.tsx` | 331 | 🔴 緊急 | **331 行超過 300 行閾值**，6 張 Project Card 完全重複 JSX，篩選無功能 — **與前次相同** |
| `pages/about/index.tsx` | 190 | 🟡 中 | 3 個 CTA 按鈕無功能、技能進度條純靜態 — **與前次相同** |
| `store/useArticleStore.ts` | 27 | 🟢 低 | 符合規範，篩選狀態跨頁不重置（已知行為）— **與前次相同** |
| `hooks/useLogger.ts` | 1 | 🔴 緊急 | **⚠️ 新增發現：檔案為空，但 GEMINI.md 明確要求此 Hook 存在且取代所有 `console.log`** |

---

## 🔴 緊急問題（需優先處理）

### 1. `hooks/useLogger.ts` — 空實作，違反 GEMINI.md 核心規範

**問題：**
- 檔案存在但**內容完全為空**（0 bytes）。
- GEMINI.md 「Do」條目明確規定「製作一個公用的 `useLogger` 取代 `console.log`，需要在正式環境中移除或隱藏所有的 log message」。
- 此 Hook 是安全策略的一部分（防止生產環境洩漏敏感資訊），優先級最高。

**建議實作：**
```typescript
// src/hooks/useLogger.ts
const isDev = import.meta.env.DEV;

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

function createLogger(level: LogLevel) {
  return (...args: unknown[]) => {
    if (isDev) {
      console[level](...args);
    }
  };
}

export function useLogger(prefix?: string) {
  const format = (args: unknown[]) =>
    prefix ? [`[${prefix}]`, ...args] : args;

  return {
    log: (...args: unknown[]) => createLogger('log')(...format(args)),
    warn: (...args: unknown[]) => createLogger('warn')(...format(args)),
    error: (...args: unknown[]) => createLogger('error')(...format(args)),
    info: (...args: unknown[]) => createLogger('info')(...format(args)),
    debug: (...args: unknown[]) => createLogger('debug')(...format(args)),
  };
}
```

**違反規範：**
- GEMINI.md Do 條目：「製作一個公用的 `useLogger` 取代 `console.log`」

---

### 2. `pages/portfolio/index.tsx` — 331 行，超過 300 行閾值

**問題：**
- **331 行**，超過 300 行「強烈建議拆分」閾值。
- 6 張 Project Card（每張約 46 行）完全重複相同 JSX 結構。
- Filter 按鈕（React / Node.js / AWS / AI/ML）無任何 state 或 onClick 邏輯，純 UI 裝飾。
- 所有 `href="#"` 為佔位符，無實際連結。

**建議拆分架構：**
```
src/pages/portfolio/
├── index.tsx              # 頁面板塊組裝（目標: < 80 行）
├── ProjectCard.tsx        # 單張 Card 元件
├── ProjectFilter.tsx      # 篩選按鈕區塊
└── usePortfolioFilter.ts  # 篩選邏輯 Custom Hook（Zustand 或 useState）
```

**`ProjectCard` interface 建議：**
```typescript
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
  codeUrl?: string;
  updatedAt: string;
}
```

**違反規範：**
- 300 行以上強烈建議拆分（coding-conventions.md 第 2 條）
- 同段 JSX 出現兩次以上，應抽成獨立元件（第 3 條）

---

### 3. `pages/article-detail/index.tsx` — TOC 永遠失效

**問題：**
- L116: `<span>No headings found in this article.</span>` 為硬編碼，TOC 從未實際解析。
- Velite 輸出的 `post.content` 是 HTML 字串，headings 需透過 DOM 解析或 Velite plugin 提取。
- 三層相對路徑：L3 `import { posts } from "../../../.velite"` 違反路徑規範（最多兩層）。
- `thumb_up` / `thumb_down` 按鈕（L97–L103）無任何 state 或回饋。

**TOC 修正方案（Client-side 解析）：**
```typescript
// 可抽成 src/hooks/useTableOfContents.ts
function extractHeadings(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('h2, h3')).map(el => ({
    id: el.id,
    text: el.textContent ?? '',
    level: el.tagName,
  }));
}
```

**Import 路徑修正：**
```typescript
// ❌ 現行（三層相對路徑）
import { posts } from "../../../.velite";

// ✅ 符合規範
import { posts } from "@/../.velite";
```

**違反規範：**
- 不得使用超過兩層的相對路徑（coding-conventions.md Path Alias 章節）

---

## 🟡 中優先問題

### 4. `components/Header.tsx` — 邏輯未抽離、`cn()` 未使用

**[1] Dark Mode 邏輯違反邏輯與 UI 分離原則（coding-conventions.md 第 4 條）：**
- `useState` + `useEffect` 的 Dark Mode 邏輯（L5–L25）直接內嵌在 `Header.tsx`，應抽離至 `useTheme.ts`。

**[2] `getLinkClasses()` 字串拼接違反 Tailwind 動態 class 規範（Styling 章節）：**
```typescript
// ❌ 現行（L36, L38）
return `${baseClasses} text-accent underline underline-offset-4`;

// ✅ 符合規範
return cn(baseClasses, 'text-accent underline underline-offset-4');
```

**[3] `Contact` 和 `Research` nav link（L62–L71）手動重複 class 字串，未使用 `getLinkClasses()` 復用。**

**[4] 無 Mobile hamburger menu，`hidden md:flex` 後無替代方案，行動版導覽完全消失。**

**建議抽離：**
```typescript
// src/hooks/useTheme.ts
export function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return { isDark, toggleDarkMode: () => setIsDark(prev => !prev) };
}
```

---

### 5. `components/Footer.tsx` — 硬編碼資料與無障礙問題

**問題：**
- L40: 版權年份硬編碼為 `2024`，品牌名稱硬編碼為 `TechBlog Engineering`（應為 `Farmerland`）。
- Newsletter `<input>`（L30–L33）無 `name`、`id`、`aria-label` 屬性，不符合無障礙規範。
- Connect 社群連結（Twitter/GitHub/LinkedIn）全為 `href="#"`。

**修正建議：**
```tsx
// ❌ 現行
<span>© 2024 TechBlog Engineering. All rights reserved.</span>

// ✅ 符合規範
<span>© {new Date().getFullYear()} Farmerland. All rights reserved.</span>

// Newsletter input 補全無障礙屬性
<input
  id="newsletter-email"
  name="email"
  aria-label="Newsletter email subscription"
  type="email"
  ...
/>
```

---

### 6. `pages/home/index.tsx` — Featured Cards 重複且資料硬編碼

**(196 行，位於評估區間 200–300 行，無強制拆分義務但建議優化)**

**問題：**
- 3 張 Featured Post Card（L23–L139）完全重複相同 JSX 結構（每張 ~39 行）。
- 文章 slug（`/articles/scaling-microservices` 等）為假資料，與 Velite 實際文章不符。
- Latest Research 區塊（L143–L191）為純靜態假資料，Download 按鈕無 `href`。

**動態 Featured Posts 建議：**
```typescript
import { posts } from "@/../.velite";

const featuredPosts = posts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);
```

---

### 7. `pages/articles/index.tsx` — 三層 import 路徑與 `cn()` 未使用

**(238 行，位於評估區間，未強制拆分)**

**[1] 三層相對路徑（L2）：**
```typescript
// ❌ 現行
import { posts } from "../../../.velite";
// ✅ 符合規範
import { posts } from "@/../.velite";
```

**[2] 動態 class 字串拼接（L178–L182、L205–L209）未使用 `cn()`：**
```typescript
// ❌ 現行
className={`transition-colors ${selectedCategory === category ? "font-bold text-accent" : "text-primary/70"}`}

// ✅ 符合規範
className={cn('transition-colors', selectedCategory === category ? 'font-bold text-accent' : 'text-primary/70')}
```

**[3] Pagination 區塊（L152–L160）純靜態 UI，無任何分頁邏輯。**

**[4] 搜尋框 `<label>` 包住整個容器但無 `for` 屬性，語義不正確。**

---

### 8. `pages/home/HeroSection.tsx` — Comment 掉的功能與外部圖片

**問題：**
- L34–L38：`Read Resume` 連結被 comment 掉，未清除也未留下 TODO 說明意圖。
- L12：`src` 使用外部 Google 圖片 URL（`lh3.googleusercontent.com`），外部依賴穩定性風險。

---

### 9. `pages/about/index.tsx` — CTA 按鈕無功能

**問題：**
- `Download Resume` 按鈕（L26）：`<button>` 無 `href`，點擊無行為。
- `Get In Touch`（L179）、`View Portfolio`（L182）按鈕：無路由跳轉（應改為 `<Link to="...">`）。
- 技能進度條（L130–L165）為純靜態 `style={{ width: "95%" }}`，無 CSS 動畫或進場效果。

---

## 🟢 低優先問題

### 10. `store/useArticleStore.ts` — 符合規範

- 結構正確，`interface` 定義完整，命名符合 `use<Domain>Store.ts` 規範。
- 唯一已知行為：篩選狀態在頁面切換後**不會重置**（Zustand in-memory 預設），已記錄為技術債。

---

## 規範違反統計（依規範條目分類）

| 規範條目 | 違反元件 | 嚴重程度 |
|----------|---------|---------|
| **GEMINI.md Do：實作 `useLogger`** | `hooks/useLogger.ts`（空實作） | 🔴 緊急 |
| **300 行以上須拆分** | `portfolio/index.tsx`（331行） | 🔴 緊急 |
| **禁止超過兩層相對路徑** | `articles/index.tsx`（L2）、`article-detail/index.tsx`（L3） | 🔴 高 |
| **動態 class 須用 `cn()`** | `Header.tsx`（L36, L38）、`articles/index.tsx`（L178, L205） | 🟡 中 |
| **邏輯與 UI 分離** | `Header.tsx`（Dark Mode useState/useEffect） | 🟡 中 |
| **同段 JSX 出現兩次以上須抽元件** | `portfolio/index.tsx`（6×Card）、`home/index.tsx`（3×Card） | 🟡 中 |
| **不 hardcode 路徑或設定值** | `home/index.tsx`（假 slug）、`footer.tsx`（年份、品牌名）| 🟡 中 |
| **Comment 掉的死碼應清除** | `HeroSection.tsx`（Read Resume 連結） | 🟢 低 |

---

## 與前次報告（v1）的差異對照

| 元件 | 前次等級 | 本次等級 | 差異原因 |
|------|---------|---------|---------|
| `articles/index.tsx` | 🔴 高 | 🟡 中 | 拆分閾值從 200→300，238 行重分類 |
| `home/index.tsx` | 🔴 高 | 🟡 中 | 同上，196 行未超過新閾值 |
| `hooks/useLogger.ts` | 未列入 | 🔴 緊急 | 新增審查對象，空實作違反 GEMINI.md |

---

## 建議執行順序

```
優先級 1（安全性 & 架構問題）
  [ ] hooks/useLogger.ts       → 實作完整的 useLogger Hook
  [ ] portfolio/index.tsx      → 拆分 ProjectCard + ProjectFilter + usePortfolioFilter

優先級 2（功能缺失）
  [ ] article-detail/index.tsx → 實作 TOC 動態解析（DOMParser 方案）
  [ ] Header.tsx               → 抽離 useTheme hook，補上 Mobile Menu

優先級 3（規範修正）
  [ ] Header.tsx               → getLinkClasses 改用 cn()
  [ ] articles/index.tsx       → 修正 .velite import 路徑
  [ ] article-detail/index.tsx → 修正 .velite import 路徑
  [ ] articles/index.tsx       → 動態 class 改用 cn()
  [ ] footer.tsx               → 修正年份、品牌名、補無障礙屬性
  [ ] home/index.tsx           → Featured Posts 改從 Velite 動態取得

優先級 4（UX 補齊）
  [ ] about/index.tsx          → CTA 按鈕補功能
  [ ] HeroSection.tsx          → 清除 comment 程式碼或建立 TODO
```
