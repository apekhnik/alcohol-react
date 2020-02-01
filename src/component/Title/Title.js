import React from 'react'

const Title = ({name, description}) => {
    
    return(
        <div className="title">
            <h2>{name}</h2>
            <span>{description}</span>
        </div>
    )
}

export default Title