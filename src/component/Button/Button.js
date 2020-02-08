import React from 'react'
import './Button.css'

const Button = ({text, onClick}) => {
    return(
        <div 
        className='button'
        >
            <button onClick={onClick}>
                <img src='http://cdn.onlinewebfonts.com/svg/img_534826.png' alt="q"/>
            </button>
        </div>
    )
}
export default Button