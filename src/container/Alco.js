import React,{useState, useEffect} from 'react'
import Loader from '../component/Loader/Loader'
import Coctail from '../component/Сoctail/Coctail'
import ContainerItemComp from '../container/ContainerItemComp/ContainerItemComp'
import ContainerComp from './ContainerComp/ContainerComp'
import ListingEl from '../component/ListingEl/ListingEl'
import Search from '../component/Search/Search'
import {
    INGREDIENT_LISTING,
    PREFIX_INGREDIENT,
    PREFIX_DRINK,
    INGREDIENT_TITLE,
    COCTAIL_TITLE,
    PLACEHOLDER_INGREDIENT,
    PLACEHOLDER_NAME,
    INGREDIENT_TITLE_DESCRIPTION,
    toJSON
} from '../constants.js'


const Alco = () => {
    const [random, setRandom] = useState({})
    const [loading, setLoading] = useState(false)
    const [ingredientList, setIngredientLis] = useState([])
    const [searchCoctailInput, setSearchCoctailInput] = useState('')
    const [error, setError] = useState(false)
    const [coctailList, setCoctailList] = useState([])
    const [searchOption, setSearchOption] = useState(true)
    const [test, setTest] = useState('')
    useEffect(()=>{
        getRandomCoctail()
        // getIngredientList()
        searchCoctailByIngredient()
    },[])
    // const getIngredientList = async () => {
    //     const ingList =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    //                     .then(toJSON)
    //     setIngredientLis(ingList.drinks)
    // }

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
    
    const coctailInputChangeHandler = e => {
        setSearchCoctailInput(e.target.value)
    }
    const searchCoctailHandler = ({ key }) => {
        if (key === 'Enter') {
            finalCoctailSearch(searchCoctailInput)
            setSearchCoctailInput('')
            setTest(searchCoctailInput)
        }
    }
    const searchCoctail = async (coctail) =>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`)
                                .then(toJSON)
        setRandom(response.drinks[0])
        setError(false)
        }catch(e){
            setError(true)

        }
    }
    const searchCoctailByIngredient = async  (ingredient = 'Vodka') =>{
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                                .then(toJSON)
            setCoctailList(response.drinks)
            
        }catch(e){
            console.log()
        }
    }
    const ingridient = getIngredient(random)
    const inputPlaceholder =  searchOption ? PLACEHOLDER_INGREDIENT : PLACEHOLDER_NAME
    const finalCoctailSearch = (input)=> {
        searchOption ? searchCoctailByIngredient(input) : searchCoctail(input)
    }
    const RadioData = [
        {
            label: 'ingredient',
            checked: searchOption,
            onChange: ()=>{setSearchOption(true)}
        },
        {
            label: 'name',
            checked: !searchOption,
            onChange: ()=>{setSearchOption(false)}
        }
    ]
    const InputData = {
        onChange: coctailInputChangeHandler,
        onKeyPress:searchCoctailHandler,
        value:searchCoctailInput,
        placeholder: inputPlaceholder,
        onClick: finalCoctailSearch,
        clear: setSearchCoctailInput
    }
    if(loading){
        return <Loader/>
    }
    console.log(searchOption)
    return(
        <div className="application">
                <ContainerComp>
                        <ContainerItemComp>
                                        
                                        <ListingEl 
                                            className={INGREDIENT_LISTING}
                                            listing={coctailList}
                                            prefix={PREFIX_DRINK}
                                            onClick={searchCoctail}
                                            title={COCTAIL_TITLE}
                                        />
                        </ContainerItemComp>
                        <ContainerItemComp className={'container-item_center'}>
                                    <Search
                                            radiodata={RadioData}
                                            inputdata={InputData}
                                            error={error}
                                    />
                                    <Coctail
                                    src={random.strDrinkThumb}
                                    name={random.strDrink}
                                    alcoholic={random.strAlcoholic}
                                    glass={random.strGlass}
                                    instruction={random.strInstructions}
                                    ingredients={ingridient}
                                    error={error}
                                    onClickIngredient={searchCoctailByIngredient}
                                />
                        </ContainerItemComp>
                        <ContainerItemComp>
                                        <ListingEl 
                                            className={INGREDIENT_LISTING}
                                            listing
                                            prefix={PREFIX_INGREDIENT}
                                            onClick={searchCoctailByIngredient}
                                            title={INGREDIENT_TITLE}
                                            description={INGREDIENT_TITLE_DESCRIPTION}
                                        />
                        </ContainerItemComp>
                </ContainerComp>
        </div>
    )
}
export default  Alco