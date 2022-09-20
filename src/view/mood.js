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
  const [state2,setstate2] = useState(0)
  const [state3,setstate3] = useState(0)
  // const [state2,setstate2] = useState(0)
  const [text,setText] = useState("")
  const daystate = localStorage.getItem("ds");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  // today +="1"
  const saved = localStorage.getItem("user");
  const initial = JSON.parse(saved);
  if(initial == null){
    window.location.href = "https://warat09.github.io/CalBmi"
  }
  if(daystate===null){
    localStorage.setItem('ds', today);
    localStorage.setItem('emo',-1)
    

  }
  else if (daystate!==today){
    localStorage.setItem('ds', today); 
    localStorage.setItem('emo',-1)
  }
  const handleclick=(pic)=>{
    setState(pic)
    setstate3(1)
    setstate2(1)
  }
  useEffect(()=>{
    if(moodstate!==null){
      setState(moodstate)
    }
    else{
      setState(-1)
    }
    if(moodstate!=-1){
      setstate2(2)
    }
    console.log(State," : ",state2)
    console.log(moodstate)
    // State>-1&&state2==2
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
        <h1>อารมณ์</h1>
      </div>
      <p className = "detailp">วันนี้คุณรู้สึกอย่างไรบ้าง</p>
      <Container>
        <div style={{
          paddingBottom:100
        }}>
        {(State>-1&&state2==2)&&
      <div className="BigPicDiv">
          <img src={moodlink[State]} className="BigPic"/>
          <p className = "detailp">{moodlist}</p>
          <p className = "detailp">{text}</p>
          <br/>
          <br/>
          <h1 className = "detailp">หวังว่าวันนี้จะดีสำหรับคุณนะ</h1>
      </div>
      }
      {state2===1&&
        <div className="feeling">
            <textarea className ="feelbox" id="w3review" name="w3review" rows="4" cols="50" placeholder="ใส่เรื่องราวของคุณได้ที่นี่"
          ></textarea>
          <br/>
          <button className ="feelbut" onClick={()=>{
            localStorage.setItem('emo',State)
            setstate2(2)
          }}>Ok</button>
        </div>
      }
      
      {moodstate==-1&&state3==0 &&
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
        </div>
      </Container>
    </div>
  );
}

export default Mood;
