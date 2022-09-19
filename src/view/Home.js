import React, { useState,useRef, useEffect } from 'react';
import {ref,set,get,child,onValue,update} from "firebase/database"
import db from '../utils/firebase';
import {Container} from 'reactstrap';
import '../css/Home.css'
import { useNavigate,Navigate } from 'react-router-dom';
import { async } from '@firebase/util';
import boy from '../images/boy.jpg'
import girl from '../images/girl.jpg'
import logo from '../images/logo.png'



function Home() {
  
  const[input, setinput] = useState({email:'',weight:0,height:0,gender:'Male'});
  const [gender, setGender] = useState("Male");

  
  const[ar,setar] = useState([])
  const arref = useRef(ar)
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.clear()
    const saved = localStorage.getItem("user");
    const initial = JSON.parse(saved);
    console.log(initial)
    try{
    if(initial.email!=null){
      localStorage.clear()
      navigate("/Bmi")
      // window.location.reload();
    }
   }
   catch(e){
    console.log(e)
   }
    
  },[])
  useEffect(()=>{
    arref.current = ar
    console.log(ar)
  },[ar])

  const handleSubmit  = (e) => {
    input.gender = gender
    console.log(input)
    const temp = []
    const dbref = ref(db)
    
    localStorage.setItem('user', JSON.stringify(input));
    const mail = input.email
    if(input.email==="" || input.weight===0 || input.weight===0){
      alert("กรุณากรอกข้อมูลให้ครบ")
    }
    else if(input.email==="1"){
      e.target.reset()
      navigate("/Bmi")
      window.location.reload();
    }
    else{
      try{
        get(child(dbref,"email")).then((snapshot)=>{
          if(snapshot.exists()){
            console.log(snapshot.val())
            for(let i = 0;i<snapshot.val().length;i++){
              temp.push(i)
            }
            // console.log(temp)
            const num = temp.length
            // console.log(temp," : ",num)
            update(ref(db,"email"),
            {
              [num]:mail
            }).then(()=>{
              e.target.reset()
              navigate("/Bmi")
              window.location.reload();
            })

            
          }
          else{
            console.log("not found")
            update(ref(db,"email"),
            {
              0:mail
            })
            .then(()=>{
              e.target.reset()
              navigate("/Bmi")
              window.location.reload();
            })
          }
        }).catch(er=>{
          console.log(er)
        })
  
      }
      catch(er){
        console.log(er)
      }
    }
    e.preventDefault();
  }
  const inputsHandler = (e) =>{
    setinput({...input,[e.target.name]: e.target.value });
    // console.log(e.target.value)
    e.preventDefault();
  }

  function onChangeValue(event) {
    setGender(event.target.value);
  }
  return (
    <div>
      
      <div className="header">
        
        <h1>กรอกข้อมูลส่วนตัว</h1>
      </div>
      <Container>
        <form onSubmit={handleSubmit}>
            <div className="row mx-auto">
              <img src={logo} style={{
                width:350,
                height:270,
              }} className="Header"></img>
              <p className="Header2">กรุณากรองข้อมูลของคุณ</p>
              <div className="form-group pt-2 mx-auto text-center text-md-right" onChange={onChangeValue}>
                <div className="gender">
                  <label>
                    <input type="radio" value="Male" name="gender" checked={gender === "Male"}/>
                    <img src={boy} />
                  </label>
                  <label>
                    <input type="radio" value="Female" name="gender" checked={gender === "Female"}/>
                    <img src={girl} />
                  </label>
                </div>
              </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="อีเมล" name="email" onChange={inputsHandler}/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="number" className="form-control" placeholder="ส่วนสูง (เซ็นติเมตร)" name="height" onChange={inputsHandler}/>
                </div>

                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="number" className="form-control" placeholder="น้ำหนัก (กิโลกรัม)" name="weight" onChange={inputsHandler}/>
                </div>
                
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn-btn-info" value="submit"></input>
                </div>
            </div>
        </form>
        {/* <button onClick={handlecheck}>checkdb</button> */}
      </Container>
    </div>
  );
}

export default Home;
