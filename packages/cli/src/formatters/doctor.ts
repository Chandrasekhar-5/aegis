import type { Report, Severity } from "@aegis/types";

import { colors, symbols } from "../ui";
import { printSummary } from "./summary";

export function formatDoctorReport(
  report: Report,
): void {
  console.log();

  console.log(
    colors.title("🛡 Aegis Doctor"),
  );

  console.log();

  for (const result of report.results) {
    let icon = symbols.info;

    switch (result.metadata.severity) {
      case Severity.Success:
        icon = symbols.success;
        break;

      case Severity.Warning:
        icon = symbols.warning;
        break;

      case Severity.Error:
        icon = symbols.error;
        break;
    }

    console.log(
      `${icon} ${result.metadata.name}  ${result.message}`,
    );
  }

  printSummary(report.summary);

  console.log();
}