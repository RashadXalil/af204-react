import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
            setItem(res.data)
        })
    }, [])
    return (
        <div>
            <img width={"300px"} height={"300px"} src={item.image} alt="" />
            <h1>{item.title}</h1>
        </div>
    )
}

export default Detail