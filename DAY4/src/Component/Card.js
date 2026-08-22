
function Card(props){
return (
<div className="Card" style={{border:"2px solid black",padding:"2px"}}>
    {/*<img src="https://tse4.mm.bing.net/th/id/OIP.AuH7MepoX91nkX1MgNjKGAHaJ3?r=0&pid=Api&h=220&P=0" height='200px' width="200px"/> */}
       {props.image}
        <div style={{textAlign: "center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Price is :{props.price}</h2>
            <h2>Shop Now</h2>
            
        </div>
      </div>

   );
       


}

export default Card