import {useEffect,useState} from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Colorfull from "./component/colorful";


//Background Color changer
 


function Main(){
      
    const[count,setCount]=useState(0);

    return(
        <>
             <div className="counter">
                <h1>Counter is: {count}</h1>
               < button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increament</button>
                 </div>   

            <Colorfull/>        
        </>
    )
}






ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>)