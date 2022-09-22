import React from 'react'
import {Container} from 'reactstrap';

import fish1 from '../../images/Food/fish/fish1.jpg'
import fish2 from '../../images/Food/fish/fish2.jpg'
import fish3 from '../../images/Food/fish/fish3.jpg'
import fish4 from '../../images/Food/fish/fish4.jpg'
import fish5 from '../../images/Food/fish/fish5.jpg'
import fish6 from '../../images/Food/fish/fish6.jpg'

function Fish() {
  return (
    <div>
      <div className="header">
        <h1>เมนูปลา</h1>
      </div>
      <Container>
        <img src={fish1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ของปลา : ปลาจัดได้ว่าเป็นแหล่งอาหารโปรตีนชั้นเยี่ยม สามารถย่อยได้ง่าย เพราะเมื่อระบบย่อยทำงานไม่หนัก ก็จะทำให้ย่อยอาหารได้เร็วขึ้น และดูดซึมสารอาหารนำไปใช้งานได้ดีขึ้น ช่วยในการซ่อมแซมส่วนที่สึกหรอ ช่วยเสริมสร้างให้ร่างกายมีการพัฒนาด้านต่างๆที่ดี ปลาที่อุดมไปด้วยกรดไขมันโอเมก้า 3 สามารถลดความเสี่ยงของการเสื่อมสภาพของดวงตาซึ่งเกิดจากอายุที่มากขึ้น</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={fish2} alt="" />
              <div className="card-body">
                <h2>เมี่ยงปลาเผา 150 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={fish3} alt="" />
              <div className="card-body">
                <h2>ปลากระพงนึ่งมะนาว 155 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={fish4} alt="" />
              <div className="card-body">
                <h2>ปลาต้มซีอิ้ว 336 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={fish5} alt="" />
              <div className="card-body">
                <h2>ยําปลาทู 135 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={fish6} alt="" />
              <div className="card-body">
                <h2>แกงส้มปลากระพง 143 kcal</h2>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fish;
