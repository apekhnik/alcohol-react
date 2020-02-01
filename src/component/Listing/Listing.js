import React from 'react'

const Listing = ({title,ingridients}) =>{
    console.log(ingridients)
    return(
        <div className="listing">
            <h4>{title}</h4>
            <ul>
            {ingridients.map((item, index)=>{
        return <li>{index+1}. {item}</li>
        })}
            </ul>
        </div>
    )
}
export default Listing