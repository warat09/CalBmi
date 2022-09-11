import React, { useState, useRef, useEffect } from 'react'
import {Container} from 'reactstrap';

function Exercise() {
    
    const Ref = useRef(null);
  
    const [timer, setTimer] = useState('00:01:00');
    const [Second, setSecond] = useState(0);

  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
                    setSecond(total/1000)
        if (total >= 0) {
  
            setTimer(
                (hours > 9  ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    
    const clearTimer = (e) => { 
        setTimer('00:01:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }
    const getDeadTimeTo = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + Second);
        return deadline;
    }
    const startDeadTime = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const onClickStart = () => {
        clearTimer(getDeadTime());
    }
    const onClickStop = () => {
        clearInterval(Ref.current);
    }
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    const onClickStarto = () => {
        startDeadTime(getDeadTimeTo());
    }
  
    return (
        <div>
            <div className="header">
                <h1>ออกกำลังกาย (EXERCISE)</h1>
            </div>
            <Container>
                <h1>{timer}</h1>
                <button onClick={onClickStart}>Start</button>
                <button onClick={onClickStarto}>Startต่อ</button>
                <button onClick={onClickStop}>Stop</button>
                <button onClick={onClickReset}>Reset</button>
            </Container>
        </div>
    )
}

export default Exercise;
