import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";

import Card from './Card'

const Cards = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
    const [counter, setCounter] = useOutletContext();
    console.log(counter)


    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            console.log(res.data)
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setError(err)
        })
    }, [])
    const addToBasket = (id) => {
        let item = data.find(item => item.id == id)
        setBasketItems([...basketItems, item])
        localStorage.setItem("basketItems", JSON.stringify([...basketItems, item]))
        setCounter(basketItems.length + 1)
    }
    return (
        <div className='countaier'>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <div className="col-3 mb-5" key={index}>
                                <Card addToBasket={addToBasket} item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards