import { Command } from "commander";

import { Engine } from "@aegis/engine";
import runtime from "@aegis/runtime";

export function registerDoctorCommand(
  program: Command,
): void {
  program
    .command("doctor")
    .description("Run environment diagnostics")
    .action(async () => {
      const engine = new Engine();

      engine.use(runtime);

      const report = await engine.doctor();

      console.log(report);
    });
}