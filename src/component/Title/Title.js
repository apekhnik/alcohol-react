import React from 'react'

const Title = ({name, alcoholic}) => {
    return(
        <div className="title">
            <h2>{name}</h2>
            <span>{alcoholic}</span>
        </div>
    )
}

export default Title