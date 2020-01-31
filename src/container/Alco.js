import React,{useState, useEffect} from 'react'
const toJSON = response => response.json()

const Alco = () => {
    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        .then(toJSON)

        console.log(response.drinks[0])
    }
    return(
        <div>
                sad
        </div>
    )
}
export default  Alco