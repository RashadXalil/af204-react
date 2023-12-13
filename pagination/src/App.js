import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Pagenation from "./components/Pagenation";
import './App.css'
function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(8)
    const getData = async () => {
        const response = await axios.get("https://northwind.vercel.app/api/products")
        setData(response.data)
        console.log(response.data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    const lastItemIndex = currentPage * postsPerPage // 1*8=>8
    const firstItemIndex = lastItemIndex - postsPerPage
    const paginatedData = data.slice(firstItemIndex, lastItemIndex)
    return (
        <div className="App">
            {
                loading ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> : <CoinList data={paginatedData} />
            }
            <Pagenation currentPage={currentPage} setCurrentPage={setCurrentPage} totalData={data} postsPerPage={postsPerPage} />
            <select onChange={(e) => {
                setPostPerPage(e.target.value)
            }} name="postsPerPage" id="">
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
            </select>
        </div>
    );
}
export default App;
