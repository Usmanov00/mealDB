import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const LatestMealInfo = () => {
  const {id} = useParams()
  const [latest, setLatest] = useState({})
  const [ingredients, setIngredients] = useState([])
  const getIngredients =(meal) => {
    let result = []
    for (let i = 0; i < 20; i++){
      if ( meal[`strIngredient${i + 1}`]) {
        result = [...result, meal[`strIngredient${i + 1}`]]
      }
    }
    setIngredients(result)
  }
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v2/1/latest.php`)
      .then(res => {
        setLatest(res.data.meals[0])
        getIngredients(res.data.meals[0])
      })
  }, [id])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className="meal-name">{latest.strMeal}</h2>
            <img src={latest.strMealThumb} alt="" width={"100%"}/>
          </div>
          <h2 className="meal-name">{}</h2>
          <div className="col">
            {
              ingredients.map((ingredient, idx) => (
                <div key={idx} >

                  <div className="col">{ingredient}</div>
                  <img src={`https://www.themealdb.com/images/ingredients/${ingredient}`} alt=""/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestMealInfo;