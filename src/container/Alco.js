import React,{useState, useEffect} from 'react'
import Loader from '../component/Loader/Loader'
import Coctail from '../component/Сoctail/Coctail'
import CoctailMinimize from '../component/Сoctail/CoctailMinimize'
import ContainerItemComp from '../container/ContainerItemComp/ContainerItemComp'
import Input from '../component/Input/Input'
import ContainerComp from './ContainerComp/ContainerComp'
const toJSON = response => response.json()

const Alco = () => {
    const [random, setRandom] = useState({})
    const [loading, setLoading] = useState(false)
    const [ingredientList, setIngredientLis] = useState([])
    const [ingredientSearhcResult, setIngredientSearhcResult] = useState([])
    const [searchIngredientInput, setSearchIngredientInput] = useState('')
    const [searchCoctailInput, setSearchCoctailInput] = useState('')
    const [error, setError] = useState(false)
    const [coctailList, setCoctailList] = useState([])
    const [searchOption, setSearchOption] = useState(true)

    useEffect(()=>{
        getRandomCoctail()
        getIngredientList()
        searchIngredient()
        searchCoctailByIngredient('gin')
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
            setSearchIngredientInput('')
        }
    }
    const ingredientInputChangeHandler  = (event) => {
        setSearchIngredientInput(event.target.value)
    }
    const coctailInputChangeHandler = e => {
        setSearchCoctailInput(e.target.value)
    }
    const searchCoctailHandler = ({ key }) => {
        if (key === 'Enter') {
            finalCoctailSearch(searchCoctailInput)
            setSearchCoctailInput('')
        }
    }
    const searchCoctail = async (coctail) =>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`)
                                .then(toJSON)
        setRandom(response.drinks[0])
        setError(false)
        console.log('by name')
        }catch(e){
            setError(true)

        }
    }
    const radioDeteckt = (e) => {
        setSearchOption(true)
        console.log('name')
    }
    const searchCoctailByIngredient = async  (ingredient = 'Vodka') =>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                                .then(toJSON)
            setCoctailList(response.drinks)
            console.log('by igredient')
        }catch(e){

        }
    }
    const ingridient = getIngredient(random)
    const finalCoctailSearch = (input)=> {
        searchOption ? searchCoctailByIngredient(input) : searchCoctail(input)
    }
    
    if(loading){
        return <Loader/>
    }
    return(
        <div className="aplication">
                <ContainerComp>
                        <ContainerItemComp>
                                <div className="ingredient-listing">
                                        <Input
                                            onChange={coctailInputChangeHandler}
                                            onKeyPress={searchCoctailHandler}
                                            value={searchCoctailInput}
                                        />
                                        <form>
                                        <div>
                                            <input type="radio" id="contactChoice1"
                                            name="contact" value="email" checked={searchOption}
                                            onChange={radioDeteckt}
                                            />
                                            <label for="contactChoice1">by ingredient</label>



                                            <input type="radio" id="contactChoice3"
                                            checked={!searchOption} value="mail" onChange={()=>{setSearchOption(false);console.log('ingredient')}}/>
                                            <label for="contactChoice3">by name </label>
                                        </div>
                                        </form>        
  

                                   
                                        
                                        {coctailList.map((item, index)=>{
                                            // console.log(item)
                                        return <p onClick={()=>{searchCoctail(item.strDrink)}}>{item.strDrink}</p>
                                        })}
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
                                    error={error}
                                />
                                <CoctailMinimize
                                    name={ingredientSearhcResult.strIngredient}
                                    img
                                    description={ingredientSearhcResult.strDescription}
                                />
                        </ContainerItemComp>
                        <ContainerItemComp>
                                <div className="ingredient-listing">
                                        {/* <input type="text" 
                                        onChange={ingredientInputChangeHandler}
                                        onKeyPress={searchIngredientHandler}
                                        value={searchIngredientInput}
                                        /> */}
                                        {ingredientList.map((item)=>{
                                        return <p onClick={()=>{searchIngredient(item.strIngredient1);searchCoctailByIngredient(item.strIngredient1)}}>{item.strIngredient1}</p>
                                            
                                        })}
                                </div>
                        </ContainerItemComp>
                </ContainerComp>
        </div>
    )
}
export default  Alco