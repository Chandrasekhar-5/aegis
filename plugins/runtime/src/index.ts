import { createPlugin } from "@aegis/sdk";

import node from "./diagnostics/node";
import git from "./diagnostics/git";
import npm from "./diagnostics/npm";
import pnpm from "./diagnostics/pnpm";

export default createPlugin({
  manifest: {
    apiVersion: 1,
    name: "@aegis/runtime",
    version: "0.1.0",
    description: "Runtime diagnostics",
    author: {
      name: "Aegis",
    },
    checks: [
      node.metadata,
      git.metadata,
      npm.metadata,
      pnpm.metadata,
    ],
  },

  diagnostics: [
    node,
    git,
    npm,
    pnpm,
  ],
});