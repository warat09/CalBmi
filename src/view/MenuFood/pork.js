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
      <img src={pork1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ : เนื้อหมู นอกจากจะอุดมไปด้วยโปรตีนแล้ว ยังเป็นแหล่งของสารอาหารอื่นๆ เช่น  วิตามินบี 1 ช่วยลดอาการเหน็บชา วิตามินเอบำรุงสายตา ยังมีฟอสฟอรัสและไนอาซีน (วิตามินบี3) ซึ่งมีประโยชน์อย่างมากไม่ว่าจะเป็นช่วยในการลดไขมัน ลดการอักเสบของผิวหนัง หรือแม้กระทั่งบำรุงสมอง จะพบมากในเนื้อส่วนที่ไม่ติดมัน</p>
        <img src={pork2} style={{
          width:400
        }}></img>
        <p>แกงจืดเต้าหู้หมูสับ 120 kcal</p>
        <img src={pork3} style={{
          width:400
        }}></img>
        <p>ต้มแซ่บซี่โครงหมู 115 kcal</p>
        <img src={pork4} style={{
          width:400
        }}></img>
        <p>หมูทอดกระเทียมพริกไทย 245 kcal</p>
        <img src={pork5} style={{
          width:400
        }}></img>
        <p>หมูผัดขิง 275 kcal</p>
        <img src={pork6} style={{
          width:400
        }}></img>
        <p>ผัดกะหล่ำปลีหมู 230 kcal</p>
      </Container>
    </div>
  );
}

export default Pork;
