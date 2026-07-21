import type {
  CheckResult,
  Report,
  ReportSummary,
} from "@aegis/types";

export class ReportBuilder {
  build(results: CheckResult[], duration: number): Report {
    const passed = results.filter((r) => r.success).length;

const warnings = results.filter(
  (r) => !r.success && r.metadata.severity === "warning",
).length;

const errors = results.filter(
  (r) => !r.success && r.metadata.severity === "error",
).length;

    return {
      generatedAt: new Date(),
      duration,
      results,
      summary: {
        total: results.length,
        passed,
        warnings,
        errors,
      },
    };
  }
}