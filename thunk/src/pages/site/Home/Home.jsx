import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, postProduct } from '../../../redux/slices/productsSlice'

const Home = () => {
    const data = useSelector(state => state.products.data)
    const dispatch = useDispatch()
    console.log(data)
    const inputRef = useRef()
    const getHandler = () => {
        dispatch(fetchProducts())
    }
    return (
        <div>Home
            <button onClick={getHandler}>fetch data</button>
            <div>
                <input ref={inputRef} type="text" placeholder='name' />
                <button onClick={() => {
                    dispatch(postProduct({ name: inputRef.current.value }))
                }}>add new product</button>
            </div>
        </div>
    )
}

export default Home