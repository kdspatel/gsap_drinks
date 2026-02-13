import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap/gsap-core.js';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Mocktails from "./components/Mocktails";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Mocktails/>
      <About/>
      <Art/>
    </main>
  )
}

export default App
