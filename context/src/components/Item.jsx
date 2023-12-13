import React, { useContext } from 'react'
import MainContext from '../context'
import "./Item.css"
const Item = ({ item }) => {
    const { complateTodo, deleteTodo, editTodo } = useContext(MainContext)
    return (
        <li><span className={`${item.isComplated ? "complated" : ""}`}>{item.value}</span> <button onClick={() => {
            complateTodo(item.id)
            console.log(item)
        }}>complate</button><button onClick={() => {
            const newvalue = prompt(`${item.value} deyerini deyisin`)
            editTodo(item.id, newvalue)
        }}>edit</button><button onClick={() => {
            deleteTodo(item.id)
        }}>delete</button></li>
    )
}

export default Item