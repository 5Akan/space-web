<template>
 
   <nav>
    <router-link to="/"><b>00</b> HOME</router-link>
    <router-link :to = "{name: 'destination',params:{id:1}}"><b>01</b> DESTINATION</router-link>
    <router-link :to = "{name: 'crew',params:{id:2}}"><b>02</b> CREW</router-link>
    <router-link :to = "{name: 'technology',params:{id:3}}"><b>03</b> TECHNOLOGY</router-link>
  </nav>

                        
           <div class="sub-menu" v-if= "showimg ===2">
              <ul>
                 <li> <router-link to="/"><b>00</b> HOME</router-link></li>
                 <li> <router-link :to = "{name: 'destination',params:{id:1}}"><b>01</b> DESTINATION</router-link></li>
                 <li><router-link :to = "{name: 'crew',params:{id:2}}"><b>02</b> CREW</router-link></li>
                 <li><router-link :to = "{name: 'technology',params:{id:3}}"><b>03</b> TECHNOLOGY</router-link></li>
              </ul>
           </div>
                  
  
  <hr><hr/>
  <transition name="fade" mode="in-out">
    <img v-if= "showimg ===1" @click="showSpecificImg(2)" src="../assets/icon-hamburger.svg" alt="" srcset="" class="hamburger">
     <img v-else-if= "showimg ===2" @click="showSpecificImg(1)" src="../assets/icon-close.svg" alt="" srcset="" class="close">
    </transition>
</template>

<script setup>
import { ref } from "vue";

  const showimg = ref(1);

  const showSpecificImg = (num) => {
    showimg.value = num;
  }
</script>

  <style >
@media screen and (min-width: 863px) and (max-width:1440px){

    .hamburger{
      display: none;
    }
    .sub-menu{
      display: none;
    }
        nav {
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 30px;
    margin-left: 0;
      /* trbl */
    padding: 1.5rem 7rem 1.5rem 7rem;
    background-color: rgba(158, 172, 188, 0.457);
    }
    nav a {
      color: white;
      padding: 1.3rem;
    text-decoration: none;
    font-size: 14px;
    }
    nav a:hover {
      color: lightgray;
    
    }
    nav a.router-link-exact-active {
      color: white;
      text-decoration: underline 2px;
      text-underline-offset: 25px;
    }
    hr{
      position: fixed;
      margin: 4rem  1rem  4rem  9rem;
      /* trbl */
      width: 34rem;
      opacity: 0.3;
      border: 0.3px solid white;
    }
  }
@media screen and (min-width: 720px) and (max-width:863px){
    nav {
    position: fixed;
    top: 0;
    right: 0;
    margin-left: 0;
      /* trbl */
    padding: 1.5rem ;
    background-color: rgba(158, 172, 188, 0.457);
    }
    nav a {
      color: white;
      padding: 1.3rem;
      text-decoration: none;
      font-size: 12px;
    }
    nav a:hover {
      color: lightgray;
    
    }
    nav a.router-link-exact-active {
      color: white;
      text-decoration: underline 2px;
      text-underline-offset: 25px;
    }
    hr{
    display: none;
    }
    .hamburger{
      display: none;
    }
    .sub-menu{
      display: none;
    }
}
@media screen and (max-width:720px){
  nav {
    display: none;
    }

    hr{
    display: none;
    }
    .hamburger{
      width: 2.5rem;
      position: fixed;
      margin-left: 87%;
      margin-top: 2rem;
    }
    .close{
      width: 2.5rem;
      position: fixed;
      margin-left: 87%;
      margin-top: 2rem;

    }
    .sub-menu{

     background: linear-gradient(90deg, rgba(2, 0, 36, 0.698) 0%, rgba(63, 63, 209, 0.874) 48%, rgba(0,212,255,1) 100%);
      position: absolute;
       width: 100%;
       height: 16rem;
      text-align: left;
      border-radius: 4px 4px;
      /* width: 9rem; */
    }
    .sub-menu ul{
      margin-top: 5rem;
    }
    .sub-menu a{
      padding-left: 4px;
      margin-bottom: 1rem;
      color: rgb(249, 246, 253);
      text-decoration: none;
      font-size: 20px;
    }

     .sub-menu a.router-link-exact-active{
       color: rgba(54, 139, 171, 0.857);
     }
    .sub-menu li{
      padding: 1px;
       list-style: none;
       margin-bottom: 1rem;
     
    }
}

</style>