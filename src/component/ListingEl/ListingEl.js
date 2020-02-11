import React, { useState, useEffect } from 'react'
import './ListingEl.css'
import Loader from '../Loader/Loader'
import {toJSON} from '../../constants'
import ListingItem from '../ListingItem/ListingItem'
import Title from '../Title/Title'
const ListingEl = ({listing, prefix, onClick, className, title}) => {
    const [spisok, setSpisok] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getIngredientList()

    },[])
    const getIngredientList = async () => {
        setLoading(true)
        try{
            const ingList =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
                        .then(toJSON)
        setSpisok(ingList.drinks)
        setLoading(false)
        }catch(e){

        }
    }

    if(prefix==='strDrink'){
        
    }else {
        listing = spisok
    }
    
    if(loading){
        return <Loader/>
    }
    
    return (
        <div className={className}>
            <Title
                name={title}
            />
            <ul>
            {listing.map((item)=>{
                    const listItem = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            
                return <ListingItem
                        item={listItem}
                        onClick={()=>{onClick(listItem)}}
            />
            })}
            </ul>
        </div>
    )
}
export default ListingEl