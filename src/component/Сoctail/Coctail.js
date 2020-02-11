import React from 'react'
import './Coctail.css'
import Error from '../ErrorComponent/Error'
import Visual from '../Visual/Visual'
import Instructions from '../Instructions/Instructions'
import Title from '../Title/Title'
import classnames from 'classnames'
const Coctail = ({src, name, alcoholic, glass, instruction, ingredients, error, onClickIngredient}) => {
    const alco = alcoholic === 'Alcoholic' ? 'alco-coctail' : 'non-coctail'
    const classes = classnames('coctail',alco)
    if(error) {
        return (
            <Error/>
        )
    }
    
    return(
        <div className={classes}>
            <Title
                name={name} 
                description={alcoholic}/>
            <Visual
                src={src}
                title_ingridients='Ingredients'
                ingredients={ingredients}
                glass={glass}
                onClick={onClickIngredient}
            />


            <Instructions
                title='Instruction:'
                instruction={instruction}
            />
        </div>
    )
}
export default Coctail
