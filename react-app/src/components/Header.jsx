import React from "react"
import "./Header.css"
const Header = () => {
    return (
        <div className="wrapper">
            <div className="header" style={{ display: "flex", alignItems: "center" }}>
                <div className="header__left">
                    <h2>Salam</h2>
                </div>
                <div className="header__right">'

                    <ul style={{ display: "flex" }}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>
            </div>
            <div className="main">salam</div>
        </div>

    )
}
export default Header