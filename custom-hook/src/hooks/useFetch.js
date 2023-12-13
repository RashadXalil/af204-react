import axios from "axios"
import { useEffect, useState } from "react"

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
    return { data, loading, error }
}
export default useFetch