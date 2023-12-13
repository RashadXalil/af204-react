import axios from "axios"
import { useEffect, useState } from "react"

const useHTTP = (baseURL) => {
    const [data, setData] = useState([])
    const [response, setResponse] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getData = () => {
            axios.get(baseURL).then(res => {
                setData(res.data)
            })
        }
        getData()
        return { getData }
    }, [])
}
export default useHTTP