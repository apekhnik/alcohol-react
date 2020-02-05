import React from 'react'
import './Coctail.css'
import Visual from '../Visual/Visual'
import Instructions from '../Instructions/Instructions'
import Title from '../Title/Title'

const Coctail = ({src, name, alcoholic, glass, instruction, ingridients, error}) => {
    
    if(error) {
        return (
            <div className='coctail'>
            <h1>Не найден </h1>
        </div>
        )
    }

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
