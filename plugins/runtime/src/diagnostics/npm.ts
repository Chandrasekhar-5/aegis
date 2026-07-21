import { createDiagnostic } from "@aegis/sdk";
import { commandExists, getCommandVersion } from "@aegis/utils";

import { metadata } from "../metadata";

export default createDiagnostic({
  metadata: metadata.node,

  async run() {
    const started = performance.now();

    if (!(await commandExists("npm"))) {
      return {
        success: false,
        message: "npm is not installed.",
        metadata: metadata.node,
        suggestion: "Install npm 11.16.0.",
        duration: performance.now() - started,
      };
    }

    const version = await getCommandVersion("npm");

    return {
      success: true,
      message: `npm ${version}`,
      metadata: metadata.node,
      duration: performance.now() - started,
    };
  },
});