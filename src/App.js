import "./App.css";

function App() {
    return (
        <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            a2rp: an Ashish Ranjan presentation
            <h1>{new Date().toISOString()}</h1>
        </div>
    );
}

export default App;
