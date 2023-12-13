import AdminRoot from "../pages/admin/AdminRoot";
import Basket from "../pages/site/Basket/Basket";
import Products from "../pages/admin/Products/Products";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Orders from "../pages/site/Orders/Orders";

const ROUTES = [{
    path: '',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    },
    {
        path: 'basket',
        element: <Basket />
    },
    {
        path: '/:id',
        element: <Detail />
    },
    {
        path: "/orders",
        element: <Orders />
    }

    ]
},
{
    path: 'admin',
    element: <AdminRoot />,
    children: [{
        path: 'products',
        element: <Products />
    }]
}
]
export default ROUTES