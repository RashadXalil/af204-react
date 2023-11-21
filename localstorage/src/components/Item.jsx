import React from 'react'
import toast from 'react-hot-toast'

const Item = ({ item, wishlistItems, setWishlistItems }) => {
    const addToWishlist = () => {
        setWishlistItems([...wishlistItems, item])
        localStorage.setItem("wishlist", JSON.stringify([...wishlistItems, item]))
        toast.success("item add olundu")
    }
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.unitPrice} AZN</td>
            <td>{item.quantityPerUnit}</td>
            <td><button className='btn btn-warning' onClick={addToWishlist}>Add to wishlist</button></td>
        </tr>
    )
}

export default Item