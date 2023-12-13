import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [{
    path: '/',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: 'shop',
        element: <Shop />
    }]

}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: '',
        element: <Dashboard />
    }, {
        path: 'products',
        element: <Products />
    }]
}]
export default ROUTES