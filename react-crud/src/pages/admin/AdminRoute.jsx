import React from 'react'
import Header from '../../layout/admin/Header'
import { Outlet } from "react-router-dom"
import Footer from '../../layout/admin/Footer'
const AdminRoute = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default AdminRoute