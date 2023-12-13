import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const counter = useSelector(state => state.counter.value)
    return (
        <div>Footer:{counter}</div>
    )
}

export default Footer