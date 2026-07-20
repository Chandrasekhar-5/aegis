import type { Plugin } from "./plugin";

export interface DoctorOptions {
  filters?: string[];
  json?: boolean;
}

export interface PulseOptions {
  json?: boolean;
}

export interface PluginLoader {
  loadPlugins(): Promise<Plugin[]>;
  loadPlugin(pluginPath: string): Promise<Plugin>;
}