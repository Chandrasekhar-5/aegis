import { existsSync, readFileSync } from "node:fs";

export function fileExists(path: string): boolean {
  return existsSync(path);
}

export function readFileIfExists(path: string): string | null {
  return existsSync(path)
    ? readFileSync(path, "utf8")
    : null;
}