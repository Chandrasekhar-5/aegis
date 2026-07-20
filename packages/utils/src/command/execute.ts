import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export interface ExecuteResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

export async function execute(
  command: string,
): Promise<ExecuteResult> {
  try {
    const { stdout, stderr } = await execAsync(command);

    return {
      stdout: stdout.trim(),
      stderr: stderr.trim(),
      exitCode: 0,
    };
  } catch (error: any) {
    return {
      stdout: error.stdout?.trim() ?? "",
      stderr: error.stderr?.trim() ?? error.message,
      exitCode: error.code ?? 1,
    };
  }
}