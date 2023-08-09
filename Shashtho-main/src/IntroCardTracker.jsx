import React from 'react';
import logo from './Images/Doc yellow.svg';

const IntroCardTracker = () =>{
  return (
    <>
      <div className="introCard">
        <img className="logostyle" src={logo} alt="logo" style={{height: 50}} />
        <p><b>Tracker</b> page stores and displays a graph of your key health markers. Namely: <b>weight</b>, <b>blood sugar</b>, <b>cholesterol</b>, <b>blood pressure</b>.</p>
      </div>
    </>
  );
};

export default IntroCardTracker
