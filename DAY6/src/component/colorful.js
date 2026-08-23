
import { useEffect,useState } from "react";



function Colorfull(){

const [color,setcolor]=useState("black");
     //document.body.style.backgroundColor=color;//now want to that this function run only when color actual changes
     useEffect(()=>{
        document.body.style.backgroundColor=color;
     },[color]);

    return(

      <>
      
        <h1>Background Color changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
            <button style={{backgroundColor:"orange"}}onClick={()=>setcolor("orange")}>Orange</button>
            <button style={ { backgroundColor:"pink"}
            } onClick={()=>setcolor("pink")}>Pink</button>
               
            
        </div>
        </>
    )
}

export default ( Colorfull);