import logo from "./Search_logo1.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header row">
        <div className="col-1"></div>
        <div className="col-3">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-6 question">
          <h1>What are you searching for?</h1>
        </div>
      </header>

      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>

      <footer className="footer">
        <a
          href="https://github.com/Benje-Dev/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Open-source code {""}
        </a>
        by Jasmin Labidi
      </footer>
    </div>
  );
}
