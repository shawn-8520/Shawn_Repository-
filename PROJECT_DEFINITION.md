# Clink AI Project Definition

## Product Definition

Clink AI is a terminal-style personal AI knowledge base with a Home launch flow that enters an OS-like virtual desktop.

The Home secondary page must behave like a desktop, not a normal long web page:

- Press Enter / click Launch enters the OS desktop.
- Desktop files can be selected, dragged, opened, created, edited, deleted, and searched.
- Desktop state should persist in browser local storage when available.
- Knowledge content remains Markdown-first under `content/`.

## Frontend Component Standard

This project uses Ant Design v6 as the mandatory frontend component library standard.

All new or modified interactive frontend UI must use Ant Design v6 components. When an existing legacy control is touched, migrate that control to the matching Ant Design v6 component instead of extending the legacy implementation.

- Use Ant Design component semantics for buttons, forms, selects, modals, drawers, tabs, tables, cards, messages, notifications, tooltips, and upload controls.
- Prefer Ant Design interaction states and accessibility expectations: focus, hover, disabled, loading, validation, confirmation, and feedback states must be explicit.
- Form-like interactions should follow Ant Design Form / Select / Input / Upload patterns, even when implemented in the current standalone static page.
- Modal and drawer interactions should follow Ant Design Modal / Drawer behavior: centered or intentionally placed, clear primary and secondary actions, no background scroll leakage.
- Styling may keep this project's existing light gray-blue OS visual language, but component spacing, hierarchy, alignment, and state behavior should map to Ant Design conventions.
- Do not introduce unrelated UI libraries for new frontend work unless the user explicitly approves a replacement.

### AI Conversation UI Standard

- Intelligent-agent conversations use `@ant-design/x` as the approved chat framework.
- Conversation windows use Ant Design X `Conversations`, `Bubble.List`, and `Sender` inside a centered Ant Design `Modal`.
- The conversation window shows only conversation history, the active message stream, and the message composer. Agent configuration details remain in the workbench detail panel.
- Conversation history is stored through the project server API, not browser local storage.

### Text And Container Integrity

- Text, icons, badges, suffixes, and dropdown arrows must always remain fully inside their owning component.
- Text must never render partly inside and partly outside a border, button, field, card, modal, or menu.
- Select controls must keep both the selected label and dropdown arrow inside the Ant Design Select boundary.
- Long labels must use a single-line ellipsis or an intentional multi-line clamp; they must not overflow or resize the surrounding layout.
- Every modified component must be checked at the actual desktop preview size before completion.

## Required Validation Rule

This validation rule applies only to this Clink AI knowledge base project.

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

After each development change and final build:

- Automatically reload the currently open project preview.
- Validate the changed behavior against the freshly reloaded build, not a stale browser state.
- Keep the refreshed preview open for the user when the work is complete.

Do not report a feature as complete from code inspection only.
