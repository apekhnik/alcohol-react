import React, { useState } from 'react'
import './ListingEl.css'
import {toJSON} from '../../constants'
const ListingEl = ({listing, prefix, onClick, className, title, searchItems}) => {
    const [spisok, setSpisok] = useState([])
    const [searchDetail, setSearchDetail] = useState(false)
    const getIngredientList = async () => {
        const ingList =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
                        .then(toJSON)
    setSpisok(ingList.drinks)
    }
    if(prefix==='strDrink'){
        
    }else {
        getIngredientList()
        
    }
    return (
        <div className={className}>
            <h2>{title}</h2>
            <ul>
            {listing.map((item)=>{
            const listItem = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            return <li onClick={()=>{onClick(listItem)}}>{listItem}</li>
            })}
            </ul>
        </div>
    )
}
export default ListingEl