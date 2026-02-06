## Task: Define initial navigation routes

**Goal**

Define a simple, predictable navigation structure that supports a Home screen (post-login), a full-screen mock Login screen, and a Campaign/Story screen in the Expo app.

**Description**

- Root stack in `app/_layout.tsx` hosts:
  - `(auth)` route group for a full-screen mock `Login` screen (no tabs, header hidden).
  - `(tabs)` route group for the main app shell (Home and other tabs, header hidden).
  - `story` stack screen for the Campaign/Story view (header shown for top-bar back navigation).
- Entry route `app/index.tsx`:
  - In development (`__DEV__`), redirects directly to `/(tabs)` so you land on Home and can iterate quickly.
  - In non-dev (or future production), redirects to `/(auth)/login` as the starting point for real auth.
- Ensure there are routes for:
  - `HomeScreen` at `app/(tabs)/index.tsx` (post-login landing).
  - `LoginScreen` at `app/(auth)/login.tsx` (mock login with a single “Login” button that routes to `/(tabs)`).
  - `StoryScreen` at `app/story.tsx` (Campaign/Story screen).
- On the Home screen, add a basic “Go to demo campaign” button that navigates to `/story?campaignId=camp-1`.
- On the Story screen, read `campaignId` from route params and display it prominently so navigation can be verified.

**Acceptance Criteria**

- The route structure for `LoginScreen`, `HomeScreen`, and `StoryScreen` is clearly defined in the Expo router files:
  - `(auth)/login` for login.
  - `(tabs)/index` for Home.
  - `/story` for Campaign/Story.
- App launch in development goes to `HomeScreen` via `app/index.tsx` redirect, skipping login for faster iteration.
- The mock login screen is full screen with no tabs; pressing “Login” routes into the main tab shell.
- Tapping the “Go to demo campaign” button on Home navigates to the Story screen with `campaignId=camp-1`, which is visibly displayed.
- The Story screen is presented with a stack header so the native top bar back button returns to the tabs/Home.

**Notes**

- The `(auth)` route group and `app/index.tsx` redirect are ready to be adapted for real Convex Auth or Clerk integration in a later sprint.
- The current Story screen is a placeholder that will later be extended to render the full Chronicle flow for the given `campaignId`.

