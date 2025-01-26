import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    recipes: [],
    loading: false,
    error: null,
  }),
  getters: {
    allRecipes: (state) => state.recipes,
  },
  actions: {
    async fetchRecipes() {
      this.loading = true;
      this.error = null;
      await new Promise(resolve => setTimeout(resolve, 1500));

      try {
        const mockRecipes = [
          { id: 1, title: 'Pasta Carbonara', description: 'Klasični talijanski recept.', ingredients: ['špageti', 'jaja', 'panceta', 'parmezan'], imageUrl: 'https://www.marthastewart.com/thmb/S9xVtnWSHldvxPHKOxEq0bALG-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg' },
          { id: 2, title: 'Palačinke', description: 'Jednostavne i ukusne.', ingredients: ['brašno', 'mlijeko', 'jaja', 'šećer'], imageUrl: 'https://www.pcelarstvo-krizmanic.hr/images/blog/palacinke/palacinke-recept-1000w.jpg' },
          { id: 3, title: 'Pileći curry', description: 'Aromatični curry s piletinom i povrćem.', ingredients: ['piletina', 'kokosovo mlijeko', 'curry pasta', 'povrće'], imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg' },
          { id: 4, title: 'Čokoladni kolač', description: 'Sočan i dekadentan kolač.', ingredients: ['brašno', 'šećer', 'kakao', 'jaja', 'ulje'], imageUrl: 'https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg' },
        ];
        this.recipes = mockRecipes;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    getRecipeById(id) {
      return this.recipes.find(recipe => recipe.id === id);
    },
  },
});