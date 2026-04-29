import { Hero } from "@/sections/Hero";    // @ is highlighting to src folder instead of writing ../
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { EducationSkills } from "@/sections/EducationSkills";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <EducationSkills/>
        <Testimonials/>
        <Contact/> 
      </main>
      <Footer/>
    </div>
  );
}

export default App;























