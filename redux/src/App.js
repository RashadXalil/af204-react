import { useDispatch, useSelector } from "react-redux";
import { decrease, decreaseByAmount, increase, increaseByAmount } from "./redux/slice/counterSlice";
import Footer from "./footer/Footer";
import { useRef } from "react";
import { addTodo } from "./redux/slice/todoSlice";
import TodoList from "./TodoList";
import "./App.css"
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import About from "./About";
function App() {
    const inputRef = useRef()
    const dispatch = useDispatch()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
