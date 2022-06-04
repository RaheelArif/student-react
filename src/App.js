import "./App.css";
import Home from "./pages/Home";
import PLayland from "./pages/PLayland";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playland" element={<PLayland />} />
        <Route path="/students" element={<Students />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
