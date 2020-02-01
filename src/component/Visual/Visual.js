import React from 'react'
import Title from '../Title/Title'
import Description from '../Description/Description'
import Pictire from '../Picture/Picture'
import Listing from '../Listing/Listing'
const Visual = ({title_ingridients,ingridients, glass, src}) =>{
    console.log(glass)
    return (
        <div className='visual'>
            <div className="visual_item">
                <Pictire src={src}/>
            </div>
            <div className="visual_item">
                <Listing 
                    title={title_ingridients}
                    ingridients={ingridients}/>
                <Description descr={glass}/>
            </div>
        </div>
    )
}
export default Visual