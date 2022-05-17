import "./App.css";
import Number from "./components/Number";
import Header from "./components/Heaader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PLayland from "./pages/PLayland";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      {/* <Home /> */}
      <PLayland />
      <Footer />
    </div>
  );
}

export default App;
