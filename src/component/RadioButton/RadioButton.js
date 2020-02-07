import React from 'react'
import Input from '../Input/Input'
import './RadioButton.css'
const RadioButton =({onChange,  checked, label})=>{
    const id = Math.random().toFixed(3)
    return(
        <div className="form_radio">
            <Input
                type="radio" 
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
export default RadioButton