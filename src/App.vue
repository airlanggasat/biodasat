<template>
  <div id="app">
    <nav>
      <router-link to="/">Beranda</router-link> |
      <router-link to="/biodata">Biodata</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

nav {
  padding: 20px;
  background-color: #35495e;
  color: white;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
