import React from 'react'
import './ListingItem.css'
const ListingItem = ({item, onClick}) => {
    return(
        <li onClick={onClick}>{item}</li>
    )
}
export default ListingItem