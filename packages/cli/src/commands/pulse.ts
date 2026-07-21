import type { Command } from "commander";

export function registerPulseCommand(
  program: Command,
): void {
  program
    .command("pulse")
    .description("Run repository diagnostics")
    .action(() => {
      console.log(
        "Pulse command is not implemented yet.",
      );
    });
}