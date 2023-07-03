<template>
  <div>
    <h1>Looking for a delicious meal</h1>
    <div class="card mb-4" v-for="recipe in recipes">
      <img class="card-img-top" :src="recipe.strMealThumb" :alt="recipe.strMeal"/>
      <div class="card-title">{{ recipe.strMeal }}</div>
      <div class="card-body">
        <a href="#" class="btn btn-danger">YouTube</a>
        <div class="material-icons">favorite</div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
  import { useRecipeStore } from '../store/RecipeStore'

  const recipeStore = useRecipeStore()
  const { recipes } = recipeStore

</script>