import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from './redux/basketSlice'

const List = ({ data }) => {
    const dispatch = useDispatch()
    const addHandler = (item) => {
        dispatch(addToBasket(item))
    }
    return (
        <ul>
            {
                data.map((item, index) => {
                    return <li key={index}>{item.name} {item.unitPrice} AZN <button onClick={() => {
                        addHandler(item)
                    }}>addToBasket</button></li>
                })
            }
        </ul>
    )
}

export default List