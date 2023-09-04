<template>
 <body>
   <div class="container">
   <div class="space">
      <h3>SO, YOU WANT TO TRAVEL TO</h3><h1>SPACE</h1>
      <p>Let’s face it; 
      if you want to go to space, you might as well
      genuinely go to outer space and not hover kind of
      on the edge of it. Well sit back, and relax because 
      we’ll give you a truly out of this world experience!
       </p> 
   </div>
   <div class="explore">
     <h2>
       EXPLORE
     </h2>
   </div>
   </div>
  
 </body>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
@media screen and (min-width: 800px) and (max-width:1440px){
   body{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(../assets/background-home-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.container{
  display: flex;
  width: 70rem;
  height: 22rem;
  margin: 17rem 1rem 20rem 8rem;
  color: white;
  /* background: grey; */
}
.space{
  width:26rem;
  /* background: white; */
  color: white;
  text-align: left;
}
h1{
  font-weight: 200;
  font-size:128px;
  padding: 1.5rem 0rem 1.9rem 0rem;
}
h3{
  font-weight: 500;
  font-size: 23px;
}
p{
  font-size: 16px;
  line-height: 22px;
}
.explore{
  display: flex;
  height: 14rem;
  border-radius: 50%;
  width: 14rem;
  color: black;
  background-color: white;
  margin: 5rem 1.5rem 1.5rem 26rem;
  align-items: center;
  justify-content: center;
  padding: 0;
}
h2{
  font-weight: 200;
  font-size: 28px;
}
}
 
/* Tablet Size */
@media screen and (min-width: 720px) and (max-width:800px){
   body{
    margin: 0;
    padding: 0;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/background-home-tablet.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.container{
  display: inline-block;
  position: relative;
  width: 34rem;
  height: 80%;
  margin: 13rem 1rem 1rem 1rem;
  color: white;
  /* background: grey; */
  align-items: center;
  justify-content: center ;
  text-align: center;
}
.space{
  width:100%;
  /* background: rgb(231, 143, 143); */
  color: white;
   align-items: center;
  justify-content: center ;
  text-align: center;
  margin-bottom: 8rem;
}
h1{
  font-weight: 100;
  font-size:10rem;
  padding: 1rem 0rem 1rem 0rem;
}
h3{
  font-weight: 500;
  font-size: 20px;
}
p{
  width: 90%;
  margin: auto;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 1rem;
}
.explore{
  display: inline-block;
  height: 12rem;
  border-radius: 50%;
  width: 12rem;
  color: black;
  background-color: white;
  margin: 1rem;
  align-items: center;
  justify-content: center center;
  text-align: center center;
  padding: 0;
}
h2{
    margin-top: 5rem;
    display: block;
  font-weight: 200;
  font-size: 28px;
  text-align: center;
}
}

@media screen and (max-width:720px){
    *{
    box-sizing: border-box;
    margin: 0 ;
    padding: 0;
    align-items: center center;
    justify-content: center center;
  
}
   html,body{
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/background-home-tablet.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.container{
  display: inline-block;
  /* position: relative; */
  width: 100%;
  height: 80%;
  margin: 10rem 0rem 1rem 0rem;
  color: white;
  /* background: grey; */
  align-items: center;
  justify-content: center ;
  text-align: center;
}
.space{
  width:100%;
  /* background: rgb(231, 143, 143); */
  color: white;
  align-items: center;
  justify-content: center ;
  text-align: center;
  margin-bottom: 6rem;
}
h1{
  font-weight: 100;
  font-size:8rem;
  padding: 1rem 0rem 1rem 0rem;
}
h3{
  font-weight: 500;
  font-size: 20px;
}
p{
  width: 90%;
  margin: auto;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 1rem;
}
.explore{
  display: inline-block;
  height: 12rem;
  border-radius: 50%;
  width: 12rem;
  color: black;
  background-color: white;
  margin: 1rem;
  align-items: center;
  justify-content: center center;
  text-align: center center;
  padding: 0;
}
h2{
    margin-top: 5rem;
    display: block;
  font-weight: 200;
  font-size: 28px;
  text-align: center;
}
}
</style>
