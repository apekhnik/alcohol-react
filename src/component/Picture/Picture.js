import React from 'react'

const Picture = ({src}) => {

    return(
        <div className='image'>
            <img src={src} alt=""/>
        </div>
    )
}
export default Picture