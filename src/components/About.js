import React from 'react'

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color:"black",
//     backgroundColor:"white"
//   })
//   const [btnText, setbtnText] = useState("Enable dark mode")
  
//  let  toggleStyle = ()=>{
//     if(myStyle.color==="black")
//     {
//           setMyStyle({
//         color:"white",
//         backgroundColor:"black",
//         border:"1px solid white"

//       })
//       setbtnText("Enable light mode")
//     }
//     else
//     {
//       setMyStyle({
//         color:"black",
//         backgroundColor:"white"
        
//       })
//       setbtnText("Enable dark mode")
//     }
//   }
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    border:'2px solid',
    borderColor: props.mode === 'dark'?'white':'black'
  }
  return (
    <div className="container my-2" >
              <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>About us</h1>
              <div className="accordion my-2 mx-2" id="accordionExample" style={myStyle}>
          <div className="accordion-item my-2 mx-2" >
          <h2 className="accordion-header" id="headingOne" >
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Modify your text</strong> 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
              This is a text editing tool which can be used for different applications. It can be used for performing various operations on text.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2 mx-2">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Works in browser</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             This tool works in browser and there is no need to download any application. You can also download the text in a text file directly.
            </div>
          </div>
        </div>
        <div className="accordion-item my-2 mx-2">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Use it for free</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This tool is free to use.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
