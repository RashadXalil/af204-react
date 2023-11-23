import React, { useState } from 'react'
import Header from '../../layout/site/Header'
import Footer from '../../layout/site/Footer'
import { Outlet } from "react-router-dom"
const SiteRoot = () => {
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("basketItems")).length)
    return (
        <React.Fragment>
            <Header counter={counter} setCounter={counter} />
            <Outlet context={[counter, setCounter]} />
            <Footer />
        </React.Fragment>
    )
}

export default SiteRoot