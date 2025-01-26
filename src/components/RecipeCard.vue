<template>
    <div class="recipe-card" @click="$emit('view-details', recipe.id)">
      <img :src="recipe.imageUrl" alt="Recipe Image" class="recipe-image">
      <h3 class="recipe-title">{{ recipe.title }}</h3>
      <p class="recipe-description">{{ recipe.description }}</p>
      <button class="details-button">Pogledaj detalje</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
    emits: ['view-details'], 
  };
  </script>
  
  <style scoped>
  .recipe-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .recipe-card:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-image {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
    max-height: 150px;
    object-fit: cover;
  }
  
  .recipe-title {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 1.2em;
  }
  
  .recipe-description {
    margin-bottom: 16px;
    color: #666;
  }
  
  .details-button {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
  }
  </style>