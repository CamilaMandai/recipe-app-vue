import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [
      {
        strMeal: "Cajun spiced fish tacos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: "52819"
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: "52944"
        },
        {
        strMeal: "Fish fofos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        idMeal: "53043"
        }
    ],
  }),
  actions: () => ({

  }),
})

