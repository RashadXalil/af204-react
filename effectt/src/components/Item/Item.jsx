import React from 'react'

const Item = ({ item }) => {
    return (
        <div class="card mb-5" style={{ width: "18rem" }} >
            <img class="card-img-top" src={item.image} height={"300px"} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{item.title.slice(0, 20)}</h5>
                <p class="card-text">{item.description.slice(0, 40)} {item.price} AZN</p>
            </div>
        </div>
    )
}

export default Item