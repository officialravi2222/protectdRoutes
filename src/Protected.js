import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {

    const {Value} = props;
    const navigate = useNavigate();

    useEffect(()=>{
       const  login = localStorage.getItem("Login")

        if(login){
            navigate('/login')   
        }
    })
  return (
    <div><Value/></div>
  )
}

export default Protected