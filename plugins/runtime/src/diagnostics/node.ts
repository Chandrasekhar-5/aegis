import { createDiagnostic } from "@aegis/sdk";
import { commandExists, getCommandVersion } from "@aegis/utils";

import { metadata } from "../metadata";

export default createDiagnostic({
  metadata: metadata.node,

  async run() {
    const started = performance.now();

    if (!(await commandExists("node"))) {
      return {
        success: false,
        message: "Node.js is not installed.",
        metadata: metadata.node,
        suggestion: "Install Node.js 20 LTS or newer.",
        duration: performance.now() - started,
      };
    }

    const version = await getCommandVersion("node");

    return {
      success: true,
      message: `Node.js ${version}`,
      metadata: metadata.node,
      duration: performance.now() - started,
    };
  },
});