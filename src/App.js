import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Button from"./components/Button";
function App() {
  const [count, setCount] = useState(0);
     return (
     <div className="container">

         <div className="main-div">
           <div className='center-div'>
             <h1>counter app</h1>
               
                    
                   
                
               <div className='row'>
               
               <button  onClick={()=>setCount(count+1)}>Increase </button>
               <button onClick={()=>setCount(count-1)}>Decrease </button>
               <button  onClick={()=>setCount(0)}>reset</button>
              
               </div>
           </div>
    </div>
    </div> 


  );
}


export default App;
