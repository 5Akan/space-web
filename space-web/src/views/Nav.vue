<template>
   <nav>
    <router-link to="/"><b>00</b> HOME</router-link>
    <router-link :to = "{name: 'destination',params:{id:1}}"><b>01</b> DESTINATION</router-link>
    <router-link :to = "{name: 'crew',params:{id:2}}"><b>02</b> CREW</router-link>
    <router-link :to = "{name: 'technology',params:{id:3}}"><b>03</b> TECHNOLOGY</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
position: fixed;
top: 0;
right: 0;
margin-top: 30px;
  /* trbl */
padding: 1.5rem 7rem 1.5rem 7rem;
background-color: rgba(158, 172, 188, 0.457);
}
nav a {
  color: white;
  padding: 1rem;
 text-decoration: none;
}
nav a:hover {
  color: lightgray;
 
}
nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline 2px;
}
nav a.router-link-exact-active hr {
  color: #ef630c;
  
}
</style>