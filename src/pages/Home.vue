<template>
  <div>
    <pre>{{ recipeStore.favoriteList }}</pre>
    <h1>Looking for a delicious meal</h1>
    <SearchInput />
    <div v-if="loading">Loading...</div>
    <div class="d-flex mt-5 pe-auto">
      <p :class="{'not-selected':isFavorite}" class="px-4 hover" @click="isFavorite=false"> All meals </p>
      <p :class="{'not-selected':!isFavorite}" class="px-4 hover" @click="isFavorite=true"> My favorite meals </p>
    </div>
    <div class="row" v-if="!isFavorite">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
    <div class="row" v-if="isFavorite">
      <RecipeCard v-for="fav in favoriteList" :key="fav.id" :recipe="fav" />
    </div>

  </div>
</template>

<script setup>
import SearchInput from '../components/SearchInput.vue'
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from '../components/RecipeCard.vue';
import { onMounted, ref } from 'vue';

const recipeStore = useRecipeStore();
const loading = ref();
// recipeStore.getRecipes();
onMounted( async() => {
  loading.value= true;
  await recipeStore.getRecipes();
  loading.value= false;
  const savedFav = JSON.parse(localStorage.getItem('favoriteList'));
  recipeStore.favoriteList = [...savedFav];
})

const { recipes } = recipeStore;
const { favoriteList } = recipeStore;

const isFavorite = ref(false);

</script>