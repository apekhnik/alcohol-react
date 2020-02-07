import React from 'react'

const CoctailMinimize = ({name, description, img}) =>{
    if(description != null) {
        return(
            <div className="minimize">
                <p>{name}</p>
                {/* <img src={img} alt=""/> */}
                <span>{description}</span>
            </div>
        )
    }else{
        return null
    }
    
}
export default CoctailMinimize