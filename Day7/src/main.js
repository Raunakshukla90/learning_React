import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client"


function Passwordgenerator(){
   
      const [Password,setPassword]= useState("");
      const[length,setLength]=useState(10);
      const[numberChanged,setnumberChannged]=useState(false);
      const[charChanged,setcharChannged]=useState(false);

      function generatepassword(){
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)  //means value of number true means number tick hain
               str+="1234567890"
        if(charChanged) //means character honay chahey ya na honay chehay
            str+="+-_)@#$%^&*({}~";

        let pass=""
        for(let i=0;i<length;i++){
           pass+=   str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass)
    }


    //use useeffect with length array 
    //means agar length change hoti ahin toh fir say call karna hain generatepassword ko
    useEffect(()=>{  
        generatepassword();
    },[length,numberChanged,charChanged])

 

    return(
        <>
          <h1>Password is: {Password}</h1>
          <div className="second">
              <input type="range" min={5} max={30} value={length} onChange={(e)=>setLength(e.target.value)}></input>
              <label>Length({length})</label>   

              <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChannged(!numberChanged)}></input> 
              <label>Number</label>
               <input type="checkbox"defaultChecked={numberChanged} onChange={()=> setcharChannged(!setcharChannged)}  ></input> 
              <label>Character</label>        
          </div>
        
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<Passwordgenerator></Passwordgenerator>)


/* command 
   install react
   install  react-dom
   install parcel
   npm parcel html file name
  
*/