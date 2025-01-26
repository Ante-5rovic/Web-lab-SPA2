<template>
  <div class="recipe-list">
    <div v-if="loading">Učitavanje recepata...</div>
    <div v-if="error">Greška pri učitavanju recepata: {{ error.message }}</div>
    <div v-else class="recipe-grid">
      <RecipeCard
        v-for="recipe in filteredRecipes"  
        :key="recipe.id"
        :recipe="recipe"
        @view-details="viewRecipeDetails"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue';
import { useRecipeStore } from '../stores/recipe';
import { storeToRefs } from 'pinia';
import { onMounted, computed } from 'vue'; 
import { useRouter } from 'vue-router';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard,
  },
  props: {
    filterText: { 
      type: String,
      default: '',
    },
  },
  setup(props) {
    const recipeStore = useRecipeStore();
    const { allRecipes, loading, error } = storeToRefs(recipeStore);
    const { fetchRecipes } = recipeStore;
    const router = useRouter();

    onMounted(() => {
      fetchRecipes();
    });

    const viewRecipeDetails = (recipeId) => {
      router.push(`/recipe/${recipeId}`);
    };


    const filteredRecipes = computed(() => {
      const filterValue = props.filterText.toLowerCase();
      return allRecipes.value.filter(recipe => {
        return recipe.title.toLowerCase().includes(filterValue);
      });
    });

    return {
      filteredRecipes, 
      loading,
      error,
      viewRecipeDetails,
    };
  },
};
</script>

  
  <style scoped>
  .recipe-list {
    padding: 20px;
  }
  
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>