import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [dateTime, setDateTime] = useState(new Date().toISOString());
    useEffect(() => {
        const updateDateTime = () => {
            setDateTime(new Date().toISOString());
        };
        const timeout = setTimeout(updateDateTime, 10);

        return () => clearTimeout(timeout);
    }, [dateTime]);

    return (
        <div className="App" style={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
            <h1>{dateTime}</h1>
            <h2>a2rp: an Ashish Ranjan presentation</h2>
        </div>
    );
}

export default App;
