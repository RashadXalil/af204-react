import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Item from './Item';
const List = () => {
    // table
    const [rows, setRows] = useState([{
        id: 1,
        name: "Rashad",
        surname: "Xalilov",
        age: 23
    },
    {
        id: 2,
        name: "Murad",
        surname: "Babayev",
        age: 17
    }, {
        id: 3,
        name: "Allahverdi",
        surname: "Agamaliyev",
        age: 19
    },
    {
        id: 4,
        name: "Emin",
        surname: "Abdullazade",
        age: 19
    },
    {
        id: 5,
        name: "Nesibe",
        surname: "Ceferli",
        age: 19
    },
    {
        id: 6,
        name: "Sevinj",
        surname: "Yagubzade",
        age: 20
    },
    {
        id: 7,
        name: "Fidan",
        surname: "Hesenova",
        age: 19
    },
    {
        id: 8,
        name: "Orxan",
        surname: "Abdullazade",
        age: 20
    },
    {
        id: 9,
        name: "Sahib",
        surname: "Ibadov",
        age: 39
    },
    {
        id: 10,
        name: "Ismayil",
        surname: "Hesenov",
        age: 40
    }
    ])
    const deleteHandler = (id) => {
        let target = rows.find((row) => row.id == id)
        let indexOfTarget = rows.indexOf(target)
        rows.splice(indexOfTarget, 1)
        setRows([...rows])
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        return (<Item allahverdi={row} key={row.id} deleteHandler={deleteHandler} />)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List