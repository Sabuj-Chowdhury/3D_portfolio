import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div className="container">
      <section id="#hero">
        <Hero></Hero>
      </section>
      <section id="#services">
        <Services></Services>
      </section>
      <section id="#portfolio">
        <Portfolio></Portfolio>
      </section>
      <section id="#contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default App;
