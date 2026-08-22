
function Header(){
   return(
      <div className="heading">

        <img className="images" src="https://static.vecteezy.com/system/resources/previews/050/816/835/non_2x/myntra-transparent-icon-free-png.png" height="100px" width="100px"/>
        <div className="options">
         <button className="but">Men</button>
         <button className="but">women</button>
         <button className="but">Kids</button>
         <button className="but">Home & Living</button>
         <button className="but">Beauty</button>
         <button className="but">Studio</button>

      </div>
            
            <input className="searchbar" placeholder="Search for products brands and more"></input>
              <div className="Profile">
                 <button className="pro">Profile</button> 
                 <button className="pro">wishlist</button>
                 <button className="pro">Bag</button>              
              </div>
      </div>
   )
}


export  default Header