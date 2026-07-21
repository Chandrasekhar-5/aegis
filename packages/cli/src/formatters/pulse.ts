import type { Report } from "@aegis/types";

import { formatDoctorReport } from "./doctor";

export function formatPulseReport(
  report: Report,
): void {
  formatDoctorReport(report);
}