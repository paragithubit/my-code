
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TestForm from './components/TestForm';
import About from './components/About';
import {useState} from 'react'
import { BrowserRouter as Main ,Route,Link,Routes } from 'react-router-dom';
import Todo from './components/Todo';





function App() {
     
      /* Enable dark mode in TestForm */
    const [mode,setMode]=useState ('light');
    const toogleMode =()=>{
        if(mode=== 'dark'){
           setMode('light')
           document.body.style.backgroundColor='white';
             showAlert('Light mode Enable ','success');
        }
          else{
             setMode('dark')
             document.body.style.backgroundColor='#4670af';
             showAlert('Dark mode Enable ','success');
          }
    }
          /* Alert code */
          const [alert,setAlert]=useState('')
          const showAlert =(message,type)=>{
              setAlert({
                   msg:message,
                   type:type
              })
          } 

          setTimeout(() => {
                setAlert('');
          }, 1500);


  
  return (
    <>
    
     <Main>
     <Navbar title = 'Home' about= 'About' mode={mode} toogleMode={toogleMode}/>
       <Alert alert = {alert}/>
       <div className="container">
          <div className='main-container'>
             <div className='center-container'></div>
          </div>
             <Routes>
            <Route exact path='/' element = { <TestForm mode ={mode}  showAlert={ showAlert} heading='Enter the Text'/>}/>
            <Route exact path='About' element={ <About mode={mode}/>}/>  
           <Route exact path='Todo' element={<Todo/>}/>              
             </Routes>   
         </div>
         </Main>
            
            
        
         
    </> 

     );
}

export default App;
