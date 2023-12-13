import { useState } from "react"

const useLocalStorage = (key) => {
    const [items, setItems] = useState([])
    const setItem = (value) => {
        try {
            setItems([...items, value])
            localStorage.setItem(key, JSON.stringify([...items, value]))
        } catch (error) {
            console.log(error)
        }
    }
    const getItem = () => {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
        else {
            console.log("item localStorage-de yoxdur")
        }
    }
    const removeItem = () => {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
    }
    return { setItem, getItem, removeItem }
}
export default useLocalStorage