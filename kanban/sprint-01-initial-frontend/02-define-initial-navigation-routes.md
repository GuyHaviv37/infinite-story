## Task: Define initial navigation routes

**Goal**

Define a simple, predictable navigation structure that supports a Home screen (post-login) and a Story screen in the Expo app.

**Description**

- Review the existing Expo router layout in `app/_layout.tsx` and the `(tabs)` group.
- Decide whether to reuse the starter tab layout or replace it with a stack-based layout suitable for Chronicle AI.
- Ensure there are routes for:
  - `HomeScreen` (post-login landing, showing mock campaigns).
  - `StoryScreen` (showing a story step and choices).
- Configure the app to launch directly into `HomeScreen`, assuming the user is already authenticated.

**Acceptance Criteria**

- The route structure for `HomeScreen` and `StoryScreen` is clearly defined in the Expo router files.
- App launch goes to `HomeScreen` without any intermediate onboarding or auth screens.
- Navigation from Home to Story and back is conceptually mapped out (even if implementation lives in separate tasks).

**Notes**

- Keep the structure simple and flexible so future sprints can add login, settings, and other screens without major refactors.

