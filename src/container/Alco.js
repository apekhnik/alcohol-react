import React,{useState, useEffect} from 'react'
import Loader from '../component/Loader/Loader'
import Coctail from '../component/Сoctail/Coctail'
import CoctailMinimize from '../component/Сoctail/CoctailMinimize'
import ContainerItemComp from '../container/ContainerItemComp/ContainerItemComp'
import ContainerComp from './ContainerComp/ContainerComp'
const toJSON = response => response.json()

const Alco = () => {
    const [random, setRandom] = useState({})
    const [loading, setLoading] = useState(false)
    const [ingredientList, setIngredientLis] = useState([])
    const [ingredientSearhcResult, setIngredientSearhcResult] = useState([])
    const [searchIngredientInput, setSearchIngredientInput] = useState('')
    const [searchCoctailInput, setSearchCoctailInput] = useState('')
    
    
    
    console.log(ingredientSearhcResult, 'search ingridient')
    console.log(ingredientList, 'list of ingredient')
    useEffect(()=>{
        getRandomCoctail()
        getIngredientList()
        searchIngredient()
    },[])
    const getIngredientList = async () => {
        const ingList =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
                        .then(toJSON)
        setIngredientLis(ingList.drinks)
    }
    const searchIngredient = async (search='gin') => {
        const searchResult = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`)
                            .then(toJSON)
        setIngredientSearhcResult(searchResult.ingredients[0])
    }
    const getRandomCoctail = async () => {
        setLoading(true)
       try{
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        .then(toJSON)
            console.log(response)
            setRandom(response.drinks[0])
            setTimeout(()=>{setLoading(false)}, 1500)
       }catch(e){
            console.log(e);
       }
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
    const searchIngredientHandler = ({ key }) => {
        if (key === 'Enter') {
            searchIngredient(searchIngredientInput)
        }
    }
    const ingredientInputChangeHandler  = (event) => {
        setSearchIngredientInput(event.target.value)
    }
    const coctailInputChangeHandler = e => {
        setSearchCoctailInput(e.target.value)
        console.log(searchCoctailInput)
    }
    const searchCoctailHandler = ({ key }) => {
        if (key === 'Enter') {
            searchCoctail(searchCoctailInput)
        }
    }
    const searchCoctail = async (coctail) =>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`)
                                .then(toJSON)
        console.log(response.drinks[0])
        setRandom(response.drinks[0])
        }catch(e){
            console.log(e);
        }
    }
    const ingridient = getIngredient(random)

    console.log(ingredientList);

    if(loading){
        return <Loader/>
    }
    return(
        <div className="aplication">
                <ContainerComp>
                        <ContainerItemComp>
                                <div className="listing">
                                        <input type="text" 
                                            onChange={coctailInputChangeHandler}
                                            onKeyPress={searchCoctailHandler}
                                        />
                                        
                                </div>
                        </ContainerItemComp>
                        <ContainerItemComp>
                                <Coctail
                                    src={random.strDrinkThumb}
                                    name={random.strDrink}
                                    alcoholic={random.strAlcoholic}
                                    glass={random.strGlass}
                                    instruction={random.strInstructions}
                                    ingridients={ingridient}
                                />
                                <CoctailMinimize
                                    name={ingredientSearhcResult.strIngredient}
                                    img
                                    description={ingredientSearhcResult.strDescription}
                                />
                        </ContainerItemComp>
                        <ContainerItemComp>
                                <div className="ingredient-listing">
                                        <input type="text" 
                                        onChange={ingredientInputChangeHandler}
                                        onKeyPress={searchIngredientHandler}
                                        />
                                        {ingredientList.map((item)=>{
                                        return <p onClick={()=>{searchIngredient(item.strIngredient1)}}>{item.strIngredient1}</p>
                                            
                                        })}
                                </div>
                        </ContainerItemComp>
                </ContainerComp>
        </div>
    )
}
export default  Alco