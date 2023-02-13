import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
      // console.log("Uppercase button was clicked");
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("converted to uppercase","success")
  }

  const handleDwClick = () => {
    // console.log("Lowercase button was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success")
}

const handleClearClick = () => {
  // console.log("Clear text button was clicked");
  let newtext = "";
  setText(newtext);
  props.showAlert("Text was cleared","success")
}

const handleDownloadTxtFileClick = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert("File was downloaded","success")
}

const handleSpeechClick = () => {
  // console.log("Text to speech button was clicked");
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Text to speech output completed","success")
}

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleTextCopy = ()=>{
    let text = document.getElementById("myTextBox");
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text was copied to clipboard","success")

  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces were removed","success")
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
       
        <h1>{props.heading}</h1>
        
          <div className="mb-3">
              
              <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myTextBox" rows="10"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleDwClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleSpeechClick}>Text to speech</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleDownloadTxtFileClick}>Download text file</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleTextCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>

    </>
  )
}
