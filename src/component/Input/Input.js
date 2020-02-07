import React from 'react'
import './input.css'
const Input = ({onChange, onKeyPress, value, type='text', checked, id, placeholder}) => {
    return(
        <input 
        className="input"
        type={type} 
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        checked={checked}
        id={id}
        placeholder={placeholder}
        />
    )
}
export default Input