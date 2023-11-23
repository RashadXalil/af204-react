import React from 'react'
import { Link } from "react-router-dom"
const Card = ({ item, addToBasket }) => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.unitPrice} AZN</p>
                <Link class="btn btn-primary" to={`/${item.id}`}>Detail</Link>
                <button onClick={(e) => {
                    addToBasket(item.id)
                }}>Add to basket</button>
            </div>
        </div>
    )
}

export default Card