import React, { useEffect, useState } from 'react'
import List from '../../components/List/List'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setError(err)
        })
    }, [])
    return (
        <div>
            {
                loading ? <p>loading</p> : <List data={data} />
            }
        </div>
    )
}

export default Home