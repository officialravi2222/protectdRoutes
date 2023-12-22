import {  useState,useEffect} from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {

    const [userName,setUserName] = useState("");
    const [loginn,setLogin] = useState("")

    const navigate = useNavigate();

    useEffect(()=>{
       let login = localStorage.getItem("Login")
        setLogin(login);

        if(login){
            navigate('/home')   ;
             }
    })

    function handleClick(){
        localStorage.setItem("Login",true);
        console.warn("clicked");
    }
    
    // function handleChange(rock){
    //     console.log(rock)
    //     setUserName(rock.target.value)
    //     console.log("second",rock)
    // }
//    userName&&console.warn("inputUser>>",userName) 

    return(

        
             <div>
                    {loginn?  
                    (<Navbar/>) :
                    (   <div> 
                        <h1>Login Page</h1>
                    {/* <input type="text"  value={userName}  onChange={handleChange}/> */}
                    <input type="text"  value={userName}  />
                    <input type="text"/>
                        <NavLink  onClick={handleClick}  to={"/"} >  Submit</NavLink>
                    </div>)
                    
                   
                    }
             </div>
          )
}

export default Login;