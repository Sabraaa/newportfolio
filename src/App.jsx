import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";
import Technologies from "./container/technologies/Technologies";
import AboutMe from "./container/about me/AboutMe";
import Footer from "./components/footer/Footer";
import CustomCursor from "./components/custom cursor/CustomCursor";
// import WhiteButton from "./components/whiteButton/WhiteButton";
import { useEffect, useState } from "react";
import VerticalStepper from "./components/verticalStepper/VerticalStepper";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
     {screenWidth >= 769 && <CustomCursor />}
     <VerticalStepper/>
      <Navbar />
      <Header />
      <Projects />
      <Technologies />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
