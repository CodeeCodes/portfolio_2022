import "./styles/main.css";
import Welcome from "./components/hello";
import Stars from "./components/stars";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Stars />
      <Welcome />
      {""}
      <Footer />
    </div>
  );
}

export default App;
