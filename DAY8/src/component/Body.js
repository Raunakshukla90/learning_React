import { useEffect, useState } from "react";

function Body(){
      
    const [Profile,setProfile]=useState([]);
    const[numberofProfile,setnumberofProfile]=useState("");

   async function generateprofile(count){
    //const ran= Math.floor(1+Math.random*10000)
      const response= await fetch(`https://api.github.com/users?per_page=${count}`)     //https://api.github.com/users?since=${ran}&per_page=${count} //this api fetch or gives data random
      //API=> on this basis of user name=>`https://api.github.com/users/username
      const data= await response.json();

      setProfile(data); 
     
    }

    
     useEffect(()=>{
        generateprofile(10);
     },[])

     return (
            <div className="but">
                <input type="text" className="input" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
                <button onClick={()=>generateprofile(Number(numberofProfile))}>Search Profile</button>
                
        <div className="profiles">
            {
                Profile.map((value)=>{//here we wright return because we wright data in more than one line(multiple line) so we use return ,if ek he line may likhtay toh by default return ho jata data map ko
                    // return an array in which  profile data present
                   return(
                    <div key={value.id} className="cards">
                         <img src={value.avatar_url}></img>
                         <h2> {value.login}</h2>
                         <a href={value.html_url} target="_blank">Profile</a>
                 </div>)
                } )
            }

        </div>
         </div>
     )
     
}


export default Body

