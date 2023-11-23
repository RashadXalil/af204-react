import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div class="card" style={{ width: "18rem", height: "500px" }}>
            <img class="card-img-top" style={{ height: "300px" }} src={item.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.price} AZN</p>
                <Link to={`/${item.id}`}>Go Detail</Link>
            </div>
        </div>
    )
}

export default Item