<template>
  <div>
    <h1>Looking for a delicious meal</h1>
    <div class="row">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
  import { useRecipeStore } from '../store/RecipeStore'
  import RecipeCard from '../components/RecipeCard.vue';

  const recipeStore = useRecipeStore()
  const { recipes } = recipeStore

</script>