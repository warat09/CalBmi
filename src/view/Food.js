import * as React from "react";
import {Container} from 'reactstrap';
import { Planet } from 'react-planet';
import { useNavigate } from 'react-router-dom';
import '../css/Food.css'

function Food() {
  const navigate = useNavigate()
  const article = (path) =>{
    navigate(`/${path}`)
  }
  return (
    <div>
      <div className="header">
        <h1>อาหาร</h1>
      </div>
      <Container>
        <div className="center">
          <Planet
        centerContent={
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: '50%',
              backgroundColor: '#1da8a4'
            }}
          />
        }
        open
        orbitRadius={150}
        autoClose
      >
        <button
        onClick={()=>article("Vegetable")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          ผัก
        </button>
        <button
        onClick={()=>article("Chicken")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          ไก่
        </button>
        <button
        onClick={()=>article("Fish")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          ปลา
        </button>
        <button
        onClick={()=>article("Egg")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          ไข่
        </button>
        <button
        onClick={()=>article("Pork")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          หมู
        </button>
        <button
        onClick={()=>article("Fruit")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
          ผลไม้
        </button>
        <button
        onClick={()=>article("Water")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
        >
        น้ำ
        </button>
      </Planet>
        </div>
      </Container>
    </div>
  );
}

export default Food;
