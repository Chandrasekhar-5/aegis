import type {
  CheckResult,
  Diagnostic,
} from "@aegis/types";

import type { ExecutionContext } from "../context";

export class DiagnosticRunner {
  async run(
    diagnostics: Diagnostic[],
    context: ExecutionContext,
  ): Promise<CheckResult[]> {
    const results: CheckResult[] = [];

    for (const diagnostic of diagnostics) {
      const started = performance.now();

      const result = await diagnostic.run(context);

      result.duration = performance.now() - started;

      results.push(result);
    }

    return results;
  }
}