import React from 'react'
import RadioButton from '../RadioButton/RadioButton'
import Input from '../Input/Input'
import Form from '../Form/Form'
import Button from '../Button/Button'
import './Search.css'
const Search = ({radiodata,inputdata}) => {

    return(
        <div className='search'>
            <Input
                onChange={inputdata.onChange}
                onKeyPress={inputdata.onKeyPress}
                value={inputdata.value}
                placeholder={inputdata.placeholder}
            />
            <Button
                onClick={()=>{inputdata.onClick(inputdata.value);inputdata.clear('')}}
            />
            <Form>
            {radiodata.map((item)=>{
                return <RadioButton
                            label={item.label}
                            checked={item.checked}
                            onChange={item.onChange}
                        />
            })}
            </Form>
        </div>
    )
}
export default Search