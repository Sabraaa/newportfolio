import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./container/projects/Projects";
import Header from "./container/header/Header";
import ProcessBar from "./components/processBar/ProcessBar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <ProcessBar/>
    </>
  );
}

export default App;
