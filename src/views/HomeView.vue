<template>
  <div class="home">
    <h1>Recepti</h1>

    <!-- Input polje za filter, two-way binding s v-model -->
    <input
      type="text"
      v-model="filterText"
      placeholder="Filtriraj recepte po nazivu"
    />

    <RecipeList :filter-text="filterText" />
  </div>
</template>

<script>
import RecipeList from "../components/RecipeList.vue";
import { ref } from "vue"; // Dodajte import ref

export default {
  name: "HomeView",
  components: {
    RecipeList,
  },
  setup() {
    const filterText = ref(""); // Kreirajte ref za filterText

    return {
      filterText, // Proslijedite filterText u template
    };
  },
};
</script>
