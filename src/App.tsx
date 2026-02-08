import './index.css'
import Background from './components/Background';
import Hero from './components/Hero';
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Process from "./components/Process.tsx";
import AddServices from "./components/AddServices.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
        <Background/>
        <Hero/>
        <About/>
        <Services/>
        <Process/>
        <AddServices/>
        <Footer/>
    </>
  )
}

export default App
