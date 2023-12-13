import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)
            setError(null)
        }).catch(error => {
            setError(error.message)
            setLoading(false)
        })
    }, [])
    return { data, setData, loading, setLoading, error, setError }
}
export default useFetch