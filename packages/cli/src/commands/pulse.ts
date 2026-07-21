import { Command } from "commander";

import { Engine } from "@aegis/engine";
import runtime from "@aegis/runtime";

export function registerPulseCommand(
  program: Command,
): void {
  program
    .command("pulse")
    .description("Run project diagnostics")
    .action(async () => {
      const engine = new Engine();

      engine.use(runtime);

      const report = await engine.pulse();

      console.log(report);
    });
}