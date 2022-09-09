import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBottleWater, faBowlFood,faWeight,faFaceSmile,faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const tabs = [{
    route: "Bmi",
    icon: faWeight,
    label: "Bmi"
  },{
    route: "Drink",
    icon: faBottleWater,
    label: "Drink"
  },{
    route: "Exercise",
    icon: faDumbbell,
    label: "Exercise"
  },{
    route: "Food",
    icon: faBowlFood,
    label: "Food"
  },{
    route: "Mood",
    icon: faFaceSmile,
    label: "Mood"
  }]

const Navigation = (props) => {
	return (
        <div>
        <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top square bg-light rounded" role="navigation">
          <div className="container-fluid">
              <a className="navbar-brand" href="/CalBmi/">Brand</a>
              <Nav className="ml-auto">
                <NavItem>
                  <NavLink to="Bmi" className="nav-link">
                  Bmi
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="Drink" className="nav-link">
                  Drink
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="Exercise" className="nav-link">
                  Exercise
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="Mood" className="nav-link">
                  Mood
                  </NavLink>
                </NavItem>
              </Nav>
          </div>
        </nav>
      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav square bg-light rounded" role="navigation">
        <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </div>
  )
};

export default Navigation;