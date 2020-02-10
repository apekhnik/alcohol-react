import React from 'react'
import classnames  from 'classnames'
import './input.css'
const Input = ({onChange, onKeyPress, value, type='text', checked, id, placeholder, error}) => {
    const errorClass = error ? 'input-error' : null
    const classes = classnames('input',errorClass)
    return(
        <input 
        className={classes}
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