<template>
    <div class="recipe-detail">
      <div v-if="loading">Učitavanje detalja recepta...</div>
      <div v-if="error">Greška pri učitavanju detalja: {{ error.message }}</div>
      <div v-if="recipe" class="recipe-content">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.imageUrl" alt="Recipe Image" class="detail-image">
        <p>{{ recipe.description }}</p>
        <h2>Sastojci:</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
        <router-link to="/">Povratak na popis recepata</router-link>
      </div>
      <div v-else-if="!loading && !error">
        <p>Recept nije pronađen.</p>
        <router-link to="/">Povratak na popis recepata</router-link>
      </div>
    </div>
  </template>

  <script>
  import { useRecipeStore } from '../stores/recipe'; 
  import { onMounted, ref } from 'vue'; 

  export default {
    name: 'RecipeDetailView',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const recipeStore = useRecipeStore();
      const { getRecipeById } = recipeStore;
      const loading = ref(false);
      const error = ref(null);
      const recipe = ref(null);

      onMounted(async () => {
        loading.value = true;
        error.value = null;
        try {
          await new Promise(resolve => setTimeout(resolve, 500)); 
          const recipeId = parseInt(props.id, 10);
          recipe.value = getRecipeById(recipeId);
          if (!recipe.value) {
            error.value = new Error('Recept nije pronađen lokalno.'); 
          }
        } catch (err) {
          error.value = err;
        } finally {
          loading.value = false;
        }
      });


      return {
        recipe,
        loading,
        error,
      };
    },
  };
  </script>

  <style scoped>
  .recipe-detail {
    padding: 20px;
    text-align: left;
  }

  .recipe-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .detail-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
  }
  </style>