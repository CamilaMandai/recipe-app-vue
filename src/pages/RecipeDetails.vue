<template>
  <routerLink to="/"><i class="material-icons mt-2">home</i></routerLink>

  <div class="card mt-5 border-0 mx-auto" style="width: 50%;">
    <div class="card-body">
      <img class="card-img-top rounded" :src="selectedRecipe.strMealThumb" :alt="selectedRecipe.strMeal" />
      <div class="d-flex justify-content-between">
        <h2 class="card-title mt-2">{{ selectedRecipe.strMeal }}</h2>
        <i class="material-icons mt-2" :class="{ 'text-danger': recipeStore.isFavorite(selectedRecipe.idMeal) }"
          @click="recipeStore.toggleFav(selectedRecipe)">
          favorite
        </i>
      </div>
      <h4 class="card-text mt-5">Ingredients</h4>
      <div>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="selectedRecipe[`strMeasure${index+1}`]">
              {{ selectedRecipe[`strMeasure${index+1}`]}} {{ selectedRecipe[`strIngredient${index+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <h4 class="card-text mt-5">Instructions</h4>
       <div>
        <!-- <template v-for="el of selectedRecipe.strInstructions.split('.')">
          <p>{{ el }}.</p>
        </template> -->
        <p>{{ selectedRecipe.strInstructions }}</p>
       </div>
    </div>
  </div>
</template> 

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

import { useRecipeStore } from '../store/RecipeStore';


const route = useRoute();
const recipeStore = useRecipeStore();
const { selectedRecipe } = recipeStore;

onMounted(async () => {
  try {
    await recipeStore.getOneRecipe(route.params.id);
    console.log(selectedRecipe.strMeal + 'loaded')
  } catch (e) { 
    console.log(e)
  }
})

</script>