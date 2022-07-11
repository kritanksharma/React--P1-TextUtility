
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Maintext from './Component/Maintext';
import Navbr from './Component/Navbr';

function App() {

  const [mode , setMode]=useState('light')
  const [alertText , setAlertText]=useState('')

  const toggleMode=()=>{
     
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#131111ba'; //light grey 
      showAlert('Dark mode is enabled !' ,'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#d8dde2';
      showAlert('Light mode is enabled !','success');
    }
  }
  
  const showAlert=(message,type)=>{
    setAlertText({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlertText(null);
   }, 1000);
    
    
  }
  return (
    <>
    <Navbr title="Play With Text" mode={mode} toggleMode={toggleMode}></Navbr>
    <Alert alertText={alertText}></Alert>
    <div className="container"><Maintext heading="Enter your text below" mode={mode} showAlert={showAlert}></Maintext>
    </div>
    </>
  );
}

export default App;
