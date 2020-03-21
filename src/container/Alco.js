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
    COCTAIL_LISTING_DESCRIPTION,
    NUM_FOR_SUBSTR_INGREDIENT,
    NULL_FOR_SUBSTR_INGREDIENT,
    CONTAINER_ITEM_CENTER,
    DEFAULT_COCTAIL_LIST,
    DEAFULT_COCTAIL
} from '../constants.js'

const toJSON = response => response.json();
const Alco = () => {
    const [coctail, setCoctail] = useState(DEAFULT_COCTAIL)
    const [loading, setLoading] = useState(false)
    const [searchCoctailInput, setSearchCoctailInput] = useState('')
    const [error, setError] = useState(false)
    const [coctailList, setCoctailList] = useState(DEFAULT_COCTAIL_LIST)
    const [searchOption, setSearchOption] = useState(true)
    const [coctailReload, setCoctailReload] = useState(false)


    
    useEffect(()=>{
        setRandomCoctail()
        searchCoctailByIngredient()
    },[])

    
    const setRandomCoctail = async () => {
            setLoading(true)
       try{
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                                        .then(toJSON)
            setCoctail(response.drinks[0])
            console.log(response.drinks[0])
            setTimeout(()=>{setLoading(false)}, 1500)
       }catch(e){
            console.log(e);
       }
    }
    
    const getIngredient = (coctail) => {
        const ingridient = []
        Object.entries(coctail).forEach(([strIngredient, ingredient]) => {
            const isIngridientCorrect = strIngredient.substr(NULL_FOR_SUBSTR_INGREDIENT, NUM_FOR_SUBSTR_INGREDIENT) === 'strIngredient' && ingredient != null
            if (isIngridientCorrect) {
                ingridient.push(ingredient)
            }
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
        }
    }
    const searchCoctail = async (coctail) =>{
        setCoctailReload(true)
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`)
                                .then(toJSON)
        setCoctail(response.drinks[0])
        setError(false)
        setCoctailReload(false)
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
            console.log(e)
        }
    }
    const ingridient = getIngredient(coctail)
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
                                            description={COCTAIL_LISTING_DESCRIPTION}
                                        />
                        </ContainerItemComp>
                        <ContainerItemComp className={CONTAINER_ITEM_CENTER}>
                                    <Search
                                            radiodata={RadioData}
                                            inputdata={InputData}
                                            error={error}
                                    />
                                    <Coctail
                                            src={coctail.strDrinkThumb}
                                            name={coctail.strDrink}
                                            alcoholic={coctail.strAlcoholic}
                                            glass={coctail.strGlass}
                                            instruction={coctail.strInstructions}
                                            ingredients={ingridient}
                                            error={error}
                                            onClickIngredient={searchCoctailByIngredient}
                                            reload={coctailReload}
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