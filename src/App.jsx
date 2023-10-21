import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
    </>
  );
}

export default App;
