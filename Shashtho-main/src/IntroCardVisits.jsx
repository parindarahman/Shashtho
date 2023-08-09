import React from 'react';
import logo from './Images/Doc.svg';

const IntroCardVisits = () =>{
  return (
    <>
      <div className="introCard">
        <img className="logostyle" src={logo} alt="logo" style={{height: 50}} />
        <p><b>Visits</b> page stores and manages all the details you might want to store from a doctors visit</p>
      </div>
    </>
  );
};

export default IntroCardVisits
