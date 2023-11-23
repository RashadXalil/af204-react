import React from 'react'

const Item = ({ item, deleteHandler }) => {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.unitPrice} AZN</td>
            <td><button className='btn btn-warning'>edit</button></td>
            <td><button className='btn btn-danger' onClick={() => {
                deleteHandler(item.id)
            }}>delete</button></td>
        </tr>
    )
}

export default Item