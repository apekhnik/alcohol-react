import React from 'react'
import classnames from 'classnames'

const Title = ({name, description, className}) => {
    const classes = classnames('title', className)
    return(
        <div className={classes}>
            <h2>{name}</h2>
            <span>{description}</span>
        </div>
    )
}

export default Title