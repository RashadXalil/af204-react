import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/orders").then(res => {
            setOrders(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    orders.map((item, index) => {
                        return (
                            <li key={index}>{item.totalPrice}AZN
                                <select name="" id="" onChange={(e) => {
                                    axios.put(`http://localhost:3000/orders/${item.id}`, { ...item, staus: e.target.value }).then(res => console.log(res))
                                }}>
                                    <option value="pending">Pending</option>
                                    <option value="accepted">Accepted</option>
                                    <option value="onCourier">On Courier</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </li>
                        )
                    })
                }
            </ul>


        </div>
    )
}

export default Orders