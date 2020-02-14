import React from 'react'
import './Button.css'

const Button = ({text, onClick}) => {
    return(

            <button onClick={onClick} className='button'>
                {/* <img src='http://cdn.onlinewebfonts.com/svg/img_534826.png' alt="q"/> */}
                FIND
            </button>

    )
}
export default Button