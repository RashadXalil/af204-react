import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import List from "./components/List";
import MainContext from "./context/context";

function App() {
    const { data, loading, error } = useFetch("https://northwind.vercel.app/api/products")
    const contextData = {
        data, loading, error
    }
    return (
        <MainContext.Provider value={contextData}>
            <div className="App">
                <ul>
                    {
                        loading ? <p>loading ....</p> : data.map((item, index) => {
                            return <li key={index}>{item.name} {item.unitPrice} AZN</li>
                        })
                    }
                    {error ? <p style={{ color: "red" }}>{error}</p> : ""}
                </ul>
                <List />
            </div>
        </MainContext.Provider>
    );
}

export default App;
