import React from 'react'

const Picture = ({src}) => {
    console.log(src);
    return(
        <img src={src} alt=""/>
    )
}
export default Picture