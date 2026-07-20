export interface ExecutionContext {
  cwd: string;
  platform: NodeJS.Platform;
  env: NodeJS.ProcessEnv;
}