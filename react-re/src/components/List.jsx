import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/noteSlice'

const List = () => {
    const items = useSelector(state => state.notes.items)
    const dispatch = useDispatch()
    return (
        <div>{items.map((item, index) => {
            return <div style={{ backgroundColor: `${item.color}` }}>{item.title} {item.desc} <button onClick={() => {
                dispatch(deleteNote(item.id))
            }}>delete</button></div>
        })}</div>
    )
}

export default List