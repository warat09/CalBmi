import {Route, Routes,NavLink} from "react-router-dom";

import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import Exercise from "./view/Exercise";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavLink to="CalBmi">Home</NavLink>
      <NavLink to="CalBmi/Bmi">Bmi</NavLink>
      <NavLink to="CalBmi/Drink">Drink</NavLink>
      <NavLink to="CalBmi/Exercise">Exercise</NavLink>
        <Routes>
          <Route path="CalBmi" element={<Home />} />
          <Route path="CalBmi/Bmi" element={<Bmi />} />
          <Route path="CalBmi/Drink" element={<Drink />} />
          <Route path="CalBmi/Exercise" element={<Exercise />} />
        </Routes>
    </div>
  );
}

export default App;
