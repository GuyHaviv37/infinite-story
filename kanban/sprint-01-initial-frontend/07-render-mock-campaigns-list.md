## Task: Render mock campaigns list

**Goal**

Display a scrollable list of mock campaigns on the Home screen so the user can see their potential adventures at a glance.

**Description**

- Import mock `campaigns` data into the Home screen.
- Render the campaigns in a vertical list (e.g. `FlatList` or mapped views).
- For each campaign card/row, show:
  - Campaign name.
  - Character class.
  - Short description or last story summary.
- Apply basic spacing and theming using existing `themed-*` components and `constants/theme.ts`.

**Acceptance Criteria**

- When the app launches, the Home screen shows a list of at least 2–3 mock campaigns.
- The list is scrollable if content exceeds the viewport.
- Each campaign row is visually distinct and easily tappable (for use in navigation wiring).

**Notes**

- Avoid binding any navigation logic in this task; focus purely on rendering and layout. Navigation is handled in a separate task.

