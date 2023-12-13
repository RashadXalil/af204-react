import React, { useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { BASE__URL } from '../env/env'
import MainContext from '../context/context'

const List = () => {
    const { data } = useContext(MainContext)
    console.log("list", data)
    return (
        <div>List</div>
    )
}

export default List