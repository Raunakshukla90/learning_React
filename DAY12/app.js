import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/contact"; 
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Hello from "./src/hello";
import Hii from "./src/Hii";
import Zero from "./src/Zero";
import Github from "./src/Github";
 

function App(){


    return (
       <BrowserRouter>
            <nav>
              <Link to ="/">Home</Link>
              <Link to="/contact" >Contact</Link>
              <Link to="/Dashboard" >Dashboard</Link>
               <Link to="/Details">Details</Link>
            </nav>

          <Routes>
            {/*route may kewal ek chaleyga*/}
               <Route path="/" element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
                {/*nested*/}
                <Route path="/Details" element={<Details></Details>}> 
                   <Route index element={<Zero></Zero>}></Route> {/* When we on details page zero file content also display by the help of index */ }
                   <Route path="hello" element={<Hello></Hello>}></Route>
                    <Route path="Hii" element={<Hii></Hii>}></Route>
                </Route>

                <Route path="/Github/:name" element={<Github></Github>}></Route> {/* /github:
                /:name -> (:) it make dyanmic  */}
            </Routes>            
       
       </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)