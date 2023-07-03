<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card mt-5 border-0">
    <div class="card-body">
      <routerLink :to="{name:'recipe'}"><img class="card-img-top rounded" :src="recipe.strMealThumb" :alt="recipe.strMeal" /></routerLink>
      <h6 class="card-title mt-2">{{ recipe.strMeal }}</h6>
      <i 
        class="material-icons"
        :class="{'text-danger': recipeStore.isFavorite(recipe.idMeal)}"
        @click="recipeStore.toggleFav(recipe)"
        >
        favorite
      </i>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '../store/RecipeStore';

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  }
})
const recipeStore = useRecipeStore();

</script>