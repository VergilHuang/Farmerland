import { z } from "zod";

/**
 * 環境變數 Schema 定義
 *
 * 規則：
 * - Vite 只會將 `VITE_` 前綴的變數暴露給客戶端
 * - 使用 z.string().min(1) 確保必填欄位不為空字串
 * - 使用 .optional() 標記選填欄位
 * - 加入 .env.example 維護新增的每個欄位
 */
const envSchema = z.object({
  /** 執行環境，由 Vite 自動注入 */
  MODE: z.enum(["development", "production", "test"]),

  /** 是否為開發模式，由 Vite 自動注入 */
  DEV: z.boolean(),

  /** 是否為正式模式，由 Vite 自動注入 */
  PROD: z.boolean(),

  // ── 以下為自訂環境變數，需在 .env 及 .env.example 中對應宣告 ──

  /** 網站基礎 URL（選填，預設為根路徑） */
  VITE_SITE_URL: z.string().url().optional(),
});

/**
 * 解析並驗證 import.meta.env
 * 若驗證失敗，會在啟動時拋出錯誤訊息，方便快速排查設定問題。
 */
const parsed = envSchema.safeParse({
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
});

if (!parsed.success) {
  console.error("❌ 環境變數驗證失敗，請確認 .env 設定：");
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error("環境變數設定有誤，應用程式無法啟動。");
}

/** 已驗證、型別安全的環境變數物件 */
export const env = parsed.data;

/** 從 env.MODE 推導出的布林值，供需要此語意的地方使用 */
export const isDev = env.DEV;
export const isProd = env.PROD;
