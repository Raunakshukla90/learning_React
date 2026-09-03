import React, { useState ,useMemo,useRef} from "react";
import ReactDOM from "react-dom/client";

/*
function App(){
      const [count,setcount]=useState(0);
     // let money =0;//whenever we increase or click on increament  the setnumber call the function and money will start with 0;
      //so to  maintain actual value of money or hold the refeerence of money we use useref hook now money will not be re initilise with 0  when counter click
      const money =useRef(0); // it  return an object


      return(
        <>
        <h1>Counter is {count}</h1>
         <button onClick={()=>setcount(count+1)}>Increament</button>

         <h1>Money is {money.current}</h1>
         <button onClick={()=>{money.current=(money.current+1)
             console.log(money.current)}}>Increament</button>
        </>
      )

}
*/

//project of stopwatch
function Stopwatch(){
      
     const [time,setTime]=useState(0);
     const[isrunning,setisrunning]=useState(false);
     const intervalRef=useRef(null);
     function start(){
           if(!isrunning)  {    
         intervalRef.current=setInterval(()=>{
            setTime((prevtime)=>prevtime+1)
           },1000)
           setisrunning(true)
        }
     }
 
     function Stop(){
        if(isrunning){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setisrunning(false)
        }

     }

     function Reset(){
         clearInterval(intervalRef.current);
         intervalRef.current=null;
         setTime(0);

     }

    return(
        <>
           <h1>Stopwatch is:{time}</h1>
           <button onClick={start}>Start</button>
           <button onClick={(Stop)}>Stop</button>
           <button onClick={Reset}>Reset</button>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById ('root')).render(<Stopwatch/>)