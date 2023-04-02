import "./App.css";
import Conversion from "./components/Conversion";
import Intro from "./components/Intro";

function App() {
  return (
    <main>
      <div className="container">
        <Intro />
        <Conversion />
      </div>
    </main>
  );
}

export default App;
