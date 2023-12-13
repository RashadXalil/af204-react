import React from 'react'
import { useSelector, useDispatch } from "react-redux"
const List = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>List:{counter}</div>
    )
}

export default List