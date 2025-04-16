import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick} className='search-btn'>
            {props.value}
        </button>
    )
}

export default Button