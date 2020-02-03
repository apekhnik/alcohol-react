import React,{useState, useEffect} from 'react'
import Loader from '../component/Loader/Loader'
import Coctail from '../component/Сoctail/Coctail'
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
        const ingredientList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=gin')
                        .then(toJSON)
        const response3 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
                        .then(toJSON)
        const glassList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
                        .then(toJSON)
        const responseId = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
                        .then(toJSON)
        console.log(responseId, 'byID');
        console.log(ingredientList, 'List of ingredient')
        console.log(response3, 'Cocktail_glass')
        console.log(glassList, 'List of glass');
        console.log(response.drinks[0])
        setRandom(response.drinks[0])
        setTimeout(()=>{setLoading(false)}, 1500)
    }
    const getIngredient = (coctail) => {
        const ingridient = []
    Object.entries(random).filter((item)=>{

        if(item[0].substr(0,13) === 'strIngredient' && item[1] != null) {
            ingridient.push(item[1])
        }
        // return item[0].substr(0,13) === 'strIngredient' && item[1] != null
     
    })
    return ingridient
    }
    const ingridient = getIngredient(random)

    console.log(random);

    if(loading){
        return <Loader/>
    }
    return(
        <div className="aplication">   
                <Coctail
                    src={random.strDrinkThumb}
                    name={random.strDrink}
                    alcoholic={random.strAlcoholic}
                    glass={random.strGlass}
                    instruction={random.strInstructions}
                    ingridients={ingridient}
                />
        </div>
    )
}
export default  Alco