import type { ReportSummary } from "@aegis/types";

import { colors } from "../ui";

export function printSummary(
  summary: ReportSummary,
): void {
  console.log();

  console.log(colors.heading("Summary"));

  console.log(
    `Passed   : ${summary.passed}`,
  );

  console.log(
    `Warnings : ${summary.warnings}`,
  );

  console.log(
    `Errors   : ${summary.errors}`,
  );

  console.log(
    `Total    : ${summary.total}`,
  );
}