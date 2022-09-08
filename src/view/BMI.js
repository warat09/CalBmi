import * as React from "react";
import {Container} from 'reactstrap';
import '../css/BMI.css'

function Bmi() {
  const saved = localStorage.getItem("user");
  const initial = JSON.parse(saved);
  var weight = parseInt(initial.weight)
  var height = parseInt(initial.height)/100
  var bmi = weight/Math.pow(height,2)
  var status = ''
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
    <div>
      <div className="header">
        <h1>คำนวณหาค่าดัชนีมวลกาย (BMI)</h1>
      </div>
      <Container>
        <h1 className = "data">ข้อมูลของผู้ใช้</h1>
        <p>Email:{initial.email}</p>
        <p>Weight:{initial.weight}</p>
        <p>Height:{initial.height}</p>
        <p>Bmi:{bmi}</p>
        <p>คุณอยู่ในเกณฑ์: {status}</p>
      </Container>
    </div>
  );
}

export default Bmi;
