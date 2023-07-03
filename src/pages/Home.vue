<template>
  <div>
    <h1>Looking for a delicious meal</h1>
    <SearchInput />
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
import { ref } from 'vue';

const recipeStore = useRecipeStore();
const { recipes } = recipeStore;
const { favoriteList } = recipeStore;

const isFavorite = ref(false);

</script>