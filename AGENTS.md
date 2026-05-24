<!-- BEGIN:git-workflow-rules -->
# Git Workflow Instructions

This repository uses a strict branching strategy.

1. **`main`**: The stable production release branch.
2. **`development`**: The active development branch.

**ALL** new features, bug fixes, and other code changes must be:
- Branched off of the `development` branch.
- Merged back into the `development` branch via Pull Request.

Do **not** branch directly from `main` or open Pull Requests targeting `main` unless you are releasing a new production version from `development`.
<!-- END:git-workflow-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
