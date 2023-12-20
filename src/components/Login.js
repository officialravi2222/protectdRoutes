import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {

    // useEffect(()=>{
    //     localStorage.clear()
    // },[])

function handleClick(){
    
    localStorage.setItem("Login",true);
    console.warn("clicked");
}

    return(
        <div>
                <NavLink  onClick={handleClick}  to="/login">Login</NavLink>
        </div>
    )
}

export default Login;