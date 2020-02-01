import React, {useState, useEffect} from 'react'
import './Coctail.css'
import Title from '../Title/Title'
import Description from '../Description/Description'
import Pictire from '../Picture/Picture'
import Listing from '../Listing/Listing'
const Coctail = ({src, name, alcoholic, glass, instruction, ingridients}) => {
    console.log(src);

    return(
        <div className='coctail'>
            <Title name={name}/>
            <Description alcoholic={alcoholic}/>
            <Pictire src={src}/>
            <Listing ingridients={ingridients}/>
        </div>
    )
}
export default Coctail
