import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedMealIngredients, setSelectedMealIngredients] = useState(null);

  const fetchMealsByIngredient = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meal ideas: ", error);
      setMeals([]);
    }
  };

  const fetchIngredientsByMeal = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      if (data.meals) {
        setSelectedMealIngredients(data.meals[0]);
      } else {
        setSelectedMealIngredients(null);
      }
    } catch (error) {
      console.error("Error fetching meal ingredients: ", error);
      setSelectedMealIngredients(null);
    }
  };

  useEffect(() => {
    if (ingredient) {
      setSelected(false);
      setMeals([]);
      fetchMealsByIngredient(ingredient);
    }
  }, [ingredient]);

  const handleMealClick = (meal) => {
    setSelected(true);
    fetchIngredientsByMeal(meal.idMeal);
  };

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', borderBottom: '2px solid black', color: 'lightblue' }}>Meal Ideas</h1>

      {selected ? (
        selectedMealIngredients ? (
          <div>
            <h2 style={{ color: 'lightblue' }}>Selected Meal: {selectedMealIngredients.strMeal}</h2>
            <img src={selectedMealIngredients.strMealThumb} alt={selectedMealIngredients.strMeal} style={{ width: '150px', height: '150px' }} />
            <h3 style={{ color: 'lightblue' }}>Ingredients:</h3>
            <ul style={{ color: 'black' }}>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = selectedMealIngredients[`strIngredient${i}`];
                const measure = selectedMealIngredients[`strMeasure${i}`];
                return ingredient ? <li key={i} style={{ color: 'black' }}>{`${ingredient}: ${measure}`}</li> : null;
              })}
            </ul>
          </div>
        ) : <p style={{ color: 'black' }}>No meal selected</p>
      ) : (
        meals.length > 0 ? (
          <div>
            <h2 style={{ color: 'lightblue' }}>Here are some meal ideas using {ingredient}:</h2>
            <ul>
              {meals.map((meal) => (
                <li key={meal.idMeal} onClick={() => handleMealClick(meal)} style={{ color: 'lightblue', cursor: 'pointer' }}>
                  {meal.strMeal}
                  <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '50px', height: '50px' }} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{ color: 'black' }}>No meals found for {ingredient}</p>
        )
      )}
    </div>
  );
}
