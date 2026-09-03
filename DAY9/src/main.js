import React, { useState ,useMemo} from "react";
import ReactDOM from "react-dom/client";



function App(){

    const [count,setcount]=useState(0);
    const [number,setnumber]=useState("")


    function Fibbannaci(n){
        if(n<=1) return n;
        return Fibbannaci(n-1)+Fibbannaci(n-2);
    }
  
    const result=useMemo(()=>{Fibbannaci(number)},[number])
    return(
        <>
         <h1>Counter is {count}</h1>
         <button onClick={()=>setcount(count+1)}>Increament</button>
                  <button onClick={()=>setcount(count-1)}>Decreament</button>

                  <div>
                    <h2>Fibbannaci number is :{result}</h2>
                    <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
                  </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById ('root')).render(<App/>)