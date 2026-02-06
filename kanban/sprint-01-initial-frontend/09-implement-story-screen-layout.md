## Task: Implement Story screen layout

**Goal**

Build the basic Story screen layout to show the current story text and a list of choices for the player.

**Description**

- Create a `StoryScreen` route file (e.g. `app/story.tsx`), or equivalent in the existing router structure.
- Use the shared `Screen` layout component as the root wrapper.
- Layout key sections:
  - Campaign header: show campaign name, class, and optionally a simple stats summary.
  - Story block: the main narrative text (`narrativeText`).
  - Choices area: a list of buttons or touchable rows at the bottom of the screen.
- Ensure the layout works well on small mobile screens (no overlapping text/buttons).

**Acceptance Criteria**

- A Story screen route exists and can be navigated to.
- Story screen visually separates header, body text, and choices.
- The layout looks reasonable on a typical mobile viewport in Expo Go.

**Notes**

- This task focuses on layout; wiring mock data and interaction is covered in dedicated tasks.

