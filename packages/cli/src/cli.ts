#!/usr/bin/env node

import { Command } from "commander";

import {
  registerDoctorCommand,
  registerPulseCommand,
} from "./commands";

const program = new Command();

program
  .name("aegis")
  .description("Developer Health Platform")
  .version("0.1.0");

registerDoctorCommand(program);
registerPulseCommand(program);

program.parse();