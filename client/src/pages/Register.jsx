import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require ('axios').default

function Register(props) {
  const navigate = useNavigate();
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [loginError, setLoginError] = useState({error:"", message: ""})


    function SendForm(){
    axios.post('http://localhost:7000/auth/register', {email: login, password: password, name: name, surname: surname})
    .then((response)=>{
      // console.log("Bearer "+response.data.token)
      localStorage.setItem('token', ("Bearer "+response.data.token))
      navigate(`/${response.data.id}`)
    }).catch((error)=>{
      if(error.response){
        if(error.response.data.message === "email существует"){
          setLoginError({error:"error", message: error.response.data.message})
        }
      }
    })}

    return (
        <div className="registrationForm">
          <h2>Register form</h2>
      <TextField error= {loginError.error} helperText={loginError.message} id="standard-basic" label="login" variant="standard" value={login} onChange={e=>setLogin(e.target.value)}/>
      <TextField id="standard-basic" label="password" variant="standard" type={"password"}  value={password} onChange={e=>setPassword(e.target.value)}/>
      <TextField id="standard-basic" label="name" variant="standard" value={name} onChange={e=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="surname" variant="standard" value={surname} onChange={e=>setSurname(e.target.value)}/>
      <Button variant="contained" onClick={SendForm}>Submit</Button> 
        </div>
      
    )
}

export default Register;