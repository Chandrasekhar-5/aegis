import { Command } from "commander";

import { Engine } from "@aegis/engine";
import runtime from "@aegis/runtime";
import { printError } from "../ui";

import { formatPulseReport } from "../formatters";

export function registerPulseCommand(
  program: Command,
): void {
  program
    .command("pulse")
    .description("Run project diagnostics")
    .option("--json", "Output report as JSON")
    .action(async (options: { json?: boolean }) => {
      try {
        const engine = new Engine();

        engine.use(runtime);

        const report = await engine.pulse();

        if (options.json) {
          console.log(
            JSON.stringify(report, null, 2),
          );
          return;
        }

        formatPulseReport(report);
      } catch (error) {
        printError(error);
        process.exit(1);
      }
    });
}