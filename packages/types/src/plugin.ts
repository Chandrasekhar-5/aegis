import type { CheckMetadata, DiagnosticCheck } from "./check";

export interface PluginAuthor {
  name: string;
  email?: string;
  url?: string;
}

export interface PluginManifest {
  apiVersion: number;
  name: string;
  version: string;
  description: string;
  author: PluginAuthor;
  checks: CheckMetadata[];
}

export interface Plugin {
  manifest: PluginManifest;
  diagnostics: DiagnosticCheck[];
}