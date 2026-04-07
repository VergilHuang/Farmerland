# 禁止難以閱讀與維護的代碼規範 (Human-Readability & Maintainability Convention)

> 本文件整理了各種「難以閱讀與維護」的代碼反模式（Anti-Patterns），並以本專案的角度說明**為何禁止**以及**正確做法**。  
> **核心定義：禁止任何刻意提高閱讀門檻、隱藏意圖、製造混淆的代碼。**
> 請每位開發者（及 AI 代理人）在開發與 Code Review 時將此文件作為首要檢查清單。

---

## 總覽

本規範旨在消除開發中的「壞習慣」。這些習慣通常被稱為「忍者代碼」，意指那些讓代碼看起來聰明、卻極難維護、人類難以閱覽的邏輯。  
以下逐條列出禁止項目，並附上正確替代方案。

---

## ❌ Rule 1：禁止為了「簡短」而犧牲可讀性

**Prevent**：將複雜邏輯壓縮成一行，炫耀對語言特性的熟悉度。

```js
// ❌ 難以閱讀的寫法 — 無法快速理解 i 的含義
i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
```

```js
// ✅ 正確寫法 — 分步驟，清晰可讀
if (i < 0) {
  i = Math.max(0, len + i);
} else if (!i) {
  i = 0;
}
```

**規則**：可讀性優先於簡短性。每個運算式應能被團隊成員在 5 秒內理解。

---

## ❌ Rule 2：禁止使用單字母變數名稱（迴圈計數器除外）

**Prevent**：到處使用 `a`、`b`、`c`、`x`、`y` 作為變數名稱，尤其是在長迴圈或函式中。

```ts
// ❌ 難以閱讀的寫法
const a = fetchUser();
const b = a.permissions;
```

```ts
// ✅ 正確寫法
const user = fetchUser();
const permissions = user.permissions;
```

**例外**：標準迴圈計數器 `i`、`j`、`k` 在短小的 `for` 迴圈中可接受，但若迴圈體超過 5 行，應改用語意化名稱（如 `index`、`pageIndex`）。

---

## ❌ Rule 3：禁止使用無意義縮寫

**Prevent**：將變數名稱縮短為只有作者懂的縮寫。

```ts
// ❌ 難以閱讀的寫法
const lst = getUsers();
const ua = navigator.userAgent;
const brsr = getBrowserInfo();
```

```ts
// ✅ 正確寫法
const userList = getUsers();
const userAgent = navigator.userAgent;
const browserInfo = getBrowserInfo();
```

**例外**：標準array的方法中例如 `UserList.map((user, idx)=> {})`, `idx` 為一般常用的名稱,所以可接受.

**規則**：變數名稱必須讓任何團隊成員（包含未來的自己）無需額外查詢就能理解其含義。

---

## ❌ Rule 4：禁止使用過於抽象的名稱

**Prevent**：使用 `data`、`value`、`item`、`obj`、`elem`、`str`、`num` 等無語意的通用名稱。

```ts
// ❌ 難以閱讀的寫法
const data = await fetch('/api/users');
const value = data.json();
const item = value[0];
```

```ts
// ✅ 正確寫法
const response = await fetch('/api/users');
const users = await response.json();
const firstUser = users[0];
```

**規則**：名稱應描述「**這個變數代表什麼**」，而不只是「它的型別或資料形態」。`data1`、`item2`、`elem5` 等加數字的命名方式同樣禁止。

---

## ❌ Rule 5：禁止使用過於相似的變數名稱製造混淆

**Prevent**：在同一作用域中使用僅差一個字母或高度相似的名稱，讓讀者難以分辨。

```ts
// ❌ 難以閱讀的寫法
const date = new Date();
const data = await fetchData();
// 接下來的 100 行中混用 date 和 data...
```

```ts
// ✅ 正確寫法
const currentDate = new Date();
const apiResponse = await fetchData();
```

