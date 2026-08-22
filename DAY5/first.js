import React ,{useState} from "react";
import ReactDOM from 'react-dom/client'

function Counter(){
    // let count=0;
    let [count,setCount]=useState(0)//means jo ham apnay say count ko initilaise kar rahey thay vo usestate apnay say initilise karkay dega
     //useState(0)-> return array in which two value first one goes to count variable and second one is functionn
     

     function increamentnumber(){
         count=count+1;
         setCount(count)//call taaki hamarey ui may visible rahey 
       //  document.querySelector('h1').innerText=`Count is ${count}`
     }

     function decreamentnumber(){
           count=count-1;
            setCount(count)
             document.querySelector('h1').innerText=`Count is ${count}` 
     }


     return(
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={increamentnumber}>Increament {count}</button>
            <button onClick={decreamentnumber}>Decreament {count}</button>
        </div>
     )
}

let Root=ReactDOM.createRoot( document.getElementById('root'));
Root.render(<Counter/>)



{/*
    onclick event listner excute only when we click the button
    */}