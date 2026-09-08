# Documentation

## Overview

This project is a small Create React App example. It keeps the implementation focused on one useful concept: updating and formatting the current browser date and time in a React component.

## Component flow

1. React mounts the `App` component from `src/index.js`.
2. `useState` stores the current `Date` value.
3. `useEffect` creates a one-second interval.
4. Each interval tick stores a fresh `Date` object and triggers a re-render.
5. `useMemo` formats the current value for the browser locale.
6. The cleanup function clears the interval when the component unmounts.

## Accessibility

- The current clock is rendered with the semantic `time` element.
- The live display uses `aria-live="polite"` so updates can be announced without interrupting the user.
- The layout keeps readable contrast and works on narrow screens.

## Local commands

Install dependencies and start the CRA development server:

```powershell
npm install
npm start
```

Create a production bundle:

```powershell
npm run build
```

## Project scope

- The project remains Create React App.
- No test folder, test script, or direct test dependency is included.
- The app does not need environment variables or a backend server.
