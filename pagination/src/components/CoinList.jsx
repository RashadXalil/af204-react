import React from 'react'
import CoinCard from './CoinCard'
const CoinList = ({ data }) => {
    return (
        <div className='container'>
            <div className="row">
                {data.map((item, index) => {
                    return (<div className='col-3 mb-2' key={index}><CoinCard index={index + 1} item={item} /></div>)
                })}
            </div>
        </div>
    )
}

export default CoinList