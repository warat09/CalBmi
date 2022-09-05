import React, { useState,useEffect } from 'react'
import emailjs from 'emailjs-com';

function Drink() {
    var firsttime = new Date(Date.now());
    const [date, setDate] = useState(firsttime.getHours() + ":" +firsttime.getMinutes() + ":" +firsttime.getSeconds());
    function getRealTime() {
        const currentTime = Date.now();
        var d = new Date(currentTime)
        var time = d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds();
        setDate(time)
        if(d.getMinutes() == "58" && d.getSeconds() == "0"){
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
  return (
<div>
    <div className="container">
        <h1>Drink</h1>
        <h1>{date}</h1>
    </div>
</div>
  );
}

export default Drink;