import React from 'react'
import {Container} from 'reactstrap';
import '../css/BMI.css'

function Bmi() {

  const saved = localStorage.getItem("user");
  const daystate = localStorage.getItem("ds");
  // localStorage.setItem('user', JSON.stringify(input));
  const initial = JSON.parse(saved);
  var gender = initial.gender
  var weight = parseInt(initial.weight)
  var height = parseInt(initial.height)/100
  var bmi = weight/Math.pow(height,2)
  var status = ''
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  // today +="1"

  if(daystate===null){
    localStorage.setItem('ds', today);
    localStorage.setItem('emo',-1)
    

  }
  else if (daystate!==today){
    localStorage.setItem('ds', today); 
    localStorage.setItem('emo',-1)
  }
  
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
        {/* <h1>คำนวณหาค่าดัชนีมวลกาย (BMI)</h1> */}
        <h1>ข้อมูลของผู้ใช้</h1>
      </div>
      <Container>
        {/* <h1 className="data">ข้อมูลของผู้ใช้</h1> */}
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
