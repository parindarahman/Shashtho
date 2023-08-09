import React, {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './Images/Asset 1.svg';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = (props) =>{
const [details2, setDetails2] = useState({name:"", email:""});
 function logout () {
  props.Logout();
}


    return (
      <>
      <div className="navlinks">
      <img className="logostyle" src={logo} alt="logo" style={{height: 35}} />

      <NavLink exact activeClassName="active_class" to='/visits'> Visits </NavLink>
      <NavLink exact activeClassName="active_class" to='/tracker'> Tracker </NavLink>
      <NavLink exact activeClassName="active_class" to='/status'> Status </NavLink>
      
      </div>
      </>
    );
};

export default Navbar
