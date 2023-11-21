import React from 'react'

const Murad = React.forwardRef((props, ref) => {
    return (
        <input type="text" placeholder="age" ref={ref} />
    )
})

export default Murad