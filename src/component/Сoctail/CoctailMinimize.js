import React from 'react'

const CoctailMinimize = ({name, description, img}) =>{
    return(
        <div className="minimize">
            <p>{name}</p>
            <img src={img} alt=""/>
            <span>{description}</span>
        </div>
    )
}
export default CoctailMinimize