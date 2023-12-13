import React, { useContext } from 'react'
import MainContext from '../context'
import Products from './Products'

const Header = () => {
    return (
        <div>
            <Products />
        </div>
    )
}

export default Header