import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div className="container">
      <Hero></Hero>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default App;
