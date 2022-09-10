import React, { useState,useRef, useEffect } from 'react';
import {ref,set,get,child,onValue,update} from "firebase/database"
import db from '../utils/firebase';
import {Container} from 'reactstrap';
import '../css/Home.css'
import { useNavigate,Navigate } from 'react-router-dom';
function Home() {
  
  const[input, setinput] = useState({email:'',weight:0,height:0,gender:'Male'});
  
  const[ar,setar] = useState([])
  const arref = useRef(ar)
  const navigate = useNavigate()
  useEffect(()=>{
    arref.current = ar
    console.log(ar)
  },[ar])

  const handleSubmit  = (e) => {
    const temp = []
    const dbref = ref(db)
    
    localStorage.setItem('user', JSON.stringify(input));
    const mail = input.email
    if(input.email==="" || input.weight===0 || input.weight===0){
      alert("กรุณากรอกข้อมูลให้ครบ")
    }
    else{
      try{
        get(child(dbref,"email")).then((snapshot)=>{
          if(snapshot.exists()){
            console.log(snapshot.val())
            for(let i = 0;i<snapshot.val().length;i++){
              temp.push(i)
            }
            console.log(temp)
            const num = temp.length
            console.log(temp," : ",num)
            update(ref(db,"email"),
            {
              [num]:mail
            }).then(()=>{
              navigate("/Bmi")
            })

            
          }
          else{
            console.log("not found")
            update(ref(db,"email"),
            {
              0:mail
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
    e.target.reset()
  }
  const inputsHandler = (e) =>{
    setinput({...input,[e.target.name]: e.target.value });
    console.log(e.target.value)
    e.preventDefault();
  }
  return (
    <div>
      
      <div className="header">
        
        <h1>กรอกข้อมูลส่วนตัว (Personal Information)</h1>
      </div>
      <Container>
        <form onSubmit={handleSubmit}>
            <div className="row pt-5 mx-auto">
              <h className="Header">App Name</h>
              <p className="Header2">กรุณากรองข้อมูลของคุณ</p>
              <div className="col-8 form-group pt-2 mx-auto">
                <label>
                  <input type="radio" value="Male" name="gender" onChange={inputsHandler} defaultChecked/>
                  <img src={'https://via.placeholder.com/40x60/0bf/fff&text=M'} />
                </label>
                <label>
                  <input type="radio" value="Female" name="gender" onChange={inputsHandler}/>
                  <img src={'https://via.placeholder.com/40x60/b0f/fff&text=F'} />
                </label>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="อีเมล" name="email" onChange={inputsHandler}/>
                </div>
                <div className="col-8 form-group mx-auto">
                    <input type="number" className="form-control" placeholder="น้ำหนัก" name="weight" onChange={inputsHandler}/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="number" className="form-control" placeholder="ส่วนสูง" name="height" onChange={inputsHandler}/>
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
