import "./styles/main.css";
import Button from "./components/hello_button";
import Welcome from "./components/hello";
import PreviousProj from "./components/prevProjects";
import Stars from "./components/stars";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Stars />
      <Welcome />
      <PreviousProj />
      {""}
      <Button />
      <Footer />
    </div>
  );
}

export default App;
