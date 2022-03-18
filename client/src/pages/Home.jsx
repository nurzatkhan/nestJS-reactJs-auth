// import {Redirect} from 'react-router-dom';

import { Button,CircularProgress,LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const axios = require ('axios').default



function Home() {
    const [name, setName]= useState();
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() =>{
      async function load(){
        const response = await fetch(`http://localhost:7000/auth/${id}`, {
          headers: {
            'authorization': localStorage.getItem('token')
          },
        })
        const json = await response.json()
        setName(json)
      }
      load()
    },[])
    
    function deleteToken(){
        localStorage.removeItem('token')
        navigate('/login')
    }
    function UpdateDataForm(){
      navigate(`/UpdateDataForm/${id}`)
  }
 
    
    

    return (
    <>
    <div className="DataName">
        <div>
          <Button variant="contained" onClick={deleteToken}>DeleteToken</Button> 
        </div>  
    </div>
    <div className="nameDAta">
        {!name
                ? <CircularProgress />
                : <div><div>{name.id}</div><div>{name.name}</div><div>{name.email}</div><div>{name.surname}</div></div>
                }
      </div>
      <Button variant="contained" onClick={UpdateDataForm}>UpdateDataForm</Button> 

    </>
    
    )
}

export default Home;