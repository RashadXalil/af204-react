import React, { useContext, useEffect, useState } from 'react'
import Item from './Item'
import MainContext from '../context'

const List = () => {
    const { todos } = useContext(MainContext)
    return (
        <React.Fragment>
            <ul>
                {
                    todos.map((item, index) => {
                        return (<Item item={item} key={index} />)
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default List