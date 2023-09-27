import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
