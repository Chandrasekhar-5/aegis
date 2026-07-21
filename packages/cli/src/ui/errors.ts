import chalk from "chalk";

export function printError(
  error: unknown,
): void {
  if (error instanceof Error) {
    console.error(
      chalk.red("✖"),
      error.message,
    );
    return;
  }

  console.error(chalk.red("Unknown error"));
}