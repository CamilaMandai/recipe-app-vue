<template>
  <!-- <pre>{{ recipeStore.recipes }}</pre> -->
  <div>
    <SearchInput />
    <div class="pt-5" v-if="loading">Loading...</div>
    <div class="d-flex mt-5 pe-auto">
      <p :class="{'not-selected':isFavorite}" class="px-4 hover" @click="() => { recipeStore.getRecipes();isFavorite=false}"> All meals </p>
      <p :class="{'not-selected':!isFavorite}" class="px-4 hover" @click="isFavorite=true"> My favorite meals </p>
    </div>
    <div class="row" v-if="!isFavorite">
      <RecipeCard v-if="recipeStore.recipes.length > 0" v-for="recipe in recipeStore.recipes" :key="recipe.idMeal" :recipe="recipe" />
      <div class="pt-5" v-if="recipeStore.recipes.length === 0 && !loading">Nenhuma receita encontrada</div>
    </div>
    <div class="row" v-if="isFavorite">
      <RecipeCard v-for="fav in recipeStore.favoriteList" :key="fav.idMeal" :recipe="fav" />
    </div>

  </div>
</template>

<script setup>
import SearchInput from '../components/SearchInput.vue';
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from '../components/RecipeCard.vue';
import { onMounted, ref } from 'vue';

const recipeStore = useRecipeStore();
let loading = true;
// recipeStore.getRecipes();
onMounted( () => {
  loading = true;
  recipeStore.getRecipes();
  loading = false;
  const savedFav = JSON.parse(localStorage.getItem('favoriteList'));
  recipeStore.favoriteList = [...savedFav];
})
const isFavorite = ref(false); 

</script>