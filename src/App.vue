<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Red Hat Display", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}


nav a.router-link-exact-active {
  color: #42b983;
}
</style>
