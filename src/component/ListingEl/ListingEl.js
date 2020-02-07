import React from 'react'

const ListingEl = ({listing, prefix, onClick, className}) => {
    console.log(listing, prefix)
    
    return (
        <div className={className}>
            {listing.map((item)=>{
            const gg = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            console.log(gg)
            return <p onClick={()=>{onClick(gg)}}>{gg}</p>
            })}
        </div>
    )
}
export default ListingEl