import type { Command } from "commander";

export function registerDoctorCommand(
  program: Command,
): void {
  program
    .command("doctor")
    .description("Run environment diagnostics")
    .action(() => {
      console.log(
        "Doctor command is not implemented yet.",
      );
    });
}