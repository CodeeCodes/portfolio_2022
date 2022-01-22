import "./styles/main.css";
// import Button from "./components/hello_button";
import Welcome from "./components/hello";
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
      <div className="main_div">
        <PreviousProj />
        <Tech />
        {""}
        {/* <Button /> */}
      </div>
      <div className="footer">
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
