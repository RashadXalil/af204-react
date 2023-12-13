import React, { useContext, useRef } from 'react'
import List from './List'
import MainContext from '../context'

const Home = () => {
    const { addTodo } = useContext(MainContext)
    const inputRef = useRef()
    return (
        <>
            <input type="text" placeholder='todo' ref={inputRef} />
            <button onClick={(e) => {
                addTodo(inputRef.current.value)
            }}>add todo</button>
            <List />
        </>
    )
}

export default Home