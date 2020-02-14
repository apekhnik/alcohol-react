import React from 'react'

const Listing = ({title,ingredients, onClick}) =>{
    
    return(
        <div className="listing">
            <h4>{title}</h4>
            
            <div className='p-container'>
            {ingredients.map((item, index)=>{
                return <p key={index+2} onClick={()=>onClick(item)}>{index+1}. {item}</p>
            })}
            </div>
            
        </div>
    )
}
export default Listing