import About from "./components/About";
import Contact from "./components/Contact";
import Exper from "./components/Exper";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  return (
    <>
        <div className="fixed top-0 -z-10  w-full h-full">
        <div className="absolute top-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> </div>

        </div>
       <div className="container mx-auto ">
          <NavBar />
          <Hero />
          <About />
          <Tech/>
          <Exper/>
          <Project />
          <Contact/>
        </div>
    </>
  );
}

export default App;
