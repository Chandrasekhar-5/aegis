import type { Plugin } from "@aegis/types";

import { ContextBuilder } from "./context";
import { PluginLoader } from "./loader";
import { ReportBuilder, type DoctorReport } from "./reporter";
import { DiagnosticRunner } from "./runner";

export class Engine {
  private readonly loader = new PluginLoader();

  private readonly runner = new DiagnosticRunner();

  private readonly reporter = new ReportBuilder();

  private readonly contextBuilder = new ContextBuilder();

  use(plugin: Plugin): this {
    this.loader.register(plugin);
    return this;
  }

  async doctor(): Promise<DoctorReport> {
    const started = performance.now();

    const context = this.contextBuilder.build();

    const plugins = this.loader.getPlugins();

    const diagnostics = plugins.flatMap(
      (plugin) => plugin.diagnostics,
    );

    const results = await this.runner.run(
      diagnostics,
      context,
    );

    return this.reporter.build(
      results,
      performance.now() - started,
    );
  }

  async pulse(): Promise<DoctorReport> {
    return this.doctor();
  }
}