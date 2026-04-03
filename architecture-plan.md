這裡會列出計畫新增的功能與機制

## 已完成

- [x] 使用zod驗證 @.env檔案的schema後匯出, import.meta.env.xxx同一在暴露在此文件.

- [x] 增加一個useTheme功能, 抽出dark light功能, 純邏輯變更root class="dark", 配合tailwindcss v4設定的@custom-variant變換樣式, 將選擇的樣式持久化儲存在localstorage.

- [x] 增加一個useFetch功能, 處理api相關呼叫, 具備request/response攔截器(處理404,500等錯誤)。註:nuxtjs專案中不需要此hook。

## 待處理
