import { execute } from "./execute";

export async function getCommandVersion(
  command: string,
): Promise<string | null> {
  const result = await execute(
    `${command} --version`,
  );

  if (result.exitCode !== 0) {
    return null;
  }

  return result.stdout
    .split("\n")[0]
    ?.trim() ?? null;
}