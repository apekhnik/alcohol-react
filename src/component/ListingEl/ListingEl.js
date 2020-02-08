import React from 'react'
import './ListingEl.css'
const ListingEl = ({listing, prefix, onClick, className}) => {
    
    return (
        <div className={className}>
            <ul>
            {listing.map((item)=>{
            const gg = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            return <li onClick={()=>{onClick(gg)}}>{gg}</li>
            })}
            </ul>
        </div>
    )
}
export default ListingEl