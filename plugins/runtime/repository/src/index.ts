import { createPlugin } from "@aegis/sdk";

import { manifest } from "./metadata";

import gitRepository from "./diagnostics/git-repository";
import gitUser from "./diagnostics/git-user";
import gitRemote from "./diagnostics/git-remote";
import gitignore from "./diagnostics/gitignore";
import dirtyWorkingTree from "./diagnostics/dirty-working-tree";
import defaultBranch from "./diagnostics/default-branch";
import shallowClone from "./diagnostics/shallow-clone";
import largeFiles from "./diagnostics/large-files";

export default createPlugin({
  manifest: {
    ...manifest,
    checks: [
      gitRepository.metadata,
      gitUser.metadata,
      gitRemote.metadata,
      gitignore.metadata,
      dirtyWorkingTree.metadata,
      defaultBranch.metadata,
      shallowClone.metadata,
      largeFiles.metadata,
    ],
  },

  diagnostics: [
    gitRepository,
    gitUser,
    gitRemote,
    gitignore,
    dirtyWorkingTree,
    defaultBranch,
    shallowClone,
    largeFiles,
  ],
});