import "./styles/main.css";
// import Button from "./components/hello_button";
import Welcome from "./components/hello";
import PreviousProj from "./components/prevProjects";
import Stars from "./components/stars";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Stars />
      <Welcome />
      <PreviousProj />
      {""}
      {/* <Button /> */}
      <div className="footer">
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
