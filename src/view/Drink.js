import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com';
import emptybottle from './../images/water.png'
import water5 from './../images/water5.png'
import water4 from './../images/water4.png'
import water3 from './../images/water3.png'
import water2 from './../images/water2.png'
import water1 from './../images/water1.png'
import Drinkcss from './../css/Drinkcss.css'
import ms from './../utils/firebase'
import {Container} from 'reactstrap';
import db from '../utils/firebase';
import {ref,set,get,child,onValue,update, push} from "firebase/database"
function Drink() {
    const saved = localStorage.getItem("user");
    const initial = JSON.parse(saved);
    const dbref = ref(db)
    if(initial == null){
      window.location.href = "https://warat09.github.io/CalBmi"
    }

    var firsttime = new Date(Date.now());
    const [date, setDate] = useState(firsttime.getHours() + ":" +firsttime.getMinutes() + ":" +firsttime.getSeconds());
    const [date2,setdate2] = useState(parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
    const [sleep,setsleep] =useState(false)
    const [State,setState] = useState(0)
    

    const [checked,setChecked] =useState(false)
    
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
       
    useEffect(() => {
      get(child(dbref,"email")).then((snapshot)=>{
        if(snapshot.exists()){
          // console.log(snapshot.val())
          for(let i = 0;i<snapshot.val().length;i++){
              let m = snapshot.val()[i].mail
              
              if(m===initial.email){
                // console.log(snapshot.val()[i])
                // console.log(snapshot.val()[i].state)
                if(snapshot.val()[i].state===1){
                  setChecked(true)
                  break;
                }
                else{
                  setChecked(false)
                  break;
                }
              }
            }
        }
        else{
          console.log("not found")
          // return false
        }
      }).catch(er=>{
          console.log(er)
      })
        const timerID = setInterval(() => getRealTime(), 1000);
        return () => {
          clearInterval(timerID);
        };
        
      }, []);
    useEffect(()=>{
      setdate2(parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
      // console.log("first date2 :",parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
      let date_temp = parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2])))

      if((date_temp>=200001&&date_temp<240000)||(date_temp>=0&&date_temp<80000)){
        // console.log(date2)
        setsleep(true)
      }
      else if(date_temp>=80000){
        setsleep(false)
      }

      if(date2===131500){
          console.log("hello")
          var templateParams = {
              name: 'earthgodna@gmail.com',
              subject: 'Check this out!',
              message:'ถึงเวลาดื่มน้ำ'
            };
          emailjs.send('service_9y5vii1', 'template_y5p8guz', templateParams, '0WTwQ785q4wjqSYDp')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
             });
        }
    },[date])
    const handlenexttime = ()=>{
        if ((date2>=200000&&date2<240000&&sleep==true)||(date2>=0&&date2<80000&&sleep==true)){
          return "8:00:00"
        }
        else if (date2>=170000&&date2<200000){
          return "20:00:00"
        }
        else if(date2>=140000&&date2<170000){
          return "17:00:00"
        }
        else if(date2>=110000&&date2<140000){
          return "14:00:00"
        }
        else{
          return "11:00:00"
        }
          
      
    }
    useEffect(()=>{
      // console.log(initial.email)
      let postdata ={}
      let index = 0;
      if(checked==true){
        get(child(dbref,"email")).then((snapshot)=>{

          if(snapshot.exists()){
            for(let i = 0;i<snapshot.val().length;i++){
                let m = snapshot.val()[i].mail
                if(m===initial.email){
                  index = i
                  break;
                }
              }
              postdata=snapshot.val()[index]
              postdata.state=1
              // console.log(postdata)
              const newPostKey=push(child(dbref,'email')).key;
              // console.log(newPostKey)
              const updates={}
              updates['/email/'+ index ]=postdata;
              update(dbref,updates)
              
              // console.log(email_to_use)
          }
          else{
            console.log("not found")
          }
        }).catch(er=>{
            console.log(er)
        })
      }
      else{
        get(child(dbref,"email")).then((snapshot)=>{

          if(snapshot.exists()){
            for(let i = 0;i<snapshot.val().length;i++){
                let m = snapshot.val()[i].mail
                if(m===initial.email){
                  index = i
                  break;
                }
              }
              postdata=snapshot.val()[index]
              postdata.state=0
              // console.log(postdata)
              const newPostKey=push(child(dbref,'email')).key;
              // console.log(newPostKey)
              const updates={}
              updates['/email/'+ index ]=postdata;
              update(dbref,updates)
              
              // console.log(email_to_use)
          }
          else{
            console.log("not found")
          }
        }).catch(er=>{
            console.log(er)
        })
      }

    },[checked])
    const handlecheck = ()=>{
      setChecked(!checked)
      
    }
  return (
<div>
    <div className="header">
      <h1>การดื่มน้ำ</h1>
    </div>
    <Container className="itemdiv">
      <div className="TimeDiv">
        <h1 className="Time">เวลา ปัจจุบัน : {date}</h1>    
        <h1 className="Time">รอบต่อไป : {handlenexttime()}</h1> 
      </div>
        <br/>
        {/* <p>test</p> */}
        {date2>=200000&&date2<240000&&sleep==false&&
          <div className='waterbottlediv'>
            {/* {setState(0)} */}
            <img src={emptybottle} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=170000&&date2<200000&&
          <div className='waterbottlediv'>
            <img src={water1} className='waterbottle' alt="logo"/>
          </div>
        }{date2>=140000&&date2<170000&&
          <div className='waterbottlediv'>
            <img src={water2} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=110000&&date2<140000&&
          <div className='waterbottlediv'>
            <img src={water3} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=80000&&date2<110000&&
          <div className='waterbottlediv'>
            <img src={water4} className='waterbottle' alt="logo"/>
          </div>
        }
        
        {sleep===true&&
          <div className='waterbottlediv'>
            <img src={water5} className='waterbottle' alt="logo"/>
          </div>

        }
        <div style={{
          paddingBottom:70
        }}>
          {/* {console.log(checked)} */}
          <input type="checkbox" className="checkbox" id="checkbox" checked={checked} onChange={handlecheck}></input>
          <p className="textcheckbox">กดติ๊กที่นี่เพื่อรับการแจ้งเตือน</p>
        </div>
        
        
        
    </Container>
</div>
  );
}

export default Drink;