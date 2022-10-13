import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by Mariah Paul, and is{" "}
            <a
              href="https://github.com/nmariahpaul/weather-app-react"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
