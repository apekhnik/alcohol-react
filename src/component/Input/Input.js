import React from 'react'

const Input = ({onChange, onKeyPress, value, type='text'}) => {
    return(
        <div>
            <input type={type} 
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    value={value}
            />
        </div>
    )
}
export default Input