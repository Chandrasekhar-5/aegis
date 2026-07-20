import type { Plugin } from "@aegis/types";

export class PluginLoader {
  constructor(
    private readonly plugins: Plugin[] = [],
  ) {}

  register(plugin: Plugin): void {
    this.plugins.push(plugin);
  }

  getPlugins(): Plugin[] {
    return [...this.plugins];
  }

  clear(): void {
    this.plugins.length = 0;
  }
}