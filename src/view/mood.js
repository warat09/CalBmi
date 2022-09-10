import * as React from "react";
import {Container} from 'reactstrap';
import angry from "./../images/Emotion/angry.jpg"
import badly from "./../images/Emotion/badly.jpg"
import happy from "./../images/Emotion/happy.jpg"
import sad from "./../images/Emotion/sad.jpg"
import smile from "./../images/Emotion/smile.jpg"
import "./../css/mood.css"
import {useState} from 'react'



function Mood() {
  const [State,setState] = useState(-1)
  const moodlink = [angry,sad,badly,smile,happy]
  const handleclick=(pic)=>{
    console.log(moodlink[pic])
    setState(pic)
  }
  return (  
    <div>
      <div className="header">
        <h1>อารมณ์ (MOOD)</h1>
      </div>
      <Container>
        <div className="BigPicDiv">
          {State>-1&&<img src={moodlink[State]} className="BigPic"/>}
        </div>
      
        <div className="emotionDiv">
          
          <div className="Divpic">
            <button className="angry" onClick ={()=>{
              handleclick(0)
            }}></button>
            <p className = "detailp">angry</p>
          </div>
          <div className="Divpic">
            <button className="sad" onClick ={()=>{
              handleclick(1)
            }}></button>
          </div>
          <div className="Divpic">
            <button className="badly" onClick ={()=>{
              handleclick(2)
            }}></button>
          </div>
          <button className="smile" onClick ={()=>{
            handleclick(3)
          }}></button>
          <button className="happy" onClick ={()=>{
            handleclick(4)
          }}></button>

        </div>
      </Container>
    </div>
  );
}

export default Mood;
