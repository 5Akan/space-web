<template>
<body>
    <div class="container">
<div class="nav">
    <span @click="showSpecificDiv(1)" :class = "{active:showDiv ===1}">Show 1</span>
    <span @click="showSpecificDiv(2)" :class = "{active:showDiv ===2}">Show 2</span>
    <span @click="showSpecificDiv(3)"  :class = "{active:showDiv ===3}">Show 3</span>

    <div v-if="showDiv ===1" class="contain">Checking 1</div>
    <div v-else-if="showDiv ===2" class="contain">Checking 2</div>
    <div v-else-if="showDiv ===3" class="contain">Checking 3</div>
    </div>
    </div>
    

    
</body>
</template>

<script>
import { ref } from 'vue';
export default {
setup(){
    const showDiv = ref(1);
    const showSpecificDiv = (num) =>{
        showDiv.value = num;
    }
    return{showDiv, showSpecificDiv}
 }
}

</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(../assets/background-destination-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.container{
display: flex;
  width: 70rem;
  height: 22rem;
  margin: 13rem 1rem 20rem 8rem;
  color: white;
   background: grey; 
}
.nav{
    
    background-color: none;
    color: antiquewhite;

}
.contain{
    width: 50rem;
  height:12rem;
  background: lightblue;
}

/* nav a {
 
  padding: 1.3rem;
 text-decoration: none;
 font-size: 14px;
} */
/* nav a:hover {
  color: lightgray;
 
} */
/* nav a.router-link-exact-active {
  color: white;
  text-decoration: underline 2px;
  text-underline-offset: 25px;
} */

.active{
    color: white;
    text-decoration: underline 2px;
}

</style>