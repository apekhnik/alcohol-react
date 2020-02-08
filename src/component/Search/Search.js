import React from 'react'
import RadioButton from '../RadioButton/RadioButton'
const Search = ({data}) => {
    console.log(data)
    return(
        <div className='search'>
            {data.map((item)=>{
                console.log(item)
                return <RadioButton
                            label={item.label}
                            checked={item.checked}
                            onChange={item.onChange}
                        />
            })}
        </div>
    )
}
export default Search