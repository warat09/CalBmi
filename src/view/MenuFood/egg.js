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
        <img src={egg1} className="row pt-4 mx-auto" style={{
          width:350,
        }}></img>
        <p className="pt-4 ">ประโยชน์ มีสารอาหารที่สำคัญสำหรับสุขภาพยังประกอบไปด้วย โคลีน และ ลูทีน และยังมีบทบาทในการควบคุมน้ำหนัก ความแข็งแรงของกล้ามเนื้อ การตั้งครรภ์ที่มีคุณภาพ การทำงานของสมอง สุขภาพของดวงตาและอื่น ๆ อีกมากมาย</p>
        <div className="cards pt-2">
          <div className="card">
              <img src={egg2} alt="" />
              <div className="card-body">
                <h2>โจ๊กไข่ขาว 78 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={egg3} alt="" />
              <div className="card-body">
                <h2>ต้มจืดไข่น้ำ 294 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={egg4} alt="" />
              <div className="card-body">
                <h2>ฟักทองผัดไข่ 255 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={egg5} alt="" />
              <div className="card-body">
                <h2>ฟักทองผัดไข่ 255 kcal</h2>
              </div>
          </div>
          <div className="card">
              <img src={egg6} alt="" />
              <div className="card-body">
                <h2>ไข่ตุ๋น 120 kcal</h2>
              </div>
          </div>
        </div> 
      </Container>
    </div>
  );
}

export default Egg;
