<template>
<body>
   
    <nav>
    <router-link to="/">Home</router-link>
    <router-link :to = "{name: 'destination',params:{id:1}}"> Destination</router-link>
    <router-link :to = "{name: 'crew',params:{id:2}}">Crew</router-link>
    <router-link :to = "{name: 'technology',params:{id:3}}">Technology</router-link>
  </nav>
  <router-view/>
</body>
 
</template>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
   background-image: url("./assets/background-home-desktop.jpg");
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
    overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  /* margin: 2rem 0rem 1rem 9rem; */
  /* trbl */
  padding: 30px;
  background-color: #2c3e50;
  left: 0;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
