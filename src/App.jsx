import "./App.scss";

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Links from "./components/Links";

function App() {
  return (
    <div className="app">
      <Introduction />
      <div className="wrapper">
        <Projects />
        <Links />
      </div>
    </div>
  );
}

export default App;
