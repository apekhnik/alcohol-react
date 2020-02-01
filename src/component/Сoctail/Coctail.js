import React, {useState, useEffect} from 'react'
import './Coctail.css'
const Coctail = ({src, name, alcoholic, glass, instruction, ingridients}) => {
    console.log(ingridients);

    return(
        <div className='coctail'>
            <h2>{name}</h2>
            <span>{alcoholic}</span>
            <img src={src} alt=""/>
            <div>
    {ingridients.map(item=>{
         return <p>{item}</p>
    })}
            </div>
        </div>
    )
}
export default Coctail
