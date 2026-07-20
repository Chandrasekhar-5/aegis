import {
  Severity,
  type CheckMetadata,
  type CheckResult,
} from "@aegis/types";

interface ResultOptions {
  metadata: CheckMetadata;
  details?: string;
  suggestion?: string;
  duration?: number;
}

export function createResult(
  success: boolean,
  message: string,
  options: ResultOptions
): CheckResult {
  return {
    success,
    message,
    metadata: options.metadata,
    details: options.details,
    suggestion: options.suggestion,
    duration: options.duration ?? 0,
  };
}

export function success(
  message: string,
  metadata: CheckMetadata,
  options: Omit<ResultOptions, "metadata"> = {}
): CheckResult {
  return createResult(true, message, {
    metadata: {
      ...metadata,
      severity: Severity.Success,
    },
    ...options,
  });
}

export function warning(
  message: string,
  metadata: CheckMetadata,
  options: Omit<ResultOptions, "metadata"> = {}
): CheckResult {
  return createResult(false, message, {
    metadata: {
      ...metadata,
      severity: Severity.Warning,
    },
    ...options,
  });
}

export function error(
  message: string,
  metadata: CheckMetadata,
  options: Omit<ResultOptions, "metadata"> = {}
): CheckResult {
  return createResult(false, message, {
    metadata: {
      ...metadata,
      severity: Severity.Error,
    },
    ...options,
  });
}