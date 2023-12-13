import React from 'react'

const Product = ({ name, price, addToCart }) => {
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>{price.toLocaleString()} ₺</h3>
            {addToCart && (
                <button onClick={() => addToCart({ name, price })}>Sepete Ekle</button>
            )}
        </div>
    )
}

export default React.memo(Product)