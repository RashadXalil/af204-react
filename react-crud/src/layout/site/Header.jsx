import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const Header = ({ counter, setCounter }) => {
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
    useEffect(() => {
    }, [])
    return (
        <div>
            Header
            <Link to='/basket' className="btn btn-warning">Basket Items:{counter}</Link>
        </div>
    )
}

export default Header