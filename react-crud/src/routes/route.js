import AdminRoute from "../pages/admin/AdminRoute";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import Basket from "../pages/site/Basket";
import Detail from "../pages/site/Detail";
import Home from "../pages/site/Home";
import Shop from "../pages/site/Shop";
import Signup from "../pages/site/Signup";
import SiteRoot from "../pages/site/SiteRoot";

export const ROUTES = [{
    path: '/admin',
    element: <AdminRoute />,
    children: [{
        path: '',
        element: <Dashboard />
    },
    {
        path: 'profile',
        element: <Profile />
    }]
}, {
    path: '/',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'signup',
        element: <Signup />
    }, {
        path: ':id',
        element: <Detail />
    }, {
        path: 'basket',
        element: <Basket />
    }
    ]
}]