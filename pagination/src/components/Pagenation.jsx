import React from 'react'

const Pagenation = ({ totalData, postsPerPage, setCurrentPage, currentPage }) => {
    const pages = []
    for (let index = 1; index < Math.ceil(totalData.length / postsPerPage) + 1; index++) {
        pages.push(index)
    }
    return (
        <div>{
            pages.map((page, index) => {
                return (<button key={index} className={index + 1 == currentPage ? "active" : ''} onClick={() => {
                    setCurrentPage(index + 1)
                }}>{index + 1}</button>)
            })
        }</div>
    )
}

export default Pagenation