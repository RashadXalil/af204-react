import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from './redux/slice/counterSlice';
import List from './List';
import { useRef } from 'react';
import axios from 'axios';
function App() {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.value)
    return (
        <div className="App">
            <button onClick={() => {
                dispatch(decrease())
            }}>-</button>
            {counter}
            <button onClick={() => {
                dispatch(increase())
            }}>+</button>
            <List />
            <input ref={inputRef} type="text" placeholder='name' />
            <button onClick={() => {
                axios.post("http://localhost:3000/products", {
                    name: inputRef.current.value
                })
            }}>add</button>
        </div>
    );
}

export default App;
