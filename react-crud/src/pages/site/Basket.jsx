import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
const Basket = () => {
    const [counter, setCounter] = useOutletContext()
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
    const deleteItemFromBasket = (id) => {
        let item = basketItems.find(item => item.id == id)
        basketItems.splice(basketItems.indexOf(item), 1)
        setBasketItems([...basketItems])
        localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
        setCounter(basketItems.length)
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">unitPrice</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basketItems.map((item, index) => {
                            return (<tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.unitPrice} AZN</td>
                                <td><button className='btn btn-danger' onClick={() => {
                                    deleteItemFromBasket(item.id)
                                }} >delete</button></td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Basket