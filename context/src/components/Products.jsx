import React, { useContext } from 'react'
import MainContext from '../context'

const Products = () => {
    const { products, deleteProduct } = useContext(MainContext)
    console.log(products)
    return (
        <div>
            <ul>
                {
                    products.map((item, index) => {
                        return <li key={index}>{item.name} <button onClick={() => {
                            deleteProduct(item.id)
                        }}>delete</button></li>
                    })
                }</ul></div>
    )
}

export default Products