import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item'
const List = () => {
    // hook
    const [data, setData] = useState([]) // axios datani yaddasda saxlamaq ucun
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            setData(res.data) // state-e yazmaq ucun
            setFilteredData(res.data)
        })
    }, [])
    const handleChange = (inputVal) => {
        if (inputVal == " ") {
            setFilteredData([...data])
        }
        else {

            setFilteredData([...data.filter((item) => item.title.trim().toLowerCase().includes(inputVal.trim().toLowerCase()))])
        }
    }
    return (
        <div className='container'>
            <input type="text" placeholder='search' onChange={(e) => {
                handleChange(e.target.value)
            }} />
            <div className="row">
                {
                    filteredData.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Item item={item} key={index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List