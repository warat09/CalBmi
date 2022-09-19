import React from 'react'
import {Container} from 'reactstrap';

import egg1 from '../../images/Food/egg/egg1.jpg'
import egg2 from '../../images/Food/egg/egg2.jpg'
import egg3 from '../../images/Food/egg/egg3.jpg'
import egg4 from '../../images/Food/egg/egg4.jpg'
import egg5 from '../../images/Food/egg/egg5.jpg'
import egg6 from '../../images/Food/egg/egg6.jpg'

function Egg() {
  return (
    <div>
      <div className="header">
        <h1>เมนูไข่</h1>
      </div>
      <Container>
        <img src={egg1} style={{
          width:400
        }}></img>
        <p>ประโยชน์ มีสารอาหารที่สำคัญสำหรับสุขภาพยังประกอบไปด้วย โคลีน และ ลูทีน และยังมีบทบาทในการควบคุมน้ำหนัก ความแข็งแรงของกล้ามเนื้อ การตั้งครรภ์ที่มีคุณภาพ การทำงานของสมอง สุขภาพของดวงตาและอื่น ๆ อีกมากมาย</p>
        <img src={egg2} style={{
          width:400
        }}></img>
        <p>โจ๊กไข่ขาว 78 kcal</p>
        <img src={egg3} style={{
          width:400
        }}></img>
        <p>ต้มจืดไข่น้ำ 294 kcal</p>
        <img src={egg4} style={{
          width:400
        }}></img>
        <p>บวบผัดไข่ 210 kcal</p>
        <img src={egg5} style={{
          width:400
        }}></img>
        <p>ฟักทองผัดไข่ 255 kcal</p>
        <img src={egg6} style={{
          width:400
        }}></img>
        <p>ไข่ตุ๋น 120 kcal</p> 
      </Container>
    </div>
  );
}

export default Egg;
