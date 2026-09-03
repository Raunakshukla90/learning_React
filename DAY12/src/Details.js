import {Outlet,Link} from "react-router"



export default function Details(){
     
    return (
        <>
        <nav>
            <Link to="/Details">Details</Link>
             <Link to="hello">Hello</Link>
             <Link to="Hii">Hii</Link>
        </nav>
        <h1>Welcome to Details page</h1>
        <Outlet></Outlet>  {/* jaha outlet likhogay content   vohe darsaya jaayga  */ }
        </>
    )
}