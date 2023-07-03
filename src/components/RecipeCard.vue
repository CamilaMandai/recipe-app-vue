<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card mt-5 border-0">
    <div class="card-body">
      <img class="card-img-top rounded" :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <h6 class="card-title mt-2">{{ recipe.strMeal }}</h6>
      <div class="material-icons">favorite</div>
      <p class="card-text">Deliciosa recieta caseira</p>
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