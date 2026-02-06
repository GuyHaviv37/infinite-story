## Task: Create shared `Screen` layout component

**Goal**

Provide a reusable `Screen` layout component that handles safe area, background color, and basic padding so all primary screens feel consistent.

**Description**

- In the `components/` folder, create a `Screen` component that wraps the existing themed primitives (e.g. `ThemedView`) and safe area handling.
- Support basic layout options, such as:
  - Scrollable content vs. fixed (non-scroll) screens.
  - Optional header area (for titles) and body content.
- Use this `Screen` component as the base layout for both Home and Story screens.

**Acceptance Criteria**

- A `Screen` component exists under `components/` and is written in TypeScript/React Native.
- Home and Story screens both import and use `Screen` for their root layout.
- Visual spacing and background colors are consistent between Home and Story.

**Notes**

- Keep the API small and focused; more advanced props (like custom headers) can be added in later sprints.

