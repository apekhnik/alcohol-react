import React from 'react'
import Description from '../Description/Description'
import Pictire from '../Picture/Picture'
import Listing from '../Listing/Listing'
const Visual = ({title_ingridients,ingredients, glass, src, onClick}) =>{
    console.log(glass)
    return (
        <div className='visual'>
            <div className="visual_item">
                <Pictire src={src}/>
                <Description descr={glass}/>
            </div>
            <div className="visual_item">
                <Listing 
                    onClick={onClick}
                    title={title_ingridients}
                    ingredients={ingredients}/>
                    
            </div>
        </div>
    )
}
export default Visual