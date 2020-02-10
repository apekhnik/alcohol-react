import React from 'react'
import classnames from 'classnames'

const Title = ({name, description}) => {
    const alco = description === 'Alcoholic' ? 'alco' : 'non-alco'
    const classes = classnames(alco)
    return(
        <div className='title'>
            <h2 className={alco}>{name}</h2>
            <span>{description}</span>
        </div>
    )
}

export default Title