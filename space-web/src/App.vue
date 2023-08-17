<template>
<div class="content">
  <img class="icon" src= "./assets/meteor-solid.svg">
<Nav/>
<hr>
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
hr{
  position: fixed;
  margin: 4rem  1rem  4rem  10rem;
  width: 30rem;
  opacity: 0.3;
  border: 0.3px solid white;
}
.icon{
 position: fixed;
 width:45px;
 color: white;
 padding: 0;
 margin: 2rem 4rem 2rem -38rem;
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
