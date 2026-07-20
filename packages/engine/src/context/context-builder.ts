import type { ExecutionContext } from "./execution-context";

export class ContextBuilder {
  build(): ExecutionContext {
    return {
      cwd: process.cwd(),
      platform: process.platform,
      env: process.env,
      nodeVersion: process.version,
      timestamp: new Date(),
    };
  }
}