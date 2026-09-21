import { useEffect, useMemo, useState } from "react";
import {
    FiArrowDown,
    FiArrowRight,
    FiArrowUp,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiCoffee,
    FiGlobe,
    FiMenu,
    FiRefreshCw,
    FiX,
} from "react-icons/fi";
import {
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";
import "./App.css";

const navigationItems = [
    { label: "Clock", href: "#clock" },
    { label: "Details", href: "#details" },
    { label: "GitHub", href: "https://github.com/a2rp/basic-reactjs-hello-app", external: true },
];

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiCheckCircle },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiCalendar },
];

const AppHeader = ({ isVisible }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`site-header ${isVisible ? "" : "is-hidden"}`}>
            <div className="header-inner">
                <a className="brand" href="#top" onClick={closeMenu}>
                    <span className="brand-mark">
                        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
                    </span>
                    <span>
                        <strong>Hello React</strong>
                        <small>Live date and time</small>
                    </span>
                </a>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navigationItems.map((item) => (
                        <a
                            className="nav-link"
                            href={item.href}
                            key={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="menu-button"
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>

                {isMenuOpen && (
                    <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                        {navigationItems.map((item) => (
                            <a
                                className="nav-link"
                                href={item.href}
                                key={item.href}
                                onClick={closeMenu}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

const AppFooter = () => (
    <footer className="site-footer">
        <div className="footer-inner">
            <p>
                Copyright &copy; {new Date().getFullYear()} {" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </p>
            <nav className="footer-links" aria-label="Social and support links">
                {footerLinks.map(({ label, href, icon: Icon }) => (
                    <a
                        className="footer-icon-link"
                        href={href}
                        key={label}
                        aria-label={label}
                        title={label}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    >
                        <Icon aria-hidden="true" />
                    </a>
                ))}
            </nav>
        </div>
    </footer>
);

const App = () => {
    const [currentDateTime, setCurrentDateTime] = useState(() => new Date());
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const timerId = window.setInterval(() => setCurrentDateTime(new Date()), 1000);
        return () => window.clearInterval(timerId);
    }, []);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowBackToTop(currentScrollY > 280);
            setIsHeaderVisible(currentScrollY <= 0 || currentScrollY < previousScrollY);
            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div className="app-shell" id="top">
            <AppHeader isVisible={isHeaderVisible} />

            <main className="page-content">
                <section className="hero-section" aria-labelledby="clock-title">
                    <div className="hero-copy">
                        <p className="eyebrow">A friendly React starting point</p>
                        <h1 id="clock-title">
                            Hello from <span>React.</span>
                        </h1>
                        <p className="intro">
                            A small, focused app that greets visitors with a live browser date and time display.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-button" href="#clock">
                                See live clock <FiArrowDown aria-hidden="true" />
                            </a>
                            <a className="secondary-button" href="#details">
                                Explore details <FiArrowRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div className="clock-card" id="clock">
                        <div className="clock-card-heading">
                            <span className="icon-badge"><FiClock aria-hidden="true" /></span>
                            <div>
                                <p className="card-label">Current browser time</p>
                                <p className="card-caption">Formatted for this device</p>
                            </div>
                            <span className="live-label"><span /> Live</span>
                        </div>
                        <time className="clock-time" dateTime={currentDateTime.toISOString()} aria-live="polite">
                            {formattedDateTime.time}
                        </time>
                        <p className="clock-date">{formattedDateTime.date}</p>
                        <p className="clock-zone"><FiGlobe aria-hidden="true" /> {formattedDateTime.timeZone}</p>
                        <p className="clock-status"><FiRefreshCw aria-hidden="true" /> Updates every second</p>
                    </div>
                </section>

                <section className="details-section" id="details" aria-labelledby="details-title">
                    <div className="section-heading">
                        <p className="eyebrow">What this example shows</p>
                        <h2 id="details-title">Small React ideas, clearly presented.</h2>
                    </div>
                    <div className="feature-grid">
                        <article className="feature-card">
                            <span className="icon-badge"><FiClock aria-hidden="true" /></span>
                            <h3>Live state</h3>
                            <p>The clock stores the current Date object in state and refreshes it once per second.</p>
                        </article>
                        <article className="feature-card">
                            <span className="icon-badge"><FiGlobe aria-hidden="true" /></span>
                            <h3>Local formatting</h3>
                            <p>Intl.DateTimeFormat uses the visitor&apos;s browser locale and time zone for familiar values.</p>
                        </article>
                        <article className="feature-card">
                            <span className="icon-badge"><FiCheckCircle aria-hidden="true" /></span>
                            <h3>Clean lifecycle</h3>
                            <p>The timer is cleared when the component unmounts, keeping the example safe and focused.</p>
                        </article>
                    </div>
                </section>

                <section className="message-card" aria-labelledby="message-title">
                    <div className="message-icon"><FiCalendar aria-hidden="true" /></div>
                    <div>
                        <p className="eyebrow">Start with the basics</p>
                        <h2 id="message-title">A useful first screen for a React project.</h2>
                        <p>Use this compact example as a starting point for learning components, effects, state, and browser APIs.</p>
                    </div>
                </section>
            </main>

            <AppFooter />

            <button
                className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </div>
    );
};

export default App;
