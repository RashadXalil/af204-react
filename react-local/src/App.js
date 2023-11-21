import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";

function App() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const handleSubmit = (searchValue) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyBG2lxMMTXzeTP2KyheEYt9FSaFri2frWY`).then(res => {
            console.log(res.data)
            setLoading(false)
            setData(res.data.items)

        }).catch(error => {
            setError(error)
        })
    }
    return (
        <div className="App">
            <section className="search">
                <form action="#" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e.target.firstElementChild.value)
                }}>
                    <input type="text" placeholder="search book" />
                </form>
            </section>
            <section className="books">
                {
                    loading ? <p>nothing to show</p> : <Cards books={data} />
                }
            </section>
        </div>
    );
}

export default App;
