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
   - 200 > 300 行：評估是否有拆分空間
   - **300 行以上：強烈建議拆分**
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
