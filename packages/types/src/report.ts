import type { CheckResult } from "./check";

export interface ReportSummary {
  total: number;
  passed: number;
  warnings: number;
  errors: number;
}

export interface Report {
  generatedAt: Date;
  results: CheckResult[];
  summary: ReportSummary;
}

export interface PulseReport extends Report {
  score: number;
  recommendations: string[];
}