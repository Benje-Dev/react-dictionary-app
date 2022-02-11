import logo from "./Search_logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
<main>
<Dictionary />

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
