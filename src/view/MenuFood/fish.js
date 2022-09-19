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
      <img src={fish1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ของปลา : ปลาจัดได้ว่าเป็นแหล่งอาหารโปรตีนชั้นเยี่ยม สามารถย่อยได้ง่าย เพราะเมื่อระบบย่อยทำงานไม่หนัก ก็จะทำให้ย่อยอาหารได้เร็วขึ้น และดูดซึมสารอาหารนำไปใช้งานได้ดีขึ้น ช่วยในการซ่อมแซมส่วนที่สึกหรอ ช่วยเสริมสร้างให้ร่างกายมีการพัฒนาด้านต่างๆที่ดี ปลาที่อุดมไปด้วยกรดไขมันโอเมก้า 3 สามารถลดความเสี่ยงของการเสื่อมสภาพของดวงตาซึ่งเกิดจากอายุที่มากขึ้น</p>
        <img src={fish2} style={{
          width:400
        }}></img>
        <p>เมี่ยงปลาเผ่า 150 kcal</p>
        <img src={fish3} style={{
          width:400
        }}></img>
        <p>ปลากระพงนึ่งมะนาว 155 kcal</p>
        <img src={fish4} style={{
          width:400
        }}></img>
        <p>ปลาต้มซีอิ้ว 336 kcal</p>
        <img src={fish5} style={{
          width:400
        }}></img>
        <p>ยําปลาทู 135 kcal</p>
        <img src={fish6} style={{
          width:400
        }}></img>
        <p>แกงส้มปลากระพง 143 kcal</p>
      </Container>
    </div>
  );
}

export default Fish;
