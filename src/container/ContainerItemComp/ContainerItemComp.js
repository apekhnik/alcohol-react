import React from 'react'
import classnames  from 'classnames'
const ContainerItemComp = ({children, className}) => {
    const classes = classnames('container-item', className);
    return(
        <div className={classes}>
            {children}
        </div>
    )
}
export default ContainerItemComp