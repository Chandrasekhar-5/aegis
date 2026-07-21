import { createDiagnostic } from "@aegis/sdk";
import { commandExists, getCommandVersion } from "@aegis/utils";

import { metadata } from "../metadata";

export default createDiagnostic({
  metadata: metadata.node,

  async run() {
    const started = performance.now();

    if (!(await commandExists("git"))) {
      return {
        success: false,
        message: "Git is not installed.",
        metadata: metadata.node,
        suggestion: "Install Git 2.55.0.",
        duration: performance.now() - started,
      };
    }

    const version = await getCommandVersion("git");

    return {
      success: true,
      message: `Git ${version}`,
      metadata: metadata.node,
      duration: performance.now() - started,
    };
  },
});