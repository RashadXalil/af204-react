import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, deleteItemFromBasket, removeItemFromBasket } from './redux/basketSlice'

const Basket = () => {
    const items = useSelector(state => state.basket.items)
    const dispatch = useDispatch()
    let basketTotal = 0
    return (
        <div>
            <h1>Basket</h1>
            {
                items.length == 0 ? <h2>empty ...</h2> : <ul>
                    {items.map((item, index) => {
                        basketTotal += Math.ceil(item.totalPrice)
                        return <li key={index}>{item.product.name} count:{item.count} totalPrice:{Math.ceil(item.totalPrice)} AZN <button onClick={() => {
                            dispatch(addToBasket(item.product))
                        }}>+</button>
                            <button onClick={() => {
                                dispatch(removeItemFromBasket(item))
                            }}>-</button>
                            <button onClick={() => {
                                dispatch(deleteItemFromBasket(item))
                            }}>delete</button></li>
                    })}</ul>
            }
            <h1>total:{basketTotal} AZN</h1>
        </div>
    )
}

export default Basket