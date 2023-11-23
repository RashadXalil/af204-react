import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import toast, { Toaster } from 'react-hot-toast'

const List = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const deleteHandler = (id) => {
        axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(res => {
            toast.success("item deleted")
        })
    }
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setError(err)
        })
    }, [data])
    return (
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">unitPrice</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (<Item deleteHandler={deleteHandler} item={item} key={index} />)
                    })
                }

            </tbody>
            <Toaster />
        </table>
    )
}

export default List