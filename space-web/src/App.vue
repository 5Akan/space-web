<template>
<div class="content">
  <div class="use">
    <img class="icon" src= "./assets/meteor-solid.svg">
    <Nav/>
  </div>

  <router-view/>
</div>

</template>

<script>

import Nav from './views/Nav.vue';

export default {
  components: { Nav },
  
  setup(){

  }
}
</script>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
  margin: 0;
  overflow: hidden;
}
.content{
  margin-top: 0;
}
.use{
  display: flex;
}
.icon{
 position: absolute;
 width:47px;
 color: white;
 padding: 0;
 margin: 2rem 4rem 2rem 3rem;
 /* trbl */
}
@media screen and (min-width: 720px) and (max-width:826px){
  .icon{
 position: absolute;
 width:47px;
 color: white;
 padding: 0;
 margin: 1rem 5rem 2rem 2rem;
 /* trbl */
}
}
@media screen and (max-width:720px){
  .icon{
  position: absolute;
  width:47px;
  color: white;
  padding: 0;
  margin: 1rem 5rem 2rem 1rem;
  /* t r b l */
  }
}
/* .body{
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
   background-image: url("./assets/background-home-desktop.jpg");
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
    overflow: hidden;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
