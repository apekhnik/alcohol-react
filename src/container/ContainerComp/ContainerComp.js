import React from 'react'
import './ContainerComp.css'
const ContainerComp = ({children}) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}
export default ContainerComp