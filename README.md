# Basic React Hello App

A small Create React App project that demonstrates a clean React component, a one-second timer, and browser-local date and time formatting.

## Features

- Create React App setup, kept as CRA.
- Displays a friendly React greeting.
- Shows the current local time and date.
- Updates once every second.
- Uses the browser locale and time zone.
- Cleans up the timer when the component unmounts.
- Responsive layout for desktop and mobile screens.
- No test setup or extra runtime dependencies.

## Run locally

```powershell
npm install
npm start
```

The development server opens at `http://localhost:3000`.

## Production build

```powershell
npm run build
```

The optimized files are written to the CRA `build` directory.

## How it works

The main component stores a `Date` object in state. A `useEffect` interval updates that state every second, and `Intl.DateTimeFormat` converts it into readable local date, time, and time zone values.

## Author

**Ashish Ranjan**
Full-Stack Web Developer

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [Ashish Ranjan](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://www.patreon.com/a2rp)

## License

This project is available under the MIT License. See [LICENSE](LICENSE).
