import type { CheckContext } from "@aegis/types";

export interface ExecutionContext extends CheckContext {
  nodeVersion: string;
  timestamp: Date;
}