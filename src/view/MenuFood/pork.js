import React from 'react'
import {Container} from 'reactstrap';

import pork1 from '../../images/Food/pork/pork1.jpg'
import pork2 from '../../images/Food/pork/pork2.jpg'
import pork3 from '../../images/Food/pork/pork3.jpg'
import pork4 from '../../images/Food/pork/pork4.jpg'
import pork5 from '../../images/Food/pork/pork5.jpg'
import pork6 from '../../images/Food/pork/pork6.jpg'

function Pork() {
  return (
    <div>
      <div className="header">
        <h1>เมนูหมู</h1>
      </div>
      <Container>
        <img src={pork1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ : เนื้อหมู นอกจากจะอุดมไปด้วยโปรตีนแล้ว ยังเป็นแหล่งของสารอาหารอื่นๆ เช่น  วิตามินบี 1 ช่วยลดอาการเหน็บชา วิตามินเอบำรุงสายตา ยังมีฟอสฟอรัสและไนอาซีน (วิตามินบี3) ซึ่งมีประโยชน์อย่างมากไม่ว่าจะเป็นช่วยในการลดไขมัน ลดการอักเสบของผิวหนัง หรือแม้กระทั่งบำรุงสมอง จะพบมากในเนื้อส่วนที่ไม่ติดมัน</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={pork2} alt="" />
              <div className="card-body">
                <h2>แกงจืดเต้าหู้หมูสับ 120 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={pork3} alt="" />
              <div className="card-body">
                <h2>ต้มแซ่บซี่โครงหมู 115 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={pork4} alt="" />
              <div className="card-body">
                <h2>หมูทอดกระเทียมพริกไทย 245 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={pork5} alt="" />
              <div className="card-body">
                <h2>หมูผัดขิง 275 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={pork6} alt="" />
              <div className="card-body">
                <h2>ผัดกะหล่ำปลีหมู 230 kcal</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Pork;
