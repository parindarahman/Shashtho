import React, {useContext,useState} from 'react'
import {MyContext} from './MyContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Register(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div className="forum_wrapperR">
            <h3>Register to Shashto</h3>
            <form onSubmit={submitForm} noValidate>
                <div className="form-group">

                    <input name="name" required type="text" value={state.userInfo.name} onChange={onChangeValue} placeholder="enter name"/>
                </div>
                <div className="form-group">

                    <input name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="enter email"/>
                </div>
                <div className="form-group">

                    <input name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="enter password"/>
                </div>
                  <div className="error">{errorMsg} {successMsg}</div>
                  <div className="homepage_center_btn">
                  <button className="logout2" >
                    <ArrowBackIcon onClick={toggleNav}/>
                    <span class="tooltip">LOGIN</span>
                   </button>
                    <button className="homepage_login_btn" type="submit" value="LOGIN" > SIGN UP </button>

                  </div>
            </form>

        </div>

    );
}

export default Register
