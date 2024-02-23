import React, { useState } from 'react'

function TestForm(props) {

     const [text,setText] =useState('');

               /* Uppercase*/
       const handleupclick =()=>{
          // console.log ('Upper case is clicked');
             let newText =   text.toUpperCase();
                setText(newText);             
                props.showAlert ('UpperCase was cliked','success');
       }
              /*Lower Case*/
          const handleloclick =()=>{
           // console.log ('lower case is clicked'); 
              let newText =text.toLowerCase();
                setText(newText);
                props.showAlert ('LowerCase was cliked','success');
          }
            
             /*Clear Case*/
              const handleclclick =()=>{
                 // console.log ('clear text')
                    let newText = '';
                      setText(newText)
                      props.showAlert ('Clear text','success');                  
              }  
              const handleonchange =(event)=>{
               // console.log ('on changes')
                  setText(event.target.value)
             }          
  return (
    <>
    
      <div className={`mb-3 text-${props.mode === 'light'?'dark':'light'}`}>
       <h1>{props.heading}</h1>
      <textarea className="form-control "value={text} onChange={handleonchange}  id="exampleFormControlTextarea1"style={{backgroundColor:props.mode==='dark'?'#13466e':'white'}} placeholder='Enter the text' rows="8"></textarea>
        </div> 

        <button type="button" disabled={text.length===0} onClick={handleupclick} className="btn btn-primary">UpperCase</button>

        <button type="button "disabled={text.length===0} onClick={handleloclick} className="btn btn-primary mx-3">LowerCase</button>
         
        <button type="button "disabled={text.length===0} onClick={handleclclick}  className="btn btn-primary ">Clear</button>

            <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
               <h2>Your Text Summary</h2>
                 <p>{text.split(/\s+/).filter((element)=>{return element.length}).length} words and  {text.length} char</p>
                 <p>{0.008 * text.split(" ").filter((element)=>{return element.length}).length} minute reading time</p>
                    <h3>preview</h3>
                      <p>{text}</p>
          </div>
 </>
  )
}

export default TestForm
