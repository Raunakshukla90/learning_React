import {useParams} from "react-router"

export default function Github(){
    
   const {name}= useParams();  {/*here jo name beja hain ye catch kareyga*/}
    const[Profile,setProfile] = useState(null);


   async function fetchuser() {
     const response=    await( fetch(`https://api.github.com/users/${name}`))
     const data=await response.json();
     setProfile(data);
   }

     useEffect(()=>{
        fetchuser();
     }, [])





    return(
         <>
        <h1>My Github Profile </h1>
        {/*disp;lay user name*/}

         <div>
             <img src={Profile?.avatar_url}></img>
             <h2>{Profile?.login}</h2>

         </div>


        </>
    )
}