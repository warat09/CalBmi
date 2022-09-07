import {Route, Routes,NavLink} from "react-router-dom";

import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import Exercise from "./view/Exercise";
import Food from "./view/Food";
import Mood from "./view/mood";
import Navigation from "./view/navbar";
import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Bmi" element={<Bmi />} />
          <Route path="Drink" element={<Drink />} />
          <Route path="Exercise" element={<Exercise />} />
          <Route path="Food" element={<Food />} />
          <Route path="Mood" element={<Mood />} />
        </Routes>
    </div>
  );
}

export default App;
