import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";
import Technologies from "./container/technologies/Technologies";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Technologies/>
    </>
  );
}

export default App;
