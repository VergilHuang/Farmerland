import { env } from "@/lib/env";

// src/hooks/useLogger.ts
const isDev = env.DEV;

type LogLevel = "log" | "warn" | "error" | "info" | "debug";

function createLogger(level: LogLevel) {
  return (...args: unknown[]) => {
    if (isDev) {
      console[level](...args);
    }
  };
}
export function useLogger(prefix?: string) {
  const format = (args: unknown[]) => (prefix ? [`[${prefix}]`, ...args] : args);
  return {
    log: (...args: unknown[]) => createLogger("log")(...format(args)),
    warn: (...args: unknown[]) => createLogger("warn")(...format(args)),
    error: (...args: unknown[]) => createLogger("error")(...format(args)),
    info: (...args: unknown[]) => createLogger("info")(...format(args)),
    debug: (...args: unknown[]) => createLogger("debug")(...format(args)),
  };
}
