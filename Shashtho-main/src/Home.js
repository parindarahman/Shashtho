import {useContext} from 'react'
import {MyContext} from './MyContext'

// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import LoginForum from './LoginForum';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Header from './Header';
import IntroCardVisits from './IntroCardVisits'
import IntroCardTracker from './IntroCardTracker'
import IntroCardStatus from './IntroCardStatus'
import CreateCard from './CreateCard';
import CreateCardAllergy from './CreateCardAllergy';
import CreateCardCardiac from './CreateCardCardiac';
import CreateCardDiabetes from './CreateCardDiabetes';
import CreateCardGenetic from './CreateCardGenetic';
import CreateCardMental from './CreateCardMental';
import CreateCardObesity from './CreateCardObesity';
import Note from './Note';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import Status from "./Status";
import InputBloodSugar from "./InputBloodSugar";
import InputBloodPressure from "./InputBloodPressure";
import InputCholesterol from "./InputCholesterol";
import InputWeight from "./InputWeight";
import Tcholesterol from './Tcholesterol';
import Tbloodsugar from './Tbloodsugar';
import Tbloodpressure from './Tbloodpressure';
import Tweight from './Tweight';
import Retrieve from './Retrieve';
import RetrieveAllergy from './RetrieveAllergy'
import RetrieveCardiac from './RetrieveCardiac'
import RetrieveDiabetes from './RetrieveDiabetes'
import RetrieveGenetic from './RetrieveGenetic'
import RetrieveMental from './RetrieveMental'
import RetrieveObesity from './RetrieveObesity'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
    <div>
    <div className="navbar2">
    <Navbar/>
    <button className="logout" >
      <ExitToAppIcon onClick={logoutUser}/>
      <span class="tooltip">Logout</span>
     </button>
     </div>
    <Switch>
    <Route exact path ="/visits">
        <IntroCardVisits/>
        <CreateCard/>
        <Retrieve/>
      </Route>
      <Route exact path="/tracker">
        <IntroCardTracker/>
        <div className="trackerContainer"><Tweight/><InputWeight/></div>
        <div className="trackerContainer"><Tcholesterol/><InputCholesterol/></div>
        <div className="trackerContainer"><Tbloodpressure/><InputBloodPressure/></div>
        <div className="trackerContainer"><Tbloodsugar/><InputBloodSugar/></div>


      </Route>
      <Route exact path="/status">
      <IntroCardStatus/>
      <Status/>
      </Route>

      <Route exact path="/status/allergy">
        <CreateCardAllergy/>
        <RetrieveAllergy/>
      </Route>
      <Route exact path="/status/cardiac">
        <CreateCardCardiac/>
        <RetrieveCardiac/>
      </Route>
      <Route exact path="/status/diabetes">
        <CreateCardDiabetes/>
        <RetrieveDiabetes/>
      </Route>
      <Route exact path="/status/genetic">
        <CreateCardGenetic/>
        <RetrieveGenetic/>
      </Route>
      <Route exact path="/status/mental">
        <CreateCardMental/>
        <RetrieveMental/>
      </Route>
      <Route exact path="/status/obesity">
        <CreateCardObesity/>
        <RetrieveObesity/>
      </Route>

      <Route path="/">
      <PageNotFound/>
      </Route>

      </Switch>
      <Footer/>
      </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }

}

export default Home;
