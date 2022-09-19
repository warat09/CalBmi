import React, { useState,useRef, useEffect } from 'react';
import {HashRouter as Router,Route, Routes,NavLink} from "react-router-dom";
// import React, { ,useEffect } from 'react'
import Home from "./view/Home";
import Bmi from "./view/BMI";
import Drink from "./view/Drink";
import emailjs from 'emailjs-com';
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
import db from './utils/firebase';
import {ref,set,get,child,onValue,update} from "firebase/database"

function App() {
  const dbref = ref(db)
  const temp =[]
  const saved = localStorage.getItem("user");
  const daystate = localStorage.getItem("ds2");
  const initial = JSON.parse(saved);
  var firsttime = new Date(Date.now());
  const [date, setDate] = useState(firsttime.getHours() + ":" +firsttime.getMinutes() + ":" +firsttime.getSeconds());
  const [date2,setdate2] = useState(parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
  //----------------------------------------
  const whitelist = ["earthgodna@gmail.com"]
  useEffect(() => {
    const timerID = setInterval(() => getRealTime(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  function getRealTime() {
    const currentTime = Date.now();
    var d = new Date(currentTime)
    if(parseInt(d.getSeconds())<10){
      if(parseInt(d.getMinutes())<10){
        var time = d.getHours() + ":0" +d.getMinutes() + ":0" +d.getSeconds();
        
      }
      else{
        var time = d.getHours() + ":" +d.getMinutes() + ":0" +d.getSeconds();
      }
    }
    else{
      if(parseInt(d.getMinutes())<10){
        var time = d.getHours() + ":0" +d.getMinutes() + ":" +d.getSeconds();
        
      }
      else{
        var time = d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds();
      }
    }
    
    setDate(time)
    
    return (Math.floor(currentTime / 1000) + 1) * 1000 - currentTime;
  }
  const distinct =(value,index,self)=>{
    return self.indexOf(value) ===index
  }
  const checkwhitelist = (mail)=>{
    for(let i =0;i<whitelist.length;i++){
      if(mail==whitelist[i]){
        return true
      }
    }
    return false
  }
  useEffect(()=>{
    setdate2(parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
    if(initial!=null){
      // console.log(date)
      get(child(dbref,"email")).then((snapshot)=>{

        if(snapshot.exists()){
          for(let i = 0;i<snapshot.val().length;i++){
              temp.push(snapshot.val()[i])
            }

            const email_to_use =temp.filter(distinct)
            // console.log(date)
            console.log(date2)
            if(checkwhitelist(initial.email) && (date2==80000||date2==110000||date2==140000||date2==170000||date2==200000)){
              for(let i =0;i<email_to_use.length;i++){
                  console.log("hello")
                  var templateParams = {
                      name: email_to_use[i],
                      subject: 'ถึงเวลาดื่มน้ำแล้ว!',
                      message:'ถึงเวลาดื่มน้ำแล้วเวลา : '+date +' นาฬิกา'
                    };
                  emailjs.send('service_9y5vii1', 'template_y5p8guz', templateParams, '0WTwQ785q4wjqSYDp')
                      .then((result) => {
                          console.log(result.text);
                      }, (error) => {
                          console.log(error.text);
                     });
                
              }
            }
        }
        else{
          console.log("not found")
        }
      }).catch(er=>{
          console.log(er)
      })
    }
  },[date])
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
