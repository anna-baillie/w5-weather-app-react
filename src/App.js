import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Elounda" />
        <footer>
          This app was coded by Anna Baillie and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
