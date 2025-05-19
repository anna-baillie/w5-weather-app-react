import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Elounda" />
        <footer>
          This app was coded by{" "}
          <a href="https://github.com/anna-baillie">Anna Baillie</a> and is{" "}
          <a href="https://github.com/anna-baillie/w5-weather-app-react">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
