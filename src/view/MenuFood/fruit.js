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
        <img src={fruit1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ผลไม้ : ผลไม้มีกากใยอาหารและวิตามิน เกลือแร่ที่มีประโยชน์ต่อร่างกายอยู่มากมาย อีกทั้งน้ำและกากใยในผลไม้ช่วยในการขับถ่ายของเสียออกจากร่างกาย จึงช่วยลดน้ำหนักได้</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={fruit2} alt="" />
              <div className="card-body">
                <h2>กล้วยน้ำหว้า 88.7 kcal /100g</h2>
              </div>
          </div>
          <div className="card">
              <img src={fruit3} alt="" />
              <div className="card-body">
                <h2>มะละกอ 42.8 kcal/100g</h2>
              </div>
          </div>
          <div className="card">
              <img src={fruit4} alt="" />
              <div className="card-body">
                <h2>แก้วมังกร 66 kcal/100g</h2>
              </div>
          </div>
          <div className="card">
              <img src={fruit5} alt="" />
              <div className="card-body">
                <h2>ฝรั่ง 68.1 kcal /100g</h2>
              </div>
          </div>
          <div className="card">
              <img src={fruit6} alt="" />
              <div className="card-body">
                <h2>ส้ม 47.1 kcal/100g</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fruit;
