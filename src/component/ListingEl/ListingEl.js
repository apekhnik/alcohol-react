import React from 'react'
import './ListingEl.css'
const ListingEl = ({listing, prefix, onClick, className, title}) => {
    
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