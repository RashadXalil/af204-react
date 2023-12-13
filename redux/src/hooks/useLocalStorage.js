const useLocalStorage = (key) => {
    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    const getItem = () => {
        JSON.parse(localStorage.getItem(key))
    }
    const removeItem = () => {
        localStorage.removeItem(key)
    }
    return { setItem, getItem, removeItem }
}
export default useLocalStorage