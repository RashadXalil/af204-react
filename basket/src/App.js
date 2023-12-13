import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import ROUTES from "./routes/index.routes";
import { useEffect, useState } from "react";
import axios from "axios";
import MainContext from "./context/context";
const router = createBrowserRouter(ROUTES)

function App() {
    const [data, setData] = useState([])
    const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
    const getData = async () => {
        const response = await axios.get('http://localhost:3000/products')
        setData(response.data)
    }
    const addToBasket = (product) => {
        const target = basketItems.find((basketItem) => basketItem.id == product.id)
        if (target) {
            target.count += 1
            target.totalPrice = target.product.price * target.count
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
        }
        else {
            const basketItem = {
                id: product.id,
                product: product,
                count: 1,
                totalPrice: product.price
            }
            setBasketItems([...basketItems, basketItem])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems, basketItem]))
        }
    }
    const removeFromBasket = (basketItem) => {
        const target = basketItems.find((item) => item.id == basketItem.id)
        if (target.count > 1) {
            target.count -= 1
            console.log(target)
            target.totalPrice = parseInt(target.product.price) * parseInt(target.count)
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
        }
    }
    const deleteItemFromBasket = (basketItem) => {
        const target = basketItems.find((item) => item.id == basketItem.id)
        basketItems.splice(basketItems.indexOf(target), 1)
        setBasketItems([...basketItems])
        localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
    }

    useEffect(() => {
        getData()
    }, [])
    const contextData = {
        data, setData, addToBasket, basketItems, setBasketItems, removeFromBasket, deleteItemFromBasket
    }
    return (
        <MainContext.Provider value={contextData}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    );
}

export default App;
