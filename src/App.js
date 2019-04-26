import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import 'EventListe.js';
import { BrowserRouter , Route,  } from "react-router-dom";
import {NavLink} from "react-router-dom"
const member1=()=> {
   return (
     <div>
   <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJAWrdxZeZDBj5IJQVJH4u2UGeRMjOX1IbngVw-Xrc_S4kW1QlQ" />
   <p style={{fontSize:"30px"}}>name:fawzi</p>

</div>
   );
}
const member2=()=> {
  return(
    <div>
     
     <img className="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY33GaVBu9DQilKT_IEd1pg-eQkj9QrJSU_4ahSwPbj-Lj7Fj8"  /> 
     <p style={{fontSize:"30px"}}>name:samir</p>

</div>
  );
}

const member3=() =>{
  return (
    <div>
  <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-EE_6t03jyLtzJuYnMNayIMGYdvKbDGi1zyozKNJacmdiEHsL"  /> 
  <p style={{fontSize:"30px"}}>name:ahmed</p>

</div>
  );
}


class App extends Component {
render() {
  return (
 <BrowserRouter>
     <div>
       <center>
<NavLink to="/member1"><button>member1</button></NavLink>
<NavLink to="/member2"><button>member2</button></NavLink>
<NavLink to="/member3"><button>member3</button></NavLink>
     </center>
       </div>
       <center>
     <div className="image">
         <center>
        <Route path="/member1" exact component={member1} />
        <Route path="/member2/" component={member2} />
       
       <Route path="/member3/" component={member3} />

        </center>
      </div>
      </center>

   
  
  </BrowserRouter>

 );
  
 
}
}
export default App;
