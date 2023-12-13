import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:3000/products").then(res => {
            setLoading(false)
            setData(res.data)
            console.log("salam")
        })
    }, [])
    return (
        <ul>
            {
                data.map((item, index) => {
                    return <li key={index}>{item.title} {item.price} AZN <button>addToBasket</button></li>
                })
            }
        </ul>
    )
}

export default Home