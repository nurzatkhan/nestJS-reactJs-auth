import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
const axios = require ('axios').default

function UpdateDataForm(props) {
  const navigate = useNavigate();
  const {id} = useParams()
  const [login, setLogin] = useState()
  const [name, setName] = useState()
  const [surname, setSurname] = useState()


  function SendForm(){
  axios({
    method: 'put',
    url: `http://localhost:7000/auth/update/${id}`,
    data: {email: login, name: name, surname: surname},
    headers :{Authorization: localStorage.getItem('token'),}
  })
  .then((response)=>{
    navigate(`/${id}`)
  }).catch((response)=>{
    console.log(response)
  })}
  
    return (
        <div className="registrationForm">
          <h2>UpdateDataForm</h2>
      <TextField id="standard-basic" label="login" variant="standard" value={login} onChange={e=>setLogin(e.target.value)}/>
      <TextField id="standard-basic" label="name" variant="standard" value={name} onChange={e=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="surname" variant="standard" value={surname} onChange={e=>setSurname(e.target.value)}/>
      <Button variant="contained" onClick={SendForm}>Text</Button> 
        </div>
      
    )
}

export default UpdateDataForm;