import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
