import { defineStore } from 'pinia';
// import { nextTick } from 'vue';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [
    ],
    favoriteList:[],
    selectedRecipe: {}
  }),
  getters: {

  },
  actions: {
    async getRecipes() {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
      const vegetarian = await res.json();
      const resVegan = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan');
      const vegan = await resVegan.json();
      this.recipes = [...vegetarian.meals, ...vegan.meals]
    },
    async getOneRecipe(id) {
      const res = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      this.selectedRecipe = data.meals[0];
    },
    toggleFav(recipe) {
      if(this.favoriteList.some(({idMeal}) => idMeal === recipe.idMeal)){
        const filteredList = this.favoriteList.filter(({idMeal}) => idMeal !== recipe.idMeal)
        this.favoriteList = filteredList;
        localStorage.setItem('favoriteList', JSON.stringify(filteredList));
        // nextTick(() => {
        //   console.log(`Receita ${recipe.strMeal} removida dos favoritos`);
        // });
      } else {
        this.favoriteList.push(recipe);
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
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

