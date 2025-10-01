import React from "react";
import ReactDOM from "react-dom/client";

// 

const styleCard = {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px"
}

// header component
const Header = () => {
    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                    src="https://zinavo-clientupdates.in/raja/cognipact/wp-content/uploads/2025/04/WhatsApp-Image-2025-03-25-at-11.43.34-AM-1.svg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

        </div>


    )

}

const resObj ={
  "id": "787489",
  "name": "FreshMenu",
  "locality": "BANASWADI",
  "areaName": "OMBR LAYOUT",
  "costForTwo": "₹250 for two",
  "cuisines": ["Continental", "Chinese", "Oriental"],
  "avgRating": 3.8,
  "sla": {
    "deliveryTime": 33,
    "slaString": "30-35 mins"
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹39"
  }
};


// Body component

const Body = () => {
    return (

        <div className="body">
            <div className="search" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}>

                Search

            </div>

            <div className="res-container">
                <ResCard resName="Meghana Foods" cuisine="Biriyani , North Indian , Asian" starts="4.5" duration="38" />
                <ResCard resName="Kfc" cuisine="Burger, Fast Food" starts="4.0" duration="30" />
            </div>



        </div>

    )

}

// restaurant card component
const ResCard = (props) => {
 
     const {resName, cuisine, starts, duration} = props; //destructuring the props object
     console.log(props); //passing the data to the component using props
    return (

        <div className="res-card" style={styleCard}>
            <img src="https://www.gkcelesta.com/wp-content/uploads/2024/11/MAN05926-scaled.webp" alt="res-logo" style={{ width: "300px", borderRadius: "5px" }} />

            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{starts} Stars</h4>
            <h4>{duration} minutes</h4>

        </div>


    )
}

const AppLayout = () => {

    return (

        <div className="app">
            <Header />
            <Body />
        </div>


    )

}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);  //convert object in to HTML ELEMENT
// root.render(jsxHeading);


