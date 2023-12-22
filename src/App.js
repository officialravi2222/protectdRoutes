import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './Protected';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { Reference } from './components/Reference';
import {Form} from './components/Form';


function App() {
  
   useEffect(()=>{
         localStorage.clear()
     },[])


   return (
    <div className="App">
   

    {/* <Routes> */}
       {/* <Route  path="/"  element={<Protected   Component={Home}/>  }></Route> 
       <Route  path="/contact"  element={<Protected  Component={Contact}/>  }></Route>
       <Route  path="/login"  element={<Login/>}></Route>  */}
{/* 
       <Route  path="/contact"  element={<Protected   Value={Contact}/>  }></Route>
       <Route  path="/login"  element={<Login/>}></Route> */}


       {/* <Route  path="/"  element={<Login/>}></Route>
       <Route  path="/home"  element={<Home/>  }></Route>
       <Route  path="/contact"  element={<Contact/>  }></Route>
    </Routes> */}
    <Form/>
    </div>
  );
}

export default App;
