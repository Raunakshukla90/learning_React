import React, { useState ,useMemo,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Increament from "./increament"



function App(){
  
    const[count,setcount]=useState(0);


    return(
<>
          <h1> Parent Counter is:{count}</h1>
          <Increament counts={count} setcount={setcount}/>


</>

    )
    
}  
ReactDOM.createRoot(document.getElementById ('root')).render(<App/>)