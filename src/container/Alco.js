import React,{useState, useEffect} from 'react'
import Loader from '../component/Loader/Loader'
const toJSON = response => response.json()

const Alco = () => {
    const [random, setRandom] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        getRandomCoctail()
    },[])
    const getRandomCoctail = async () => {
        setLoading(true)
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        .then(toJSON)

        console.log(response.drinks[0])
        setRandom(response.drinks[0])
        setLoading(false)
    }
    console.log(random);
    if(loading){
        return <Loader/>
    }
    return(
        <div>   
                <h2>{random.strDrink}</h2>
                <img src={random.strDrinkThumb} alt=""/>
        </div>
    )
}
export default  Alco