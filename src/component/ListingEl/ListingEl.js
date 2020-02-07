import React from 'react'

const ListingEl = ({listing, prefix, onClick}) => {
    console.log(listing, prefix)
    
    return (
        <div>
            {listing.map((item)=>{
            const gg = prefix==='strDrink' ? item.strDrink : item.strIngredient1
            console.log(gg)
            return <p onClick={()=>{onClick(gg)}}>{gg}</p>
            })}
        </div>
    )
}
export default ListingEl