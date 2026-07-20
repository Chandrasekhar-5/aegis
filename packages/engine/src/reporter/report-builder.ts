import type { CheckResult } from "@aegis/types";

export interface ReportSummary {
  total: number;
  passed: number;
  failed: number;
}

export interface DoctorReport {
  generatedAt: Date;
  duration: number;
  results: CheckResult[];
  summary: ReportSummary;
}

export class ReportBuilder {
  build(results: CheckResult[], duration: number): DoctorReport {
    const passed = results.filter((r) => r.success).length;
    const failed = results.length - passed;

    return {
      generatedAt: new Date(),
      duration,
      results,
      summary: {
        total: results.length,
        passed,
        failed,
      },
    };
  }
}