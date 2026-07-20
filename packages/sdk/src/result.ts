import type { CheckMetadata, CheckResult } from "@aegis/types";

export function createResult(
  success: boolean,
  message: string,
  metadata: CheckMetadata,
  options?: {
    details?: string;
    suggestion?: string;
    duration?: number;
  },
): CheckResult {
  return {
    success,
    message,
    metadata,
    ...(options?.details !== undefined && {
      details: options.details,
    }),
    ...(options?.suggestion !== undefined && {
      suggestion: options.suggestion,
    }),
    duration: options?.duration ?? 0,
  };
}