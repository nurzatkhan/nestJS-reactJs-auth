import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import {useLocation, useNavigate} from 'react-router-dom'
const axios = require ('axios').default



function LoginComponent(props) {
  const navigate = useNavigate();

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [loginError, setLoginError] = useState({error:"", message: ""})
    const [passwordError, setPasswordError] = useState({error:"", message: ""})


    function SendForm(){
      axios.post('http://localhost:7000/auth/login', {email: login, password: password})
      .then((response)=>{
        localStorage.setItem('token', ("Bearer "+response.data.token))
        navigate(`/${response.data.id}`)
      }).catch((error)=>{
        if(error.response){
          if(error.response.data.message === "Email не сушествует"){
            setLoginError({error:"error", message: error.response.data.message})
          }
          if (error.response.data.message === "Некорректный пароль"){
            setPasswordError({error:"error", message: error.response.data.message})
          }
        }
      })}

    function redirectReg(){
      navigate('/Register')
    }
    return (
      <div>
        
          <div className="registrationForm">
          <h2>Authentication</h2>
            <TextField error= {loginError.error} helperText={loginError.message}  id="standard-basic" label="login" variant="standard" value={login} onChange={e=>setLogin(e.target.value)}/>
            <TextField error= {passwordError.error} helperText={passwordError.message} id="standard-basic" label="password" variant="standard" type={"password"} value={password} onChange={e=>setPassword(e.target.value)}/>
            
            <div> 
              <Button variant="text" onClick={redirectReg}>register</Button>
              <Button variant="contained" onClick={SendForm}>Submit</Button> 
            </div>
          </div>
        
      </div>  
        
    )
}

export default LoginComponent;
