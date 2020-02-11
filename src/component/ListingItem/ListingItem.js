import React from 'react'

const ListingItem = ({item, onClick}) => {
    return(
        <li onClick={onClick}>{item}</li>
    )
}
export default ListingItem