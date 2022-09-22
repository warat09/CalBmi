import React from 'react'
import {Container} from 'reactstrap';

import water1 from '../../images/Food/water/water1.jpg'
import water2 from '../../images/Food/water/water2.jpg'
import water3 from '../../images/Food/water/water3.jpg'
import water4 from '../../images/Food/water/water4.jpg'
import water5 from '../../images/Food/water/water5.jpg'
import water6 from '../../images/Food/water/water6.webp'

function Water() {
  return (
    <div>
      <div className="header">
        <h1>เมนูน้ำ</h1>
      </div>
      <Container>
        <img src={water1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ : เป็นสารอาหารที่สำคัญต่อร่างกาย เพราะในร่างกายของคนเรามีน้ำเป็นส่วนประกอบถึง 4/5 ของน้ำหนักตัว เป็นสิ่งที่ทุกคนต้องบริโภคเป็นประจำทุกวัน น้ำมีประโยชน์มากมาย</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={water2} alt="" />
              <div className="card-body">
                <h2>น้ำเสาวรส 60 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={water3} alt="" />
              <div className="card-body">
                <h2>น้ำขิง 80 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={water4} alt="" />
              <div className="card-body">
                <h2>ชาเขียวไม่ใส่นม 55 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={water5} alt="" />
              <div className="card-body">
                <h2>น้ำเต้าหู้ 54 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={water6} alt="" />
              <div className="card-body">
                <h2>น้ำเปล่า 0 kcal</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Water;
