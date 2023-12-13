import React from 'react'
import { useDispatch } from 'react-redux'
import { complateTodo, deleteTodo, editTodo } from './redux/slice/todoSlice'

const Todo = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <li><span className={item.isComplated ? "complated" : ""}>{item.todo} </span><button onClick={() => {
            dispatch(complateTodo(item.id))
        }}>complate todo</button> <button onClick={() => {
            dispatch(deleteTodo(item.id))
        }}>delete</button> <button onClick={() => {
            const editedTodo = prompt(`${item.todo} edit`)
            dispatch(editTodo({ id: item.id, editedTodo: editedTodo }))
        }}>edit</button></li >
    )
}

export default Todo