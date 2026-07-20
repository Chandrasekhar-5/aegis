import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

export function findFileUpwards(
  filename: string,
  startDir: string
): string | null {
  let current = startDir;

  while (true) {
    const candidate = join(current, filename);

    if (existsSync(candidate)) {
      return candidate;
    }

    const parent = dirname(current);

    if (parent === current) {
      return null;
    }

    current = parent;
  }
}