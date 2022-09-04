import * as React from "react";
import emailjs from 'emailjs-com';
import { render } from "@testing-library/react";


function getRealTime() {
    const currentTime = Date.now();
    var d = new Date(currentTime)
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(time)
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
  
  (async function () {
    let reduceTime = 0;
    while (true) {
      reduceTime = getRealTime();
      await sleep(reduceTime);
    }
  })()
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function sendEmail(e){
    e.preventDefault();
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
        e.target.reset()
}
function Drink() {
  return (
<div>
    <div className="container">
        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </div>
        </form>
    </div>
</div>
  );
}

export default Drink;