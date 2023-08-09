import React, {useState} from 'react';
import logo from './Images/Asset 1.svg';
import homepage from './Images/SVG/homepage.svg';
import background from './Images/Login BG.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



function LoginForum({Login, error}){

  //Conditional Rendering
  const [expandR, setExpandR] = useState(false);
  const showR = () =>{setExpandR(true);}
  const dontShowR = () =>{setExpandR(false);}

  const [expandL, setExpandL] = useState(false);
  const showL = () =>{setExpandL(true);}
  const dontShowL = () =>{setExpandL(false);}

  const [expandH, setExpandH] = useState(true);
  const showH = () =>{setExpandH(true);}
  const dontShowH = () =>{setExpandH(false);}

  const [details, setDetails] = useState({name:"", email:"", password:""});

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }


  return(
    <div className="lg">
    {expandL? //Login
    <div className="forum_wrapper">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <img className="login_logostyle" src={logo} alt="logo" style={{height: 35}} />

          <div className="form-group">
            <input type="text" placeHolder="Name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
          </div>
          <div className="form-group">
            <input type="email" placeHolder="Email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
          </div>
          <div className="form-group">
            <input type="password" placeHolder="Password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </div>
          {(error != "") ? (<div className="error1">{error}</div>) : ""}
          <div className="center_btn">
          <button className="logout" >
            <ArrowBackIcon onClick={()=>{showH();dontShowL()}}/>
            <span class="tooltip">Go Back</span>
           </button>
            <button className="login_btn" type="submit" value="LOGIN" onClick={submitHandler}> LOGIN </button>
          </div>
        </div>
      </form>
      </div> : null}

      {expandR? //Register
      <div className="forum_wrapper">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <img className="login_logostyle" src={logo} alt="logo" style={{height: 35}} />

            <div className="form-group">
              <input type="text" placeHolder="Name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
              <input type="email" placeHolder="Email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
              <input type="password" placeHolder="Password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            {(error != "") ? (<div className="error">mm</div>) : ""}
            <div className="center_btn">
            <button className="logout" >
              <ArrowBackIcon onClick={()=>{showH();dontShowR()}}/>
              <span class="tooltip">Go Back</span>
             </button>
              <button className="login_btn" type="submit" value="LOGIN" onClick={submitHandler}> REGISTER </button>
            </div>
          </div>
        </form>
        </div> : null}

        {expandH? //LandingPage
        <div className="homepage_forum_wrapper">
          <form onSubmit={submitHandler}>
            <div className="form-inner">
              <img className="login_logostyle" src={logo} alt="logo" style={{height: 35}} />
              <p> Your personal health database</p>
              <img className="homepage" src={homepage} alt="homepage"  />
              <div className="homepage_center_btn">
                <button className="homepage_login_btn" type="submit" value="LOGIN" onClick={()=>{showL();dontShowH()}}> LOGIN </button>
                <p> OR </p>
                <button className="homepage_login_btn" type="submit" value="LOGIN" onClick={()=>{showR();dontShowH()}}> REGISTER </button>
              </div>

            </div>
          </form>
          </div> : null}

      <div>
      </div>
      </div>

  )
}

export default LoginForum;
