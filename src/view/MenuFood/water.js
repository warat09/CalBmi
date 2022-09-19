import React from 'react'
import {Container} from 'reactstrap';

import water1 from '../../images/Food/water/water1.jpg'
import water2 from '../../images/Food/water/water2.jpg'
import water3 from '../../images/Food/water/water3.jpg'
import water4 from '../../images/Food/water/water4.jpg'
import water5 from '../../images/Food/water/water5.jpg'
import water6 from '../../images/Food/water/water6.jpg'

function Water() {
  return (
    <div>
      <div className="header">
        <h1>เมนูน้ำ</h1>
      </div>
      <Container>
      <img src={water1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ : เป็นสารอาหารที่สำคัญต่อร่างกาย เพราะในร่างกายของคนเรามีน้ำเป็นส่วนประกอบถึง 4/5 ของน้ำหนักตัว เป็นสิ่งที่ทุกคนต้องบริโภคเป็นประจำทุกวัน น้ำมีประโยชน์มากมาย</p>
        <img src={water2} style={{
          width:400
        }}></img>
        <p>กล้วยน้ำหว้า 88.7 kcal /100g</p>
        <img src={water3} style={{
          width:400
        }}></img>
        <p>น้ำขิง 80 kcal</p>
        <img src={water4} style={{
          width:400
        }}></img>
        <p>ชาเขียวไม่ใส่นม 55 kcal</p>
        <img src={water5} style={{
          width:400
        }}></img>
        <p>น้ำเต้าหู้ 54 kcal</p>
        <img src={water6} style={{
          width:150
        }}></img>
        <p>น้ำเปล่า 0 kcal</p>
      </Container>
    </div>
  );
}

export default Water;
