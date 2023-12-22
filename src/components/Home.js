import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Home = () => {

    const [click, setClick] = useState(null)

    const navigate = useNavigate();

    // useEffect(()=>{
    //    let login = localStorage.getItem("Login")
    //     // setLogin(login);

    //     if(login){
    //         navigate('/home')   ;
    //          }
    // })

    useEffect(()=>{
        let login = localStorage.getItem("Login");
        console.warn("useEffect",login);
        (login)? navigate('/home') : navigate("/")
     },[click])


    function handleClick(){
            // setClick(false)
           
 localStorage.setItem("Login",false)
 setClick( localStorage.setItem("Login",false)
 )
    }
    return(
       <div>
        <h1>This is home</h1>
       <button   onClick={handleClick}>Logout</button>
       </div>
    )
}

export default Home;