import React from 'react'
import {Container} from 'reactstrap';
import '../css/BMI.css'
import {ref,set,get,child,onValue,update} from "firebase/database"
import { useEffect } from 'react';
import db from '../utils/firebase';
import { useNavigate,Navigate } from 'react-router-dom';
function Bmi() {

  const saved = localStorage.getItem("user");
  const initial = JSON.parse(saved);
  const navigate = useNavigate()
  //-------------------------------- ยังใช้ไม่ได้
  try{
    var gender = initial.gender
    var weight = parseInt(initial.weight)
    var height = parseInt(initial.height)/100
    var bmi = weight/Math.pow(height,2)
  }
  catch(e){
    navigate("http://localhost:3000/CalBmi/")
    // window.location.reload();
  }
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
    status = "น้ำหนักต่ำกว่าเกณ"
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
        <div className="detail">
          <p>Email : {initial.email}</p>
          <p>Gender : {gender}</p>
          <p>Weight : {initial.weight} kg</p>
          <p>Height : {initial.height} cm</p>
          <p>Bmi : {bmi}</p>
          <p>คุณอยู่ในเกณฑ์ : {status}</p>
        </div>
      </Container>
    </div>
  );
}

export default Bmi;
