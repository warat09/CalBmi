import * as React from "react";
import {Container} from 'reactstrap';
import angry from "./../images/Emotion/angry.jpg"
import badly from "./../images/Emotion/badly.jpg"
import happy from "./../images/Emotion/happy.jpg"
import sad from "./../images/Emotion/sad.jpg"
import smile from "./../images/Emotion/smile.jpg"
import "./../css/mood.css"
import {useState,useEffect} from 'react'



function Mood() {
  const variableToString = varobj =>Object.keys(varobj)[0]
  const [State,setState] = useState(-1)
  const moodlink = [angry,sad,badly,smile,happy]
  const [moodlist,setMood] = useState("")
  const handleclick=(pic)=>{
    // console.log(moodlink[pic])
    setState(pic)
  }
  useEffect(()=>{
    if(State==0){
      setMood("Angry")
    }
    else if(State==1){
      setMood("Sad")
    }
    else if (State ==2){
      setMood("Badly")
    }
    else if(State==3){
      setMood("Smile")
    }
    else{
      setMood("Happy")
    }
  },[State])
  return (  
    <div>
      <div className="header">
        <h1>อารมณ์ (MOOD)</h1>
      </div>
      <Container>
      {State>-1&&
      <div className="BigPicDiv">
          <img src={moodlink[State]} className="BigPic"/>
          {/* {console.log(moodlink[State])}
          {console.log(variableToString(moodlink[State]))} */}
          {/* {console.log(moodlist)} */}
          <p className = "detailp">{moodlist}</p>
          <p className = "detailp">text here</p>
      </div>
      }
        
      
        <div className="emotionDiv">
          
          <div className="Divpic">
            <button className="angry" onClick ={()=>{
              handleclick(0)
            }}></button>
            <p className = "detailp">Angry</p>
          </div>
          <div className="Divpic">
            <button className="sad" onClick ={()=>{
              handleclick(1)
            }}></button>
            <p className = "detailp">Sad</p>
          </div>
          <div className="Divpic">
            <button className="badly" onClick ={()=>{
              handleclick(2)
            }}></button>
            <p className = "detailp">Badly</p>
          </div>
          <div className="Divpic">
            <button className="smile" onClick ={()=>{
              handleclick(3)
            }}></button>
            <p className = "detailp">Smile</p>
          </div>
          <div className="Divpic">
            <button className="happy" onClick ={()=>{
              handleclick(4)
            }}></button>
            <p className = "detailp">Happy</p>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Mood;
