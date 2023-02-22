
import { useState } from 'react';
import './App.css';
import Bar from './component/bar/Bar';
import Des from './component/canvar_tag/Des';

function App() {
  
  const [bg,setbg]=useState("");




  return (
    <div className="App">
      
      <div style={{backgroundColor:`${bg}`}} id='abc1234'>
       <Bar fun={setbg}/>

       <div id='div12234'>
         <div>
            <Des/>
         </div>

         <div className='input'>
         <input i type="color" />
         
          </div>      
   
       </div>
        
 
       


      
      </div> 

    </div>
  );
}

export default App;
