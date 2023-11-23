import React from 'react'
import Header from '../../layout/admin/Header/Header'
import Footer from '../../layout/admin/Footer/Footer'
import { Outlet } from 'react-router'

const AdminRoot = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default AdminRoot