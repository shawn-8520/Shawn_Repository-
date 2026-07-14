# AI-Terminal-KB Project Definition

## Product Definition

AI-Terminal-KB is a terminal-style personal AI knowledge base with a Home launch flow that enters an OS-like virtual desktop.

The Home secondary page must behave like a desktop, not a normal long web page:

- Press Enter / click Launch enters the OS desktop.
- Desktop files can be selected, dragged, opened, created, edited, deleted, and searched.
- Desktop state should persist in browser local storage when available.
- Knowledge content remains Markdown-first under `content/`.

## Required Validation Rule

This validation rule applies only to this AI-Terminal-KB knowledge base project.

Every newly added or changed feature in this project must be tested before reporting completion.

Only test the behavior touched by the current change. Do not run a full-project regression test unless:

- The current change affects shared navigation, storage, rendering, or layout foundations.
- The user explicitly asks for a full test.
- A focused test reveals a broader breakage that needs confirmation.

For each change, the response must include:

- What was changed.
- Which newly added or changed user-facing behavior was tested.
- Whether each tested behavior passed or failed.
- Any known limitation that remains.

Any temporary files, desktop files, or test records created during validation must be deleted before reporting completion, unless the user explicitly asks to keep them.

Do not report a feature as complete from code inspection only.
