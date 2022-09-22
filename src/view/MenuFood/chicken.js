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
      <img src={chicken1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ : ไก่เป็นแหล่งโปรตีนที่สำคัญมาก มีไขมันต่ำที่ดีต่อสุขภาพมาก ซึ่งโปรตีนในเนื้อไก่นั้นมีประโยชน์ต่อการสร้างกล้ามเนื้อ เพิ่มความแข็งแรงของกระดูก และสามารถช่วยลดน้ำหนักด้วย</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={chicken2} alt="" />
              <div className="card-body">
                <h2>ผัดกะเพรา 573 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={chicken3} alt="" />
              <div className="card-body">
                <h2>เต้มยำไก่ 395.4 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={chicken4} alt="" />
              <div className="card-body">
                <h2>ไก่ผัดขิง 225.4 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={chicken5} alt="" />
              <div className="card-body">
                <h2>ราดหน้าผักรวมอกไก่  327 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={chicken6} alt="" />
              <div className="card-body">
                <h2>ลาบอกไก่ 164 kcal</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Chicken;
