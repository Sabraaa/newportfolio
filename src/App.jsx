import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";
import Technologies from "./container/technologies/Technologies";
import AboutMe from "./components/about me/AboutMe";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Technologies/>
      <AboutMe/>
    </>
  );
}

export default App;
