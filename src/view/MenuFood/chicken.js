import React from 'react'
import {Container} from 'reactstrap';
import chicken1 from '../../images/Food/chicken/chicken1.jpg'
import chicken2 from '../../images/Food/chicken/chicken2.jpg'
import chicken3 from '../../images/Food/chicken/chicken3.jpg'
import chicken4 from '../../images/Food/chicken/chicken4.jpg'
import chicken5 from '../../images/Food/chicken/chicken5.jpg'
import chicken6 from '../../images/Food/chicken/chicken6.jpg'

function Chicken() {
  return (
    <div>
      <div className="header">
        <h1>เมนูไก่</h1>
      </div>
      <Container>
      <img src={chicken1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ : ไก่เป็นแหล่งโปรตีนที่สำคัญมาก มีไขมันต่ำที่ดีต่อสุขภาพมาก ซึ่งโปรตีนในเนื้อไก่นั้นมีประโยชน์ต่อการสร้างกล้ามเนื้อ เพิ่มความแข็งแรงของกระดูก และสามารถช่วยลดน้ำหนักด้วย</p>
        <img src={chicken2} style={{
          width:400
        }}></img>
        <p>เกะเพราไก่  573 kcal</p>
        <img src={chicken3} style={{
          width:400
        }}></img>
        <p>ต้มยำไก่ 395.4 kcal</p>
        <img src={chicken4} style={{
          width:400
        }}></img>
        <p>ไก่ผัดขิง 225.4 kcal</p>
        <img src={chicken5} style={{
          width:400
        }}></img>
        <p>ราดหน้าผักรวมอกไก่  327 kcal</p>
        <img src={chicken6} style={{
          width:400
        }}></img>
        <p>ลาบอกไก่ 164 kcal</p>
      </Container>
    </div>
  );
}

export default Chicken;
