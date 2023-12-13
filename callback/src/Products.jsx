import React from 'react'
import Product from './Product'

const Products = ({ products, addToCart }) => {
    return (
        <React.Fragment>
            <h1>Ürünler</h1>
            <div className="products">
                {products.map(({ name, price }) => (
                    <Product key={name} name={name} price={price} addToCart={addToCart} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default React.memo(Products)