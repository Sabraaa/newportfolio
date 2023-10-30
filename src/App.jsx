import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";
import Technologies from "./container/technologies/Technologies";
import AboutMe from "./components/about me/AboutMe";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Technologies/>
      <AboutMe/>
      <Footer/>
    </>
  );
}

export default App;
