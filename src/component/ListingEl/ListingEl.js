import React from 'react'

const ListingEl = ({listing, prefix, onClick, className}) => {
    
    return (
        <div className={className}>
            {listing.map((item)=>{
            const gg = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            return <p onClick={()=>{onClick(gg)}}>{gg}</p>
            })}
        </div>
    )
}
export default ListingEl