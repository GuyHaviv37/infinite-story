## Task: Perform manual QA on device/emulator via Expo Go

**Goal**

Verify the initial frontend shell works end-to-end on a real device or emulator using Expo Go.

**Description**

- Run `npx expo start` from the project root.
- Open the app in Expo Go on at least one device (iOS or Android) or an emulator/simulator.
- Manually test the following flows:
  - App launches into the Home screen without errors.
  - Home screen shows a list of mock campaigns (or a clear empty state).
  - Tapping a campaign navigates to the Story screen.
  - Story screen shows the correct campaign header and story text.
  - Tapping choices advances through 2–3 hardcoded mock steps, or shows an end-of-story message.
  - Back navigation from Story returns to Home safely.
- Note any bugs, layout issues, or UX concerns and create follow-up tasks in kanban if needed.

**Acceptance Criteria**

- All listed flows are tested in Expo Go without crashes or red screens.
- Any discovered issues are captured as new kanban tasks for future sprints.

**Notes**

- For this sprint, testing can be purely manual; automated tests can be introduced in later iterations.

