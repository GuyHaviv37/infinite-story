## Epic: Sprint 01 – Initial Frontend Shell (Home + Story)

**Goal**

Deliver a tappable, visually coherent Chronicle AI shell in Expo: from a post-login style home screen showing mock campaigns to a story screen displaying a hardcoded story segment and choices. All data is local/mock; no backend, auth, or dice mechanics yet.

**Scope**

- Frontend-only Expo / React Native work.
- Home screen (post-login landing) with mock campaigns list.
- Story screen showing a mock story step and interactive choices.
- Simple in-memory state; no Convex or OpenAI calls.

**Task Files**

- `01-create-sprint-kanban-structure.md`
- `02-define-initial-navigation-routes.md`
- `03-create-shared-screen-layout-component.md`
- `04-define-domain-types-frontend-only.md`
- `05-create-mock-data-campaigns-story-steps.md`
- `06-implement-home-screen-ui-skeleton.md`
- `07-render-mock-campaigns-list.md`
- `08-wire-navigation-home-to-story.md`
- `09-implement-story-screen-layout.md`
- `10-hook-story-screen-to-mock-data.md`
- `11-implement-basic-choose-option-interaction.md`
- `12-implement-minimal-in-memory-state-management.md`
- `13-implement-loading-and-empty-states.md`
- `14-apply-basic-visual-styling.md`
- `15-perform-manual-qa-expo-go.md`

**Notes**

- This sprint assumes the user is already authenticated; no auth UI or backend integration yet.
- Future sprints will replace mock data and local state with Convex-backed data and real AI-driven story generation.

