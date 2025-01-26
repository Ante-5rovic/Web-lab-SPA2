<template>
    <div class="not-found">
      <h1>404 - Stranica nije pronađena</h1>
      <p>Žao nam je, stranica koju tražite ne postoji.</p>
      <router-link to="/">Povratak na početnu stranicu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundView',
  };
  </script>