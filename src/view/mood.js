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
  const [State,setState] = useState(-1)
  const moodlink = [angry,sad,badly,smile,happy]
  const moodstate = localStorage.getItem("emo");
  const [moodlist,setMood] = useState("")
  const [text,setText] = useState("")
  const handleclick=(pic)=>{
    setState(pic)
    localStorage.setItem('emo',pic)
  }
  // console.log(moodstate)
  useEffect(()=>{
    setState(moodstate)
  },[])
  useEffect(()=>{
    if(State==0){
      setMood("หงุดหงิด")
      setText("หายหงุดหงิดบ้างแล้วรึยังนะ")
    }
    else if(State==1){
      setMood("หดหู่")
      setText("เธอเก่งมากแล้ว")
    }
    else if (State ==2){
      setMood("กังวล")
      setText("เมื่อหัวใจเหนื่อยล้า จะเศร้าบ้างก็ไม่เป็นไร")
    }
    else if(State==3){
      setMood("สงบ")
      setText("วันนี้ก็รู้สึกดีอีกวันนะ")
    }
    else{
      setMood("รู้สึกดีมาก")
      setText("ขอบคุณวันแห่งความสุข")
    }
  },[State])
  return (  
    <div>
      <div className="header">
        <h1>อารมณ์ (MOOD)</h1>
      </div>
      <p className = "detailp">วันนี้คุณรู้สึกอย่างไรบ้าง</p>
      <Container>
      {State>-1&&
      <div className="BigPicDiv">
          <img src={moodlink[State]} className="BigPic"/>
          <p className = "detailp">{moodlist}</p>
          <p className = "detailp">{text}</p>
      </div>
      }
        
      
      {moodstate==-1 &&
                <div className="emotionDiv">
          
                <div className="Divpic">
                  <button className="angry" onClick ={()=>{
                    handleclick(0)
                  }}></button>
                  <p className = "detailp">หงุดหงิด</p>
                </div>
                <div className="Divpic">
                  <button className="sad" onClick ={()=>{
                    handleclick(1)
                  }}></button>
                  <p className = "detailp">หดหู่</p>
                </div>
                <div className="Divpic">
                  <button className="badly" onClick ={()=>{
                    handleclick(2)
                  }}></button>
                  <p className = "detailp">กังวล</p>
                </div>
                <div className="Divpic">
                  <button className="smile" onClick ={()=>{
                    handleclick(3)
                  }}></button>
                  <p className = "detailp">สงบ</p>
                </div>
                <div className="Divpic">
                  <button className="happy" onClick ={()=>{
                    handleclick(4)
                  }}></button>
                  <p className = "detailp">รู้สึกดีมาก</p>
                </div>
      
              </div>
      }
      </Container>
    </div>
  );
}

export default Mood;