**規則**：若兩個變數名稱差異極小（如 `date` / `data`），必須選擇更具區分度的命名。

---

## ❌ Rule 6：禁止對同一類行為使用不同前綴（或對不同行為使用相同前綴）

**Prevent**：相同類型的函式用不同前綴（`displayMessage` / `showName` / `renderTitle` / `paintHeader`），或不同類型的函式用相同前綴。

```ts
// ❌ 難以閱讀的寫法 — 相同功能，不同前綴
function displayMessage(msg: string) { ... }
function showName(name: string) { ... }
function renderTitle(title: string) { ... }

// ❌ 更糟的寫法 — 相同前綴，完全不同的行為
function printPage(page: Page) { /* 送到印表機 */ }
function printText(text: string) { /* 顯示在畫面 */ }
function printMessage(msg: string) { /* 開新視窗！ */ }
```

```ts
// ✅ 正確寫法 — 統一前綴約定
// 顯示在畫面 → render*
function renderMessage(msg: string) { ... }
function renderUserName(name: string) { ... }
function renderPageTitle(title: string) { ... }
```

**規則**：若在 `GEMINI.md` 或 `coding-conventions.md` 中有明訂函式前綴約定，全專案就必須一致遵守。

---

## ❌ Rule 7：禁止重複使用同一個變數名稱存放不同意義的值

**Prevent**：在函式中對同一個參數或變數重複賦值，使其在函式的不同階段代表不同的東西。

```ts
// ❌ 難以閱讀的寫法
function processElement(elem: Element) {
  // 前 20 行用 elem 操作原始元素
  elem = elem.cloneNode(true) as Element; // 突然變成 clone！
  // 後 20 行以為還在操作原始元素，其實是 clone
}
```

```ts
// ✅ 正確寫法
function processElement(elem: Element) {
  // 前 20 行操作原始 elem
  const clonedElem = elem.cloneNode(true) as Element;
  // 後 20 行明確使用 clonedElem
}
```

**規則**：一個變數在其整個生命週期中應只代表一個語意。需要不同值時，宣告新變數。

---

## ❌ Rule 8：禁止毫無規則地使用底線前綴

**Prevent**：隨意在變數前加 `_` 或 `__`，或在不同地方賦予不同意義。

```ts
// ❌ 難以閱讀的寫法 — 底線含義不明
const _name = 'Vergil';
let __value = 42;
const _id = generateId(); // 這個底線代表什麼？
```

```ts
// ✅ 正確寫法
// 底線前綴僅用於明確標示「私有」或「暫時棄用」的情形，
// 且需在 coding-conventions.md 中定義其含義。
const name = 'Vergil';
const value = 42;
const id = generateId();
```

**規則**：若專案有使用底線前綴的慣例（如 `_privateMethod`），必須在文件中明確定義，且全專案一致。不可隨意使用。

---

## ❌ Rule 9：禁止使用誇飾性修飾詞作為名稱

**Prevent**：用 `super`、`mega`、`nice`、`cool`、`ultimate` 等修飾詞修飾名稱，看似隆重卻毫無語意。

```ts
// ❌ 難以閱讀的寫法
const superElement = document.querySelector('.header');
const megaFrame = createFrame();
const niceItem = getTopResult();
```

```ts
// ✅ 正確寫法
const headerElement = document.querySelector('.header');
const modalFrame = createFrame();
const topResultItem = getTopResult();
```

**規則**：名稱應描述具體用途，而非表達作者的主觀感受。

---

## ❌ Rule 10：禁止在內層作用域遮蔽（Shadow）外層同名變數

**Prevent**：在函式或區塊內宣告與外層相同名稱的變數，使外層變數「被遮蔽」。

```ts
// ❌ 難以閱讀的寫法
const user = authenticateUser();

function render() {
  const user = getAnotherUser(); // 遮蔽了外層的 user！
  // ...100 行後...
  // 讀者以為 user 是 authenticateUser() 的結果，其實是 getAnotherUser()
}
```

