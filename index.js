import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Menu</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () =>{
    return(
        <div className="footer">
            <h3>CopyRights @ Ashwin</h3>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestrauntCard resName="McD" cuisine="Burger"/>
                <RestrauntCard resName="KFC" cuisine="Burger"/>
            </div>
        </div>
    )
}

const RestrauntCard = (props) =>{
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://images.ctfassets.net/h7j9u4fil4a3/6QYctK1Upul0Bu90PfIYq0/1bdf2c5f7cecfb61c0d1afae7b9dd668/Ultimate_BBQ_Fried_Chicken_Sandwich_.jpg?w=1200&h=667&fl=progressive&q=50&fm=jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>⭐️⭐️⭐️⭐️</h4>
            <h4>34 minutes</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)
