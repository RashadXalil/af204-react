import { useEffect, useState } from "react"
import "./App.css"
import List from "./components/List"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"
function App() {
    // const [counter, setCounter] = useState(localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0)
    // const increase = () => {
    //     setCounter(counter => counter + 1)
    //     localStorage.setItem("counter", counter)
    // }
    // const decrease = () => {
    //     setCounter(counter => counter - 1)
    //     localStorage.setItem("counter", counter)
    // }
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [wishlistItems, setWishlistItems] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setData(res.data)
            toast.success("data geldi")
            setLoading(false)
        }).catch(error => {
            setError(error)
        })
    }, [])
    return (
        <div className="App">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Wishlist</button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Wishlist</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul>
                        {
                            wishlistItems.map((wishlistItem, index) => {
                                return (<li key={index}>{wishlistItem.name} {wishlistItem.unitPrice} AZN</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            {
                loading ? <div className="loading">
                    <div className="spinner-border custom-spinner" role="status">
                    </div>
                </div> : <List data={data} setWishlistItems={setWishlistItems} wishlistItems={wishlistItems} />
            }
            <Toaster />
        </div>
    );
}

export default App;
