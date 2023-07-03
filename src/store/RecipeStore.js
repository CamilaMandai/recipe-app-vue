import { defineStore } from 'pinia';
import { nextTick } from 'vue';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [
      {
        strMeal: "Cajun spiced fish tacos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: 52819
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: 529441
        },
        {
        strMeal: "Fish fofos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        idMeal: 530432
        },
        {
          strMeal: "Cajun spiced fish tacos",
          strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
          idMeal: 528193
        },
        {
          strMeal: "Escovitch Fish",
          strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
          idMeal: 529444
          },
          {
          strMeal: "Fish fofos",
          strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
          idMeal: 530435
          },{
        strMeal: "Cajun spiced fish tacos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: 528196
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: 529447
        },
        {
        strMeal: "Fish fofos",
        strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        idMeal: 530438
        }
    ],
    favoriteList:[{
      strMeal: "Escovitch Fish",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      idMeal: 52944
      },
      {
      strMeal: "Fish fofos",
      strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      idMeal: 530438
      }]
  }),
  getters: {

  },
  actions: {
    toggleFav(recipe) {
      if(this.favoriteList.some(({idMeal}) => idMeal === recipe.idMeal)){
        const filteredList = this.favoriteList.filter(({idMeal}) => idMeal !== recipe.idMeal)
        this.favoriteList = filteredList;

        nextTick(() => {
          // Ações adicionais após a atualização da lista de favoritos
          console.log(`Receita ${recipe.strMeal} removida dos favoritos`);
        });
      } else {
        this.favoriteList.push(recipe)
      }
    },
    isFavorite(id) {
      if(this.favoriteList.some(({idMeal}) => idMeal === id)){
        return true;
      }
      return false;
    },
  },
})

