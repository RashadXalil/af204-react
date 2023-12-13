import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import { clearComplated } from './redux/slice/todoSlice'

const TodoList = () => {
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>{
                items.map((item, index) => {
                    return <Todo key={index} item={item} />
                })
            }
            </ul>
            <button onClick={() => {
                dispatch(clearComplated())
            }}>clear complated</button>
        </div>
    )
}

export default TodoList