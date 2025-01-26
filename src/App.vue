<template>
  <div id="app">
    <nav>
      <router-link to="/">Recepti</router-link>
      <router-link to="/about">O aplikaciji</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #f8f8f8; 
  padding: 15px 30px; 
  display: flex; 
  justify-content: center; 
  border-bottom: 1px solid #eee; 
}

nav a {
  font-weight: bold;
  color: #333; 
  text-decoration: none;
  margin: 0 15px; 
}

nav a.router-link-exact-active {
  color: #007bff; 
}
</style>