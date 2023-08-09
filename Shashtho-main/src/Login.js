import React, {useContext, useState} from 'react'
import {MyContext} from './MyContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }


    return(

        <div className="forum_wrapper">
            <h3>Login to Shashto</h3>
            <form  onSubmit={submitForm} noValidate>
                <div className="form-group">
                    <input name="email" type="email" placeholder="email" value={state.userInfo.email} onChange={onChangeValue} />
                </div>
                <div className="form-group">
                    <input name="password" type="password" placeholder="password" value={state.userInfo.password} onChange={onChangeValue} />
                </div>
                <div className="error">{errorMsg} {successMsg}</div>
                <div className="homepage_center_btn">
                <button className="logout2" >
                  <ArrowBackIcon onClick={toggleNav}/>
                  <span class="tooltip">REGISTER</span>
                 </button>
                  <button className="homepage_login_btn" type="submit" value="LOGIN" > LOGIN </button>
                </div>
            </form>

        </div>
    );
}

export default Login;
