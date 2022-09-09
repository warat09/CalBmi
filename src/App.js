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
    <div className = "app">
      {window.location.href.split("/")[window.location.href.split("/").length-1]!=="" &&<Navigation/>}
        <Routes>
          <Route exact path="CalBmi" element={<Home />} />
          <Route path="CalBmi/Bmi" element={<Bmi />} />
          <Route path="CalBmi/Drink" element={<Drink />} />
          <Route path="CalBmi/Exercise" element={<Exercise />} />
          <Route path="CalBmi/Food" element={<Food />} />
          <Route path="CalBmi/Mood" element={<Mood />} />
        </Routes>
    </div>
  );
}

export default App;
