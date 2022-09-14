import React, { useState, useRef, useEffect } from 'react'
import Exercise1 from '../images/Exercise/v-ups.jpg'
import Exercise2 from '../images/Exercise/SitUp.jpg'
import Exercise3 from '../images/Exercise/Plank.jpg'
import Exercise4 from '../images/Exercise/Mountainclimber.jpg'
import Exercise5 from '../images/Exercise/Bicyclecrunch.jpg'

import {Container} from 'reactstrap';
import '../css/Exercise.css'


function Exercise() {
    
    const Ref = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);
    const Ref5 = useRef(null);
  
    const [timer, setTimer] = useState('00:01:00');
    const [Second, setSecond] = useState(0);
    const [start,setstart] = useState('begin')

    const [timer2, setTimer2] = useState('00:01:00');
    const [Second2, setSecond2] = useState(0);
    const [start2,setstart2] = useState('begin')

    const [timer3, setTimer3] = useState('00:01:00');
    const [Second3, setSecond3] = useState(0);
    const [start3,setstart3] = useState('begin')

    const [timer4, setTimer4] = useState('00:01:00');
    const [Second4, setSecond4] = useState(0);
    const [start4,setstart4] = useState('begin')

    const [timer5, setTimer5] = useState('00:01:00');
    const [Second5, setSecond5] = useState(0);
    const [start5,setstart5] = useState('begin')

  
  
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
    const startTimer2 = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
                    setSecond2(total/1000)
        if (total >= 0) {
  
            setTimer2(
                (hours > 9  ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const startTimer3 = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
                    setSecond3(total/1000)
        if (total >= 0) {
  
            setTimer3(
                (hours > 9  ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const startTimer4 = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
                    setSecond4(total/1000)
        if (total >= 0) {
  
            setTimer4(
                (hours > 9  ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const startTimer5 = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
                    setSecond5(total/1000)
        if (total >= 0) {
  
            setTimer5(
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
    const clearTimer2 = (e) => { 
        setTimer2('00:01:00');
        if (Ref2.current) clearInterval(Ref2.current);
        const id = setInterval(() => {
            startTimer2(e);
        }, 1000)
        Ref2.current = id;
    }
    const clearTimer3 = (e) => { 
        setTimer3('00:01:00');
        if (Ref3.current) clearInterval(Ref3.current);
        const id = setInterval(() => {
            startTimer3(e);
        }, 1000)
        Ref3.current = id;
    }
    const clearTimer4 = (e) => { 
        setTimer4('00:01:00');
        if (Ref4.current) clearInterval(Ref4.current);
        const id = setInterval(() => {
            startTimer4(e);
        }, 1000)
        Ref4.current = id;
    }
    const clearTimer5 = (e) => { 
        setTimer5('00:01:00');
        if (Ref5.current) clearInterval(Ref5.current);
        const id = setInterval(() => {
            startTimer5(e);
        }, 1000)
        Ref5.current = id;
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
    const getDeadTimeTo2 = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + Second2);
        return deadline;
    }
    const getDeadTimeTo3 = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + Second3);
        return deadline;
    }
    const getDeadTimeTo4 = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + Second4);
        return deadline;
    }
    const getDeadTimeTo5 = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + Second5);
        return deadline;
    }

    const startDeadTime = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const startDeadTime2 = (e) => {
        if (Ref2.current) clearInterval(Ref2.current);
        const id = setInterval(() => {
            startTimer2(e);
        }, 1000)
        Ref2.current = id;
    }
    const startDeadTime3 = (e) => {
        if (Ref3.current) clearInterval(Ref3.current);
        const id = setInterval(() => {
            startTimer3(e);
        }, 1000)
        Ref3.current = id;
    }
    const startDeadTime4 = (e) => {
        if (Ref4.current) clearInterval(Ref4.current);
        const id = setInterval(() => {
            startTimer4(e);
        }, 1000)
        Ref4.current = id;
    }
    const startDeadTime5 = (e) => {
        if (Ref5.current) clearInterval(Ref5.current);
        const id = setInterval(() => {
            startTimer5(e);
        }, 1000)
        Ref5.current = id;
    }


    const onClickStart = () => {
        setstart('start')
        clearTimer(getDeadTime());
    }
    const onClickStop = () => {
        setstart('pause')
        clearInterval(Ref.current);
    }
    const onClickReset = () => {
        clearInterval(Ref.current);
        setstart('begin')
        setTimer('00:01:00');
    }
    const onClickStarto = () => {
        setstart('continue')
        startDeadTime(getDeadTimeTo());
    }

    const onClickStart2 = () => {
        setstart2('start')
        clearTimer2(getDeadTime());
    }
    const onClickStop2 = () => {
        setstart2('pause')
        clearInterval(Ref2.current);
    }
    const onClickReset2 = () => {
        clearInterval(Ref2.current);
        setstart2('begin')
        setTimer2('00:01:00');
    }
    const onClickStarto2 = () => {
        setstart2('continue')
        startDeadTime2(getDeadTimeTo2());
    }

    const onClickStart3 = () => {
        setstart3('start')
        clearTimer3(getDeadTime());
    }
    const onClickStop3 = () => {
        setstart3('pause')
        clearInterval(Ref3.current);
    }
    const onClickReset3 = () => {
        clearInterval(Ref3.current);
        setstart3('begin')
        setTimer3('00:01:00');
    }
    const onClickStarto3 = () => {
        setstart3('continue')
        startDeadTime3(getDeadTimeTo3());
    }

    const onClickStart4 = () => {
        setstart4('start')
        clearTimer4(getDeadTime());
    }
    const onClickStop4 = () => {
        setstart4('pause')
        clearInterval(Ref4.current);
    }
    const onClickReset4 = () => {
        clearInterval(Ref4.current);
        setstart4('begin')
        setTimer4('00:01:00');
    }
    const onClickStarto4 = () => {
        setstart4('continue')
        startDeadTime4(getDeadTimeTo4());
    }

    const onClickStart5 = () => {
        setstart5('start')
        clearTimer5(getDeadTime());
    }
    const onClickStop5 = () => {
        setstart5('pause')
        clearInterval(Ref5.current);
    }
    const onClickReset5 = () => {
        clearInterval(Ref5.current);
        setstart5('begin')
        setTimer5('00:01:00');
    }
    const onClickStarto5 = () => {
        setstart5('continue')
        startDeadTime5(getDeadTimeTo5());
    }
  
    return (
        <div>
            <div className="header">
                <h1>ออกกำลังกาย (EXERCISE)</h1>
            </div>
            <Container>
            <div className="cards">
                <div className="card">
                    <img src={Exercise1} alt="" />
                    <div className="card-body">
                    <h2>ท่าที่ 1 v-ups ✨</h2>
                    <h5>ท่าออกกำลังกายลดหน้าท้อง</h5>
                    <p>💁‍♀️ ท่านี้ก็จะช่วยสร้างกล้ามหน้าท้องงามๆ ได้ไม่แพ้กัน โดยจับเวลา 1 นาที ทำทั้งหมด 5 เซ็ต</p>
                    <div className="text-center text-md-right">
                        <h1>{timer}</h1>
                        {
                            start === 'begin' &&
                            <button className="start" onClick={onClickStart}>Start</button>
                        }
                        {
                            start === 'begin' &&
                            <button className="stopdis" onClick={onClickStop} disabled>Stop</button>
                        }
                        {
                            start === 'start' &&
                            <button className="pause" onClick={onClickStop}>Pause</button>
                        }
                        {
                            start === 'start' &&
                            <button className="stop" onClick={onClickReset}>Stop</button>
                        }
                        {
                            start === 'pause' &&
                            <button className="start" onClick={onClickStarto}>Continue</button>
                        }
                        {
                            start === 'pause' &&
                            <button className="stop" onClick={onClickReset}>Stop</button>
                        }
                        {
                            start === 'continue' &&
                            <button className="pause" onClick={onClickStop}>Pause</button>
                        }
                        {
                            start === 'continue' &&
                            <button className="stop" onClick={onClickReset}>Stop</button>
                        }
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Exercise2} alt="" />
                    <div className="card-body">
                    <h2>ท่าที่ 2 Sit Up ✨</h2>
                    <h5>ท่าออกกำลังกายลดหน้าท้อง</h5>
                    <p>💁‍♀️ ท่าเบสิกของการลดหน้าท้อง ให้ทำ 5 เซ็ต เซ็ตละ 15-20 ครั้ง</p>
                    <div className="text-center text-md-right">
                        <h1>{timer2}</h1>
                        {
                            start2 === 'begin' &&
                            <button className="start" onClick={onClickStart2}>Start</button>
                        }
                        {
                            start2 === 'begin' &&
                            <button className="stopdis" onClick={onClickStop2} disabled>Stop</button>
                        }
                        {
                            start2 === 'start' &&
                            <button className="pause" onClick={onClickStop2}>Pause</button>
                        }
                        {
                            start2 === 'start' &&
                            <button className="stop" onClick={onClickReset2}>Stop</button>
                        }
                        {
                            start2 === 'pause' &&
                            <button className="start" onClick={onClickStarto2}>Continue</button>
                        }
                        {
                            start2 === 'pause' &&
                            <button className="stop" onClick={onClickReset2}>Stop</button>
                        }
                        {
                            start2 === 'continue' &&
                            <button className="pause" onClick={onClickStop2}>Pause</button>
                        }
                        {
                            start2 === 'continue' &&
                            <button className="stop" onClick={onClickReset2}>Stop</button>
                        }
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Exercise3} alt="" />
                    <div className="card-body">
                    <h2>ท่าที่ 3 Plank ✨</h2>
                    <h5>ท่าออกกำลังกายลดหน้าท้อง</h5>
                    <p>💁‍♀️ ท่านี้ต้องฮึดกันหน่อยน้าา จับเวลา 5 เซ็ต เซ็ตละ 1 นาที เวลาทำก็ให้หายใจเข้าออก-ลึกๆ แล้วก็เกร็งหน้าท้องเอาไว้ด้วย</p>
                    <div className="text-center text-md-right">
                        <h1>{timer3}</h1>
                        {
                            start3 === 'begin' &&
                            <button className="start" onClick={onClickStart3}>Start</button>
                        }
                        {
                            start3 === 'begin' &&
                            <button className="stopdis" onClick={onClickStop3} disabled>Stop</button>
                        }
                        {
                            start3 === 'start' &&
                            <button className="pause" onClick={onClickStop3}>Pause</button>
                        }
                        {
                            start3 === 'start' &&
                            <button className="stop" onClick={onClickReset3}>Stop</button>
                        }
                        {
                            start3 === 'pause' &&
                            <button className="start" onClick={onClickStarto3}>Continue</button>
                        }
                        {
                            start3 === 'pause' &&
                            <button className="stop" onClick={onClickReset3}>Stop</button>
                        }
                        {
                            start3 === 'continue' &&
                            <button className="pause" onClick={onClickStop3}>Pause</button>
                        }
                        {
                            start3 === 'continue' &&
                            <button className="stop" onClick={onClickReset3}>Stop</button>
                        }
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Exercise4} alt="" />
                    <div className="card-body">
                    <h2>ท่าที่ 4 Mountain climber ✨</h2>
                    <h5>ท่าออกกำลังกายลดหน้าท้อง</h5>
                    <p>💁‍♀️ ทำท่าเหมือนเรากำลังปีนเข่า ทำ 5 เซ็ต เซ็ตละ 20 ครั้ง</p>
                        <div className="text-center text-md-right">
                            <h1>{timer4}</h1>
                            {
                                start4 === 'begin' &&
                                <button className="start" onClick={onClickStart4}>Start</button>
                            }
                            {
                                start4 === 'begin' &&
                                <button className="stopdis" onClick={onClickStop4} disabled>Stop</button>
                            }
                            {
                                start4 === 'start' &&
                                <button className="pause" onClick={onClickStop4}>Pause</button>
                            }
                            {
                                start4 === 'start' &&
                                <button className="stop" onClick={onClickReset4}>Stop</button>
                            }
                            {
                                start4 === 'pause' &&
                                <button className="start" onClick={onClickStarto4}>Continue</button>
                            }
                            {
                                start4 === 'pause' &&
                                <button className="stop" onClick={onClickReset4}>Stop</button>
                            }
                            {
                                start4 === 'continue' &&
                                <button className="pause" onClick={onClickStop4}>Pause</button>
                            }
                            {
                                start4 === 'continue' &&
                                <button className="stop" onClick={onClickReset4}>Stop</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Exercise5} alt="" />
                    <div className="card-body">
                    <h2>ท่าที่ 5 Bicycle crunch ✨</h2>
                    <h5>ท่าออกกำลังกายลดหน้าท้อง</h5>
                    <p>💁‍♀️ ท่านี้ให้เอาศอกมาแตะเข่าอีกข้าง ทำสลับกับไปมา 5 เซ็ต เซ็ตละ 20 ครั้ง</p>
                        <div className="text-center text-md-right">
                            <h1>{timer5}</h1>
                            {
                                start5 === 'begin' &&
                                <button className="start" onClick={onClickStart5}>Start</button>
                            }
                            {
                                start5 === 'begin' &&
                                <button className="stopdis" onClick={onClickStop5} disabled>Stop</button>
                            }
                            {
                                start5 === 'start' &&
                                <button className="pause" onClick={onClickStop5}>Pause</button>
                            }
                            {
                                start5 === 'start' &&
                                <button className="stop" onClick={onClickReset5}>Stop</button>
                            }
                            {
                                start5 === 'pause' &&
                                <button className="start" onClick={onClickStarto5}>Continue</button>
                            }
                            {
                                start5 === 'pause' &&
                                <button className="stop" onClick={onClickReset5}>Stop</button>
                            }
                            {
                                start5 === 'continue' &&
                                <button className="pause" onClick={onClickStop5}>Pause</button>
                            }
                            {
                                start5 === 'continue' &&
                                <button className="stop" onClick={onClickReset5}>Stop</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Exercise;
