import React from 'react'
import Item from './Item'

const List = ({ data, setWishlistItems, wishlistItems }) => {
    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">quantityPerUnit</th>
                    <th scope="col">Wishlist</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (<Item item={item} key={index} setWishlistItems={setWishlistItems} wishlistItems={wishlistItems} />)
                    })
                }
            </tbody>
        </table>
    )
}

export default List