import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bike-type" element={<div>Bike type</div>} />
      <Route path="testimonial" element={<div>Bike type</div>} />
    </Routes>
  );
}

export default App;
