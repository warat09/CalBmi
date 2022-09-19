import React from 'react'
import {Container} from 'reactstrap';

import vegetable1 from '../../images/Food/vegetable/vegetable1.jpg'
import vegetable2 from '../../images/Food/vegetable/vegetable2.jpg'
import vegetable3 from '../../images/Food/vegetable/vegetable3.jpg'
import vegetable4 from '../../images/Food/vegetable/vegetable4.jpg'
import vegetable5 from '../../images/Food/vegetable/vegetable5.jpg'
import vegetable6 from '../../images/Food/vegetable/vegetable6.jpg'

function Vegetable() {
  return (
    <div>
      <div className="header">
        <h1>เมนูผัก</h1>
      </div>
      <Container>
      <img src={vegetable6} style={{
          width:400
        }}></img>
        <p>ประโยชน์ผัก : เป็นแหล่งสะสมของวิตามินและแร่ธาตุหลายชนิด เป็นแหล่งใยอาหาร ช่วยลดการดูดซึมของคอเลสเตอรอลและไขมัน ช่วยทำให้ระบบย่อย ระบบขับถ่ายได้ดี</p>
        <img src={vegetable2} style={{
          width:400
        }}></img>
        <p>ผัดผักรวม 227.6 kcal</p>
        <img src={vegetable3} style={{
          width:400
        }}></img>
        <p>ต้มจับฉ่าย 15 kcal</p>
        <img src={vegetable4} style={{
          width:400
        }}></img>
        <p>น้ำพริกผักลวก 70 kcal</p>
        <img src={vegetable5} style={{
          width:400
        }}></img>
        <p>ผัดผักบุ้งไฟแดง 210 kcal</p>
        <img src={vegetable1} style={{
          width:400
        }}></img>
        <p>กะหล่ำปลีผัดน้ำปลา 90 kcal</p>
      </Container>
    </div>
  );
}

export default Vegetable;
