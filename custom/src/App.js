import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';
import useHTTP from './useHTTP';
import { useEffect, useState } from 'react';

function App() {
    const { getData, postData, editData, deleteData } = useHTTP('https://northwind.vercel.app/api/products')
    console.log(getData())
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
