import React, {useState, useEffect} from 'react'

const Coctail = ({src, name, alcoholic, glass, instruction, ingridients}) => {
    console.log(ingridients);
    return(
        <div>
            <h2>{name}</h2>
            <h3>{alcoholic}</h3>
        </div>
    )
}
export default Coctail