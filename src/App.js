import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/Bmi">Bmi</Link>
      <Link to="/Drink">Drink</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/Drink" element={<Drink />} />
      </Routes>
    </div>
  );
}

export default App;
