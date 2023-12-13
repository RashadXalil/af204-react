import { useCallback, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";

function App() {
    const phones = [
        { name: "iPhone 12", price: 14000 },
        { name: "Galaxy S20", price: 6500 },
        { name: "Huawei P40", price: 10000 },
    ];
    const [products] = useState(phones);
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product) => {
        setCart((cart) => [...cart, product]);
    }, [])

    const emptyCart = useCallback(() => {
        setCart([]);
    }, [])
    return (
        <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Cart cart={cart} emptyCart={emptyCart} />
        </div>
    );
}

export default App;