```ts
// ✅ 正確寫法
const currentUser = authenticateUser();

function render() {
  const renderUser = getAnotherUser(); // 明確區分
}
```

**規則**：絕對禁止在函式或區塊內重新宣告與外層作用域相同名稱的變數。TypeScript `strict` 模式與良好的 lint 規則（`no-shadow`）可輔助偵測此問題。

---

## ❌ Rule 11：禁止在「查詢型」函式中夾帶隱性副作用

**Prevent**：命名為 `is*`、`check*`、`find*`、`get*` 的函式，內部卻偷偷修改狀態或觸發副作用。

```ts
// ❌ 難以閱讀的寫法
function isReady(): boolean {
  status = 'checking'; // 副作用！修改了外部狀態
  return internalCheck();
}

function checkPermission(): ComplexObject { // 回傳型別也出乎意料
  sendAnalyticsEvent(); // 更多隱性副作用！
  return { allowed: true, reason: '...' };
}
```

```ts
// ✅ 正確寫法
function isReady(): boolean {
  return internalCheck(); // 純查詢，無副作用
}

function checkPermission(): boolean {
  return hasRequiredRole(); // 回傳語意明確的布林值
}
```

**規則**：

- `is*` / `check*` / `find*` / `get*` 函式必須是**純函式**（pure function）或至少**無副作用**。
- 函式的回傳型別必須符合名稱所暗示的類型（`isX` → `boolean`，`findX` → `T | null`）。

---

## ❌ Rule 12：禁止函式承擔超出其名稱範圍的職責

**Prevent**：一個函式做多件不相關的事，讓函式無法被單獨重用。

```ts
// ❌ 難以閱讀的寫法
// validateEmail 除了驗證，還顯示錯誤、重置表單
function validateEmail(email: string): boolean {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    showErrorModal('Email 格式錯誤');  // 副作用：UI 操作
    resetForm();                        // 副作用：表單重置
  }
  return isValid;
}
```

```ts
// ✅ 正確寫法 — 單一職責
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 呼叫端自行決定驗證失敗後的行為
function handleSubmit(email: string) {
  if (!isValidEmail(email)) {
    showErrorModal('Email 格式錯誤');
    resetForm();
  }
}
```

**規則**：遵守**單一職責原則（SRP）**。若函式名稱只說明一件事，它就只應該做一件事。

---

## 快速檢查清單（Code Review Checklist）

在 Code Review 時，請逐項確認以下條件均為 ✅：

| #   | 規則                                                      | 確認 |
| --- | --------------------------------------------------------- | ---- |
| 1   | 沒有難以理解的一行式複雜表達式                            | ☐    |
| 2   | 沒有單字母變數（迴圈計數器除外）                          | ☐    |
| 3   | 沒有自創縮寫（如 `lst`、`ua`、`brsr`）                    | ☐    |
| 4   | 沒有過於抽象的名稱（如 `data`、`value`、`item`、`obj`）   | ☐    |
| 5   | 沒有高度相似、易混淆的變數名稱                            | ☐    |
| 6   | 函式前綴在全專案一致（如 `render*`、`handle*`、`fetch*`） | ☐    |
| 7   | 沒有對同一個變數重複賦予不同語意的值                      | ☐    |
| 8   | 沒有毫無規則地使用底線前綴                                | ☐    |
| 9   | 沒有無意義的誇飾修飾詞（如 `super`、`mega`、`nice`）      | ☐    |
| 10  | 沒有變數遮蔽（Variable Shadowing）                        | ☐    |
| 11  | `is*` / `check*` / `find*` 函式無隱性副作用               | ☐    |
| 12  | 函式職責單一，符合 SRP                                    | ☐    |

---

> 最後提醒：好的代碼不需要讀者去猜測意圖。**寫給未來維護者看的代碼，就是寫給自己看的代碼。**
