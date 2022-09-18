import React, {useEffect } from 'react'
import {HashRouter as Router,Route, Routes,NavLink} from "react-router-dom";

import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import Exercise from "./view/Exercise";
import Food from "./view/Food";
import Mood from "./view/mood";
import Navigation from "./view/navbar";
import Fish from './view/MenuFood/fish';
import Pork from './view/MenuFood/pork';
import Vegetable from './view/MenuFood/vegetable';
import Egg from './view/MenuFood/egg';
import Fruit from './view/MenuFood/fruit';
import Chicken from './view/MenuFood/chicken';
import Water from './view/MenuFood/water';
import './App.css';

function App() {
  useEffect(() => {
    // change background color with a random color
    document.title = "Healthy Diary"
    document.body.style.background = "#eef4f9";
  });
  
  return (
    <div className = "app">
            <Router>
      {window.location.href.split("/")[window.location.href.split("/").length-1]!=="" &&  
      window.location.href.split("/")[window.location.href.split("/").length-1]!=="Home"&&<Navigation/>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="Bmi" element={<Bmi />} />
          <Route path="Drink" element={<Drink />} />
          <Route path="Exercise" element={<Exercise />} />
          <Route path="Food" element={<Food />} />
          <Route path="Mood" element={<Mood />} />
          <Route path="Fish" element={<Fish />} />
          <Route path="Pork" element={<Pork />} />
          <Route path="Vegetable" element={<Vegetable />} />
          <Route path="Egg" element={<Egg />} />
          <Route path="Fruit" element={<Fruit />} />
          <Route path="Chicken" element={<Chicken />} />
          <Route path="Water" element={<Water />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
