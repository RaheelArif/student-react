import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import Students12 from "./pages/Students12";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students-12" element={<Students12 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
