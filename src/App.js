import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const [mode, setMode] = useState('light');//
 const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled","success")
    document.title = "TextAltor-Dark Mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","success")
    document.title = "TextAltor-Light Mode";
  }
 }

  return (
    <>
  {/* <Router> */}
  <Navbar title="TextAltor" AboutText="About TextAltor" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    
      {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>} />
        
          <Route exact path="/about" element={<About />} />
          
        
      </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
