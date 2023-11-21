import React from 'react'
import Card from '../Card/Card'

const Cards = ({ books }) => {
    return (
        <div>{
            books.map((book) => {
                return <Card book={book} />
            })
        }</div>
    )
}

export default Cards