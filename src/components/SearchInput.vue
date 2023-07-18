<template>
  <h1>Looking for a delicious meal</h1>
  <div class="row">
    <div class="col-md-8 col-lg-5">
      <div class="input-group mt-4">
        <input type="text" class="form-control" aria-label="Recipient's username" 
        aria-describedby="basic-addon2" v-model="searchTerm">
        <div class="input-group-append">
          <span class="input-group-text material-icons" id="basic-addon2" @click="() => { recipeStore.searchRecipes(searchTerm); searchTerm=''}">search</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '../store/RecipeStore';
import { ref } from 'vue';
const recipeStore = useRecipeStore();
const searchTerm = ref('');
</script>