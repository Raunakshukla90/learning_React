// Basic class code about creating element etc




import React from "react";
import ReactDOM from "react-dom/client"

const element=<h1>Hello</h1>

function greet(name){
    return <p>RAM RAm {name}</p>
};

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element);

 

// {}-> iskay andar statement nhi likh saktay

//jsx: js expression only expression vo hotay hain jo kuch result produce karey
//return <p>RAM RAm { jss expression}</p>
//root.render(greet("rohit"));


Root.render(greet("rohit"));




//jsx say that uska function ka first letter captial hona chahey
  function Greet(name){
    return <p>RAM RAm {name}</p>
};
 const element2=<Greet/>
 Root.render(element2)
//<Greet/>   this is function call

