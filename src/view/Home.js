import * as React from "react";
import emailjs from 'emailjs-com';
function getRealTime() {
  const currentTime = Date.now();
  var d = new Date(currentTime)
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(time)
  if(d.getMinutes() == "19" && d.getSeconds() == "0"){
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
  console.log(e.target)

  // emailjs.sendForm('service_9y5vii1', 'template_y5p8guz', e.target, '0WTwQ785q4wjqSYDp')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
}

function Home() {
  return (
    <div>
        Home
    </div>
  );
}

export default Home;
