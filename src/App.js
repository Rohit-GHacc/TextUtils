
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from  './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [theme,setTheme]=useState("null");
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls)=>{
    console.log(cls);
    setTheme(cls);
    removeBodyClasses();
    if(!cls){
    if(mode === 'light'){
      setMode("dark");

      document.body.style.backgroundColor = 'black';
      showAlert('success','Switched to dark mode');
      // setInterval(()=>{
      //   document.title="It is amazing "
      // }, 1500);
      // setInterval(()=>{
      //   document.title="TextUtils - The Analyzer "
      // }, 1000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('success','Switched to light mode');
    }}
    else
    document.body.classList.add('bg-'+cls)
  }

  const [alert,setAlert]=useState(null);
  const showAlert = (type,message)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)},1500
    );
  }
  // const setBgColor = (colour)=>{
  //   document.body.style.backgroundColor = colour;
  //   showAlert('success','Switched to '+colour+' theme');
  // }
  return (
    <>
    <Router>
{/* <Navbar title = 'TextUtils' about="About TextUtils" setBgColor={setBgColor} toggleMode={toggleMode} mode={mode}/> */}

{/* <div className="container">

</div> */}
        <Navbar title = 'TextUtils' about="About TextUtils"  toggleMode={toggleMode} mode={mode}/>
        <Alert alert={alert}></Alert> 
        

{/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={ <Textform title= "Enter your text to analyze below" theme={theme} mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>} />
          
          <Route exact path="/about" element={ <About mode={mode}/>}/>
          
       
        </Routes>
        </Router>
    
    </>
    );
}

export default App;
