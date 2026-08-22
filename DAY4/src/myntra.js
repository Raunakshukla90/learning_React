import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card"
import Footer from "./component/footer";
import Header from "./component/header";




{/*
const arr=[{cloth:"t-shirt",offer="20-40%off"},{cloth:"pant",offer="10-40%off"},{cloth:"shirt",offer="40-50%off"}]
*/}
  







function App(){

return(   <>
   
   
      
     <Header/>
     
    {/*body */ }
     <div className="middle" s tyle={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
    
    <Card cloth="T-shirt" offer="10-80%off" price="200" image=<img src="https://tse4.mm.bing.net/th/id/OIP.AuH7MepoX91nkX1MgNjKGAHaJ3?r=0&pid=Api&h=220&P=0"  height='200px' width="200px"/> />
       <Card cloth="Jeans" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="pant" offer="60-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="kurta" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="40-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200"image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"  height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"   height="200px" width="200px"/>/>
       <Card cloth="T-shirt" offer="20-80%off" price="200" image=<img src ="https://oldnavy.gap.com/webcontent/0053/265/368/cn53265368.jpg"    height="200px" width="200px"/>/>
   

 {/*  {

    arr.map((value,index)=> <Card cloth={value.cloth} offer={value.offer}/>)//  arr.map gives array
   }*/}
   </div>
   
    <Footer/>

   </>
   
)  ;


}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(< App />)




