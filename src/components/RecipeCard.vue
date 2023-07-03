<template>
  <div class="col-sm-4">
  <div class="card mt-5">
    <div class="card-body">
      <img class="card-img-top" :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <h5 class="card-title mt-2">{{ recipe.strMeal }}</h5>
      <a href="#" class="btn btn-danger">YouTube</a>
      <div class="material-icons">favorite</div>
    </div>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  }
})

</script>