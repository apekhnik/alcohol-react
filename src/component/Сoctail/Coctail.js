import React, {useState, useEffect} from 'react'
import './Coctail.css'
import Visual from '../Visual/Visual'
import Instructions from '../Instructions/Instructions'
import Title from '../Title/Title'

const Coctail = ({src, name, alcoholic, glass, instruction, ingridients}) => {
    

    return(
        <div className='coctail'>
            <Title name={name} 
            description={alcoholic}/>
            <Visual
                src={src}
                title_ingridients='Ingredients'
                ingridients={ingridients}
                glass={glass}
            />


            <Instructions
                title='Instruction:'
                instruction={instruction}
            />
        </div>
    )
}
export default Coctail
