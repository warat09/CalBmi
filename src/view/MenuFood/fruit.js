import React from 'react'
import {Container} from 'reactstrap';

import fruit1 from '../../images/Food/fruit/fruit1.jpg'
import fruit2 from '../../images/Food/fruit/fruit2.jpg'
import fruit3 from '../../images/Food/fruit/fruit3.jpg'
import fruit4 from '../../images/Food/fruit/fruit4.jpg'
import fruit5 from '../../images/Food/fruit/fruit5.jpg'
import fruit6 from '../../images/Food/fruit/fruit6.jpg'

function Fruit() {
  return (
    <div>
      <div className="header">
        <h1>เมนูผลไม้</h1>
      </div>
      <Container>
      <img src={fruit1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ผลไม้ : ผลไม้มีกากใยอาหารและวิตามิน เกลือแร่ที่มีประโยชน์ต่อร่างกายอยู่มากมาย อีกทั้งน้ำและกากใยในผลไม้ช่วยในการขับถ่ายของเสียออกจากร่างกาย จึงช่วยลดน้ำหนักได้</p>
        <img src={fruit2} style={{
          width:400
        }}></img>
        <p>กล้วยน้ำหว้า 88.7 kcal /100g</p>
        <img src={fruit3} style={{
          width:400
        }}></img>
        <p>มะละกอ 42.8 kcal/100g</p>
        <img src={fruit4} style={{
          width:400
        }}></img>
        <p>แก้วมังกร 66 kcal/100g</p>
        <img src={fruit5} style={{
          width:400
        }}></img>
        <p>ฝรั่ง 68.1 kcal /100g</p>
        <img src={fruit6} style={{
          width:400
        }}></img>
        <p>ส้ม 47.1 kcal/100g</p>
      </Container>
    </div>
  );
}

export default Fruit;
