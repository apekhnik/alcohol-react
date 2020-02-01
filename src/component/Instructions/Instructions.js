import React from 'react'

const Instructions = ({title,instruction}) => {
    return(
        <div className="instructions">
            <span>{title}</span>
            <p>{instruction}</p>
        </div>
    )
}
export default Instructions