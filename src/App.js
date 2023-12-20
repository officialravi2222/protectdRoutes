import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './Protected';


function App() {
  return (
    <div className="App">
     {/* <h1>Hanji</h1> */}
    <div className='layout'>
      <Home/>
      <Contact/>
      <Login/>
    </div>

    <Routes>
       <Route  path="/"  element={<Protected   Value={Home}/>  }></Route>
       <Route  path="/contact"  element={<Protected   Value={Contact}/>  }></Route>
       <Route  path="/login"  element={<Login/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
