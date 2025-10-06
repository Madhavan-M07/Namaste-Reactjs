import ResCard from "./Restaurant"
import resList from "../utils/mockdata"
import React from "react"
import { useState } from "react"

const Body = () => {



    // Local State Variable
    const[listOfRestaurant , setListOfRestaurant] = useState(resList);
    // let listOfRestaurant = null;

    // state variable - Super Powerful variable - is a normal js function that remembers its value across re-renders of the component
    

//     // Normal Javascript Variable
//     let listOfRestaurantJs = [{
//         name:"McDonald's",
//         cuisines:["Burgers","American"],
//         avgRating:3.2,
//        "cloudinaryImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/1/5ad8c46b-d761-46de-b9c0-3578bfbf4c02_708843.jpg"
//     },
//      {
//         name:"KFC",
//         cuisines:["Burgers","American"],
//         avgRating:4.5,
//        "cloudinaryImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/1/5ad8c46b-d761-46de-b9c0-3578bfbf4c02_708843.jpg"
//     },
//         {
//         name:"Burger King",
//         cuisines:["Burgers","American"],
//         avgRating:4.1,
//        "cloudinaryImage": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/1/5ad8c46b-d761-46de-b9c0-3578bfbf4c02_708843.jpg"
//     }
// ];

  return (
    <div className="body">
      <div className="filter" style={{ padding: "10px", margin: "10px" }}>

        <button className="filter-btn"
         onClick={()=>
         {
            //Filter Logic
            // listOfRestaurant=listOfRestaurant.filter((res)=>res.avgRating>4);
            // console.log(listOfRestaurant);
            const filteredListOfRestaurant = listOfRestaurant.filter((res)=>res.avgRating>4);
            // console.log(filteredListOfRestaurant);
            // listOfRestaurant = filteredListOfRestaurant; // This will not work because its a normal js variable
            // We cannot update state variable like this - listOfRestaurant = filteredListOfRestaurant;
            // We have to use the function provided by useState to update the state variable
            setListOfRestaurant(filteredListOfRestaurant);
            console.log("filteredListOfRestaurant",filteredListOfRestaurant);
         }}>
         Top Rated Restaurant</button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <ResCard key={res.name} resData={res} />
        ))}
      </div>
    </div>

  )

}

export default Body