import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  
  
 const  [ mode , setMode ] = useState('light')

 const OC = () =>{
    let body = document.querySelector("body");
    let head = document.querySelector("h1");
    let head2 = document.querySelectorAll("h5");
    let lab = document.querySelector(".form-label");
 
  if(mode === 'light'){
    setMode ('dark')
      body.style.backgroundColor = "rgb(0, 0, 0)";
      head.style.color = "white";
      head2.forEach(h5 => h5.style.color = "white");
      lab.style.color = "white";
  }
  else{
    setMode ('light')
    body.style.backgroundColor = "rgb(246, 237, 222)";
    head.style.color = "black";
    head2.forEach(h5 => h5.style.color = "black");
    lab.style.color = "black";
  }
 }

  


  return (
  <>
  <Navbar title="Text Tools"  mode={mode} OC={OC} />
  <Textbox headings="Enter the Text hear "  mode={mode} />
  </>
  );
}

export default App;
