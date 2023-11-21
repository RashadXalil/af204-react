import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const Item = ({ allahverdi, deleteHandler }) => {
    // row
    return (
        <TableRow
            key={allahverdi.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {allahverdi.id}
            </TableCell>
            <TableCell align="right">{allahverdi.name}</TableCell>
            <TableCell align="right">{allahverdi.surname}</TableCell>
            <TableCell align="right">{allahverdi.age}</TableCell>
            <TableCell align="right"><button onClick={() => {
                deleteHandler(allahverdi.id)
            }}>delete</button></TableCell>
        </TableRow>
    )
}

export default Item