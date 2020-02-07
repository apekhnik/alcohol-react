import React from 'react'

const Listing = ({title,ingredients}) =>{
    
    return(
        <div className="listing">
            <h4>{title}</h4>
            <ul>
            {ingredients.map((item, index)=>{
        return <li key={index+2}>{index+1}. {item}</li>
        })}
            </ul>
        </div>
    )
}
export default Listing