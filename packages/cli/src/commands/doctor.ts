import { Command } from "commander";

import { Engine } from "@aegis/engine";
import runtime from "@aegis/runtime";
import { printError } from "../ui";

import { formatDoctorReport } from "../formatters";

export function registerDoctorCommand(
  program: Command,
): void {
  program
    .command("doctor")
    .description("Run environment diagnostics")
    .option("--json", "Output report as JSON")
    .action(async (options: { json?: boolean }) => {
      try {
        const engine = new Engine();

        engine.use(runtime);

        const report = await engine.doctor();

        if (options.json) {
          console.log(
            JSON.stringify(report, null, 2),
          );
          return;
        }

        formatDoctorReport(report);
      } catch (error) {
        printError(error);
        process.exit(1);
      }
    });
}