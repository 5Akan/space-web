<template>
 
   <nav>
    <router-link to="/"><b>00</b> HOME</router-link>
    <router-link :to = "{name: 'destination',params:{id:1}}"><b>01</b> DESTINATION</router-link>
    <router-link :to = "{name: 'crew',params:{id:2}}"><b>02</b> CREW</router-link>
    <router-link :to = "{name: 'technology',params:{id:3}}"><b>03</b> TECHNOLOGY</router-link>
  </nav>
  <hr><hr/>
</template>

<script>
export default {

}
</script>

  <style scoped>
  @media screen and (min-width: 768px) and (max-width:1440px){
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
@media screen and (min-width: 720px) and (max-width:768px){
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
}

</style>