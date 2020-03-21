import React, { useState, useEffect } from 'react'
import './ListingEl.css'
import Loader from '../Loader/Loader'
import ListingItem from '../ListingItem/ListingItem'
import Title from '../Title/Title'
const toJSON = response => response.json();
const ListingEl = ({listing, prefix, onClick, className, title, description}) => {
    
    const [spisok, setSpisok] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setIngredientList()

    },[])
    const setIngredientList = async () => {
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
                className='fixed'
                description={description}
            />
            <ul>
            {listing.map((item, index)=>{
                    const listItem = prefix==='strDrink' ? item.strDrink : item.strIngredient1
                return <ListingItem
                        item={listItem}
                        onClick={()=>{onClick(listItem)}}
                        key={index}
            />
            })}
            </ul>
        </div>
    )
}
export default ListingEl