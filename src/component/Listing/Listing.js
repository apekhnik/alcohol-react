import React from 'react'

const Listing = ({ingridients}) =>{
    return(
        <div>
            {ingridients.map((item, index)=>{
        return <p>{index+1} {item}</p>
        })}
        </div>
    )
}
export default Listing