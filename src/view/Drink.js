import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com';
import emptybottle from './../images/water.png'
import water5 from './../images/water5.png'
import water4 from './../images/water4.png'
import water3 from './../images/water3.png'
import water2 from './../images/water2.png'
import water1 from './../images/water1.png'
import Drinkcss from './../css/Drinkcss.css'
function Drink() {
    var firsttime = new Date(Date.now());
    const [date, setDate] = useState(firsttime.getHours() + ":" +firsttime.getMinutes() + ":" +firsttime.getSeconds());
    const [date2,setdate2] = useState(0)
    const [sleep,setsleep] =useState(false)
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
        if(d.getMinutes() == "58" && d.getSeconds() == "00"){
            console.log("hello")
            var templateParams = {
                name: 'ytitile7797@gmail.com',
                subject: 'Check this out!',
                message:'hello sig'
            };
            emailjs.send('service_9y5vii1', 'template_y5p8guz', templateParams, '0WTwQ785q4wjqSYDp')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
        return (Math.floor(currentTime / 1000) + 1) * 1000 - currentTime;
      }
       
    useEffect(() => {
        // document.title = date;
        const timerID = setInterval(() => getRealTime(), 1000);
        return () => {
          clearInterval(timerID);
        };
      }, []);
    useEffect(()=>{
      setdate2(parseInt(date.split(":")[0].concat(date.split(":")[1].concat(date.split(":")[2]))))
      if(date2==200001){
        setsleep(true)
      }
      else if(date2==80000){
        setsleep(false)
      }
    },[date])
  return (
<div>
    <div className="container">
        <h1>Drink</h1>
        
     
        {date2>=80000&&date2<110000&&
          <div className='waterbottlediv'>
            <img src={water4} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=110000&&date2<140000&&
          <div className='waterbottlediv'>
            <img src={water3} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>0&&date2<80000&&sleep==true&&
          <div className='waterbottlediv'>
            <img src={water5} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=140000&&date2<170000&&
          <div className='waterbottlediv'>
            <img src={water2} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=170000&&date2<200000&&
          <div className='waterbottlediv'>
            <img src={water1} className='waterbottle' alt="logo"/>
          </div>
        }
        {date2>=200000&&date2<240000&&sleep==false&&
          <div className='waterbottlediv'>
            <img src={emptybottle} className='waterbottle' alt="logo"/>
          </div>
        }
           <h1>{date}</h1>
    </div>
</div>
  );
}

export default Drink;