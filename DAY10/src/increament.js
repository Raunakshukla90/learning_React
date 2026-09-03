function Increament({counts,setcount}){


    return(

        <>  
             <h1>Child Counter is:{counts}</h1>
            <button onClick={()=>setcount(counts+5)}>Increament</button>
        </>
    )
}
export default Increament