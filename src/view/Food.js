import * as React from "react";
import {Container} from 'reactstrap';
import { Planet } from 'react-planet';
import { useNavigate } from 'react-router-dom';
import '../css/Food.css'

function Food() {
  const navigate = useNavigate()
  const saved = localStorage.getItem("user");
  const initial = JSON.parse(saved);
  if(initial == null){
    window.location.href = "https://warat09.github.io/CalBmi"
  }
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
          className="icnmid"
          >
          </div>
        }
        open
        orbitRadius={140}
        autoClose
      >
        <button
        onClick={()=>article("Vegetable")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
          <i className="icnvegetable"></i>
        </button>
        <button
        onClick={()=>article("Chicken")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
          <i className="icnchicken"></i>
        </button>
        <button
        onClick={()=>article("Fish")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
          <i className="icnfish"></i>
        </button>
        <button
        onClick={()=>article("Egg")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747'
        }}
        >
          <i className="icnegg"></i>
        </button>
        <button
        onClick={()=>article("Pork")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
          <i className="icnpork"></i>
        </button>
        <button
        onClick={()=>article("Fruit")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
          <i className="icnfruit"></i>
        </button>
        <button
        onClick={()=>article("Water")}
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: '#F36747',
        }}
        >
        <i className="icnwater"></i>
        </button>
      </Planet>
        </div>
      </Container>
    </div>
  );
}

export default Food;
