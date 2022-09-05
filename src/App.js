import {Route, Routes,NavLink} from "react-router-dom";

import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import Exercise from "./view/Exercise";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="Bmi">Bmi</NavLink>
      <NavLink to="Drink">Drink</NavLink>
      <NavLink to="Exercise">Exercise</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Bmi" element={<Bmi />} />
          <Route path="Drink" element={<Drink />} />
          <Route path="Exercise" element={<Exercise />} />
        </Routes>
    </div>
  );
}

export default App;
