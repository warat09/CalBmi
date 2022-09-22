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
        <img src={vegetable6} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ผัก : เป็นแหล่งสะสมของวิตามินและแร่ธาตุหลายชนิด เป็นแหล่งใยอาหาร ช่วยลดการดูดซึมของคอเลสเตอรอลและไขมัน ช่วยทำให้ระบบย่อย ระบบขับถ่ายได้ดี</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={vegetable2} alt="" />
              <div className="card-body">
                <h2>ผัดผักรวม 227.6 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={vegetable3} alt="" />
              <div className="card-body">
                <h2>ต้มจับฉ่าย 15 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={vegetable4} alt="" />
              <div className="card-body">
                <h2>น้ำพริกผักลวก 70 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={vegetable5} alt="" />
              <div className="card-body">
                <h2>ผัดผักบุ้งไฟแดง 210 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={vegetable1} alt="" />
              <div className="card-body">
                <h2>กะหล่ำปลีผัดน้ำปลา 90 kcal</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Vegetable;
