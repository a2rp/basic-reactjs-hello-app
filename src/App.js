import { useEffect, useMemo, useState } from "react";
import "./App.css";

const App = () => {
    // Keep the current Date object in state so React re-renders the clock.
    const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

    useEffect(() => {
        // One update per second is enough for a clock and avoids unnecessary work.
        const timerId = window.setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clear the timer when the component leaves the page.
        return () => window.clearInterval(timerId);
    }, []);

    // Intl uses the visitor's browser locale and time zone for readable values.
    const formattedDateTime = useMemo(() => {
        const dateFormatter = new Intl.DateTimeFormat(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        const timeFormatter = new Intl.DateTimeFormat(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        return {
            date: dateFormatter.format(currentDateTime),
            time: timeFormatter.format(currentDateTime),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time",
        };
    }, [currentDateTime]);

    return (
        <main className="app-shell">
            <section className="clock-card" aria-labelledby="clock-title">
                <p className="eyebrow">React basics</p>
                <h1 id="clock-title">Hello from React</h1>
                <p className="intro">
                    A small Create React App example that keeps the browser date and time current.
                </p>

                <div className="clock-display" aria-live="polite">
                    <time className="clock-time" dateTime={currentDateTime.toISOString()}>
                        {formattedDateTime.time}
                    </time>
                    <p className="clock-date">{formattedDateTime.date}</p>
                </div>

                <div className="clock-footer">
                    <span>Time zone: {formattedDateTime.timeZone}</span>
                    <span>Updates every second</span>
                </div>
            </section>
        </main>
    );
};

export default App;
