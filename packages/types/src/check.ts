export enum Severity {
  Info = "info",
  Warning = "warning",
  Error = "error",
  Success = "success",
}

export enum CheckCategory {
  Runtime = "runtime",
  Repository = "repository",
  Database = "database",
  Framework = "framework",
}

export interface CheckMetadata {
  id: string;
  name: string;
  description: string;
  category: CheckCategory;
  severity: Severity;
  platforms?: string[];
  dependencies?: string[];
}

export interface CheckContext {
  cwd: string;
  platform: NodeJS.Platform;
  env: NodeJS.ProcessEnv;
}

export interface CheckResult {
  success: boolean;
  message: string;
  metadata: CheckMetadata;

  details?: string;
  suggestion?: string;

  duration: number;
}

export interface Diagnostic {
  metadata: CheckMetadata;

  run(
    context: CheckContext,
  ): Promise<CheckResult>;
}