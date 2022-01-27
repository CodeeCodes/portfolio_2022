import "./styles/main.css";
// import Button from "./components/hello_button";
import Welcome from "./components/hello";
import Hero from "./components/hero";
import PreviousProj from "./components/prevProjects";
import Stars from "./components/stars";
import Footer from "./components/footer";
import Form from "./components/form";
import Tech from "./components/technologies";

function App() {
  return (
    <div className="App">
      <Stars />
      <Welcome />
      <Hero />
      <div className="main_div">
        <PreviousProj />
        <div className="main_div_second">
          <Tech />
          <Form />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
