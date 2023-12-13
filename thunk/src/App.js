import { Provider } from "react-redux";
import ROUTES from "./routes/index.routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./redux/store";
const router = createBrowserRouter(ROUTES)
function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
