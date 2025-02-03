import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Hero from "./Components/Hero/Hero";

// import Portfolio from "./Components/Portfolio/Portfolio";

import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="container">
      <section id="#hero">
        <Hero></Hero>
      </section>
      <section id="#aboutMe">
        <AboutMe></AboutMe>
      </section>
      <section id="#skills">
        <Skills></Skills>
      </section>

      <section id="#education">
        <Education></Education>
      </section>

      {/* <section id="#portfolio">
        <Portfolio></Portfolio>
      </section> */}
      <section id="#contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default App;
