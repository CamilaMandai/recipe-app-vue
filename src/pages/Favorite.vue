<template>
  <h1>Looking for a delicious meal</h1>
    <SearchInput />
    <div class="d-flex mt-5 pe-auto">
      <routerLink :to="{name: 'home'}"><p :class="{'not-selected':isFavorite}" class="px-4 hover" @click="isFavorite=false"> All meals </p></routerLink>
      <p :class="{'not-selected':!isFavorite}" class="px-4 hover" @click="isFavorite=true"> My favorite meals </p>
    </div>
    <div class="row">
      <RecipeCard v-for="fav in favoriteList" :key="fav.id" :recipe="fav" />
    </div>
</template>

<script setup>
import SearchInput from '../components/SearchInput.vue'
import { useRecipeStore } from '../store/RecipeStore';
import RecipeCard from '../components/RecipeCard.vue';
import { onMounted, ref } from 'vue';

const recipeStore = useRecipeStore(); 
  const savedFav = JSON.parse(localStorage.getItem('favoriteList'));
  recipeStore.favoriteList = [...savedFav];

const { favoriteList } = recipeStore;

const isFavorite = ref(true);

</script>