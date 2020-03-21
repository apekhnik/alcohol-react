import React from 'react'
import RadioButton from '../RadioButton/RadioButton'
import Input from '../Input/Input'
import Form from '../Form/Form'
import Button from '../Button/Button'
import './Search.css'
const Search = ({radiodata,inputdata, error}) => {

    return(
        <div className='search'>
            <Input
                onChange={inputdata.onChange}
                onKeyPress={inputdata.onKeyPress}
                value={inputdata.value}
                placeholder={inputdata.placeholder}
                error={error}
            />
            
            <Form>
            {radiodata.map((item, index)=>{
                return <RadioButton
                            label={item.label}
                            checked={item.checked}
                            onChange={item.onChange}
                            key={index}
                        />
            })}
            <Button
                onClick={()=>{
                    inputdata.onClick(inputdata.value);
                    inputdata.clear('')
                }}
            />
            </Form>
        </div>
    )
}
export default Search