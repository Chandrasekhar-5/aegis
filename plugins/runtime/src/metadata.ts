import {
  CheckCategory,
  Severity,
  type CheckMetadata,
} from "@aegis/types";

export const metadata = {
  node: {
    id: "runtime.node",
    name: "Node.js",
    description: "Checks if Node.js is installed.",
    category: CheckCategory.Runtime,
    severity: Severity.Error,
  } satisfies CheckMetadata,

  git: {
    id: "runtime.git",
    name: "Git",
    description: "Checks if Git is installed.",
    category: CheckCategory.Runtime,
    severity: Severity.Error,
  } satisfies CheckMetadata,

  npm: {
    id: "runtime.npm",
    name: "npm",
    description: "Checks if npm is installed.",
    category: CheckCategory.Runtime,
    severity: Severity.Warning,
  } satisfies CheckMetadata,

  pnpm: {
    id: "runtime.pnpm",
    name: "pnpm",
    description: "Checks if pnpm is installed.",
    category: CheckCategory.Runtime,
    severity: Severity.Warning,
  } satisfies CheckMetadata,
};