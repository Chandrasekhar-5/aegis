import { createDiagnostic } from "@aegis/sdk";
import { commandExists, getCommandVersion } from "@aegis/utils";

import { metadata } from "../metadata";

export default createDiagnostic({
  metadata: metadata.node,

  async run() {
    const started = performance.now();

    if (!(await commandExists("pnpm"))) {
      return {
        success: false,
        message: "pnpm is not installed.",
        metadata: metadata.node,
        suggestion: "Install pnpm 10.34.5.",
        duration: performance.now() - started,
      };
    }

    const version = await getCommandVersion("pnpm");

    return {
      success: true,
      message: `pnpm ${version}`,
      metadata: metadata.node,
      duration: performance.now() - started,
    };
  },
});