import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <TimeLine />
    </div>
  );
}

export default App;
