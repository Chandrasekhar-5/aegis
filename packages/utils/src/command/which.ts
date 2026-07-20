import { execute } from "./execute";

export async function which(
  command: string,
): Promise<string | null> {
  const resolver =
    process.platform === "win32" ? "where" : "which";

  const result = await execute(
    `${resolver} ${command}`,
  );

  if (result.exitCode !== 0) {
    return null;
  }

  return result.stdout.split("\n")[0] ?? null;
}