import React from 'react'
import {Container} from 'reactstrap';
import '../css/BMI.css'
import {ref,set,get,child,onValue,update} from "firebase/database"
import { useEffect } from 'react';
import db from '../utils/firebase';
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import { useNavigate,Navigate } from 'react-router-dom';
function Bmi() {
  const saved = localStorage.getItem("user");
  const initial = JSON.parse(saved);
  if(initial == null){
    window.location.href = "https://warat09.github.io/CalBmi"
  }
    var gender = initial.gender
    var weight = parseInt(initial.weight)
    var height = parseInt(initial.height)/100
    var bmi = weight/Math.pow(height,2)
  
  var status = ''
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  const dbref = ref(db)
  
  // useEffect(()=>{
  //   console.log(saved)
  //   
  // },[])
  if(bmi < 18.5){
    status = "น้ำหนักต่ำกว่าเกณฑ์"
  }
  else if(bmi >= 18.5 && bmi < 23){
    status = "สมส่วน"
  }
  else if(bmi >= 23 && bmi < 25){
    status = "น้ำหนักเกิน"
  }
  else if(bmi >= 25 && bmi < 30){
    status = "โรคอ้วน"
  }
  else{
    status = "โรคอ้วนอันตราย"
  }
  return (
    <div className='maxdiv'>
      <div className="header">
        <h1>ข้อมูลของผู้ใช้</h1>
      </div>
      <Container>
        <div style={{
          paddingBottom:100
        }}>
          <div className="detail">
            <h2>BMI</h2>
            <p>อยู่ในเกณฑ์ : {status}</p>
            <h3>{bmi.toFixed(2)}</h3>
                {gender=="Male" && 
                  <img src={boy} className="Pic"/>
                }
                {gender=="Female" &&
                  <img src={girl} className="Pic"/>
                }
          </div>
          <div className='boxcenter'>
            <div className="bigbox">
            <div className="box">
                <p>Weight : {initial.weight} kg</p>
                <p>Height : {initial.height} cm</p>
                
              </div>
              <div className="box">
                <p>Email : {initial.email}</p>
                <p>Gender : {gender}</p>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bmi;
