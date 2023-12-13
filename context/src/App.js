import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MainContext from "./context";
import "./App.css"
import axios from "axios";
function App() {
    const [products, setProducts] = useState([])
    const [todos, setTodos] = useState([])
    const BASE__URL = "https://northwind.vercel.app/api/products"
    const complateTodo = (id) => {
        const target = todos.find((todo) => todo.id == id)
        target.isComplated = !target.isComplated
        setTodos([...todos])
    }
    const addTodo = (todoValue) => {
        const newTodo = {
            id: new Date().getTime(),
            value: todoValue,
            isComplated: false
        }
        setTodos([...todos, newTodo])
    }
    const deleteTodo = (id) => {
        const target = todos.find(item => item.id == id)
        const indexOfTarget = todos.indexOf(target)
        todos.splice(indexOfTarget, 1)
        setTodos([...todos])
    }
    const editTodo = (id, newValue) => {
        const target = todos.find(item => item.id == id)
        target.value = newValue
        setTodos([...todos])
    }
    const getData = async () => {
        const response = await axios.get(BASE__URL)
        const data = response.data
        setProducts(data)
    }
    const deleteProduct = (id) => {
        axios.delete(`${BASE__URL}/${id}`).then(res => {
            getData()
        })
    }
    useEffect(() => { getData() }, [])
    const data = { todos, setTodos, complateTodo, addTodo, deleteTodo, editTodo, products, deleteProduct }
    return (
        <MainContext.Provider value={data}>
            <Header />
            <Home />
            <Footer />
        </MainContext.Provider>

    );
}

export default App;
