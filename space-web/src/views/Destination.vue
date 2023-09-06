<template>
<body>
   <div class="header">
     <p id="num">01</p><p id="head">PICK YOUR DESTINATION</p>
   </div>
    <div class="container">
      <div class="nav">
          
        <transition name="fade" mode="out-in">
          <div v-if="showDiv ===1" class="contain">
          <img src="../assets/mars-18088.png" alt="" srcset="">
           <div class="show">
              <div class="span">
                 <span id="show-span" @click="showSpecificDiv(1)" :class = "{active:showDiv ===1}">MARS</span>
                <span id="show-span" @click="showSpecificDiv(2)" :class = "{active:showDiv ===2}">MOON</span>
                <span id="show-span" @click="showSpecificDiv(3)" :class = "{active:showDiv ===3}">EUROPA </span>
                <span id="show-span" @click="showSpecificDiv(4)" :class = "{active:showDiv ===4}">TITAN</span>
            </div>
               <div class="writeup">
             <h1> MARS</h1>
                <p>
                  Don’t forget to pack your hiking boots. 
                  You’ll need them to tackle Olympus Mons, 
                  the tallest planetary mountain in our solar system. 
                  It’s two and a half times the size of Everest!
                </p>
                <hr class="line">
              <div class="writeup-bottom">
                <span>Avg. distance <h2>225 mil. km</h2> </span>
                <span>Est. travel time <h2>9 months</h2> </span>
              </div>
          </div>
          </div>  
         
        </div>
         <div v-else-if="showDiv ===2" class="contain">
        <img src="../assets/moon-10061.png" alt="" srcset="">
        <div class="show">
                <div class="span">
              <span id="show-span" @click="showSpecificDiv(1)" :class = "{active:showDiv ===1}">MARS</span>
                <span id="show-span" @click="showSpecificDiv(2)" :class = "{active:showDiv ===2}">MOON</span>
                <span id="show-span" @click="showSpecificDiv(3)" :class = "{active:showDiv ===3}">EUROPA </span>
                <span id="show-span" @click="showSpecificDiv(4)" :class = "{active:showDiv ===4}">TITAN</span>
            </div>
                <div class="writeup">
                <h1> MOON</h1>
              <p>
                See our planet as you’ve never seen it 
                before. A perfect relaxing trip away to help
                regain perspective and come back refreshed.
                While you’re there, take in some history by 
                visiting the Luna 2 and Apollo 11 landing sites.
              </p> 
                <hr class="line"> 
                <div class="writeup-bottom">
                    <span>Avg. distance <h2>384,400 km</h2> </span>
                    <span>Est. travel time <h2>3 days</h2> </span>
              </div> 
            </div>  
          </div>  
          
          </div>
            <div v-else-if="showDiv ===3" class="contain">
        <img src="../assets/image-europa.png" alt="" srcset="">
        <div class="show">
          <div class="span">
             <span id="show-span" @click="showSpecificDiv(1)" :class = "{active:showDiv ===1}">MARS</span>
              <span id="show-span" @click="showSpecificDiv(2)" :class = "{active:showDiv ===2}">MOON</span>
              <span id="show-span" @click="showSpecificDiv(3)" :class = "{active:showDiv ===3}">EUROPA </span>
              <span id="show-span" @click="showSpecificDiv(4)" :class = "{active:showDiv ===4}">TITAN</span>
          </div>
              <div class="writeup">
            <h1>EUROPA</h1>
          <p>
            The smallest of the four Galilean 
            moons orbiting Jupiter, Europa is a winter 
            lover’s dream. With an icy surface, it’s 
            perfect for a bit of ice skating, curling,
            hockey, or simple relaxation in your snug 
            wintery cabin. 
          </p> 
            <hr class="line"> 
            <div class="writeup-bottom">
                <span>Avg. distance <h2>628 mil. km</h2> </span>
                <span>Est. travel time <h2>3 years</h2> </span>
          </div> 
         </div>  
          </div>  
         
          </div>
            <div v-else-if="showDiv ===4" class="contain">
        <img src="../assets/image-titan.png" alt="" srcset="">
        <div class="show">
               <div class="span">
                  <span id="show-span" @click="showSpecificDiv(1)" :class = "{active:showDiv ===1}">MARS</span>
                  <span id="show-span" @click="showSpecificDiv(2)" :class = "{active:showDiv ===2}">MOON</span>
                  <span id="show-span" @click="showSpecificDiv(3)" :class = "{active:showDiv ===3}">EUROPA </span>
                  <span id="show-span" @click="showSpecificDiv(4)" :class = "{active:showDiv ===4}">TITAN</span>
          </div>
              <div class="writeup">
            <h1>TITAN</h1>
          <p>
            Titan The only moon known to have a dense 
            atmosphere other than Earth, Titan is a home
            away from home (just a few hundred degrees
            colder!). As a bonus, you get striking
            views of the Rings of Saturn.
          </p> 
            <hr class="line"> 
            <div class="writeup-bottom">
                <span>Avg. distance <h2>1.6 bil.</h2> </span>
                <span>Est. travel time <h2>7 years</h2> </span>
          </div>
          </div>  
          
         </div>  
          </div>
        </transition>
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

@media screen and (min-width: 863px) and (max-width:1440px){
html,body{
     /* display: flex; */
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start;  For pushing an elemnt when reducing browser */
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/background-destination-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
}
.header{
  display: flex;
  width: 19rem;
  /* position: fixed; */
  color: white;
  margin:9rem 0rem 0rem 10rem ;
}
#num{
font-weight: bold;
color: rgba(247, 244, 244, 0.559);
margin-right:1rem;
font-size: 1.3rem;
}
#head{
  font-size: 1.3rem;
  font-weight: bold;
}
.fade-enter-active {
  transition:all 0.5s ease;
}
.fade-leave-active{
  transition:all 0.5s ease-out;
}
.fade-enter-from {
  opacity:0;
  transform:translateY(80px) ;
}
.fade-leave-to{
    opacity:0;
  transform:translateY(-80px) ;
}
img{
  /* margin-left: 4rem; */
  padding: 0;
  width: 25rem;
  height: 25rem;
  margin-left:auto; /* Allows image to shift to left due to justify content: flex start */
}
.container{
  position: fixed;
  display: flex;
  justify-content: flex-start;
   /* margin-left:auto ; */
  width: 100%;
  height: 25rem;
  margin: 4rem 0rem 0rem 0rem;
  /* trbl */
  color: white;
  /* background: grey;  */
}
.nav{
  display: block;
  width: 100%;
  /* background-color: darkslategray; */
}
.show{
 /* background-color: orange; */
 width: 35rem;
 height: 2rem;
 margin-right: 15rem;
 
}
.span{
   /* background-color: orange; */
  width: 20rem;
  height: 2rem;
  margin-left: 12rem;

}
#show-span{
  /* trbl */
  padding: 0rem 0.5rem   0rem   0.5rem  ;
  text-underline-offset: 0.5rem;
  cursor: pointer;
}
#show-span:hover{
  color: lightgrey;
}
.contain{
  display: flex;
  width: 100%;
  height:25rem;
  /* background: lightblue; */
   /* padding-left: 5rem; */
}

.writeup{
  color: white;
  /* background-color: rgb(91, 128, 128); */
  width: 25rem;
  margin-left: 15rem;
  text-align: left;
}
.line{
  position: inherit;
  margin: 2.7rem 0rem 1rem 0rem;
  opacity: 1;
  border: 1px solid white;
  width: 100%;
}
.writeup h1{
  font-weight: 200;
  font-size:100px;
  padding: 2rem 0rem 1.9rem 0rem;
}
.writeup p{
  line-height: 20px;
  font-size: 15px;
  padding: 0rem 1.3rem 0rem 0rem;
}
.writeup-bottom{
  width: 100%;
   padding: 0rem 0rem 1.3rem 0rem;
   display: flex;
   justify-content: space-between;

}
.active{
    color: white;
    text-decoration: underline 2.4px;
}
}
/* Tablet Size */
@media screen and (min-width: 720px) and (max-width:863px){
  html,body{
     /* display: flex; */
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start;  For pushing an elemnt when reducing browser */
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/background-destination-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
}
.header{
  display: flex;
  width: 19rem;
  /* position: fixed; */
  color: white;
  margin:9rem 0rem 0rem 2rem ;
}
#num{
font-weight: bold;
color: rgba(247, 244, 244, 0.559);
margin-right:1rem;
font-size: 1.3rem;
}
#head{
  font-size: 1.3rem;
  font-weight: bold;
}
.fade-enter-active {
  transition:all 0.5s ease;
}
.fade-leave-active{
  transition:all 0.5s ease-out;
}
.fade-enter-from {
  opacity:0;
  transform:translateY(80px) ;
}
.fade-leave-to{
    opacity:0;
  transform:translateY(-80px) ;
}
img{
  /* margin-left: 4rem; */
  padding: 0;
  width: 25rem;
  height: 25rem;
  margin-left:auto; /* Allows image to shift to left due to justify content: flex start */
}
.container{
  display: inline-block;
   /* margin-left:auto ; */
  width: 80%;
  height:57rem;
  margin: 4rem 0rem 0rem 0rem;
  /* trbl */
  color: white;
  /* background: grey;  */
}
.nav{
  display: block;
  width: 100%;
  /* background-color: darkslategray; */
}
.show{
  display: inline-block;
 /* background-color: brown; */
 width: 100%;
 height: 25rem;
 text-align: center;
 align-items: center;
 /* margin-left: 40rem; */
 margin-top: 4rem;
}
.span{
  display: inline-block;
  /* background-color: yellow; */
   width: 20rem;
  height: 2rem;
}
#show-span{
  /* trbl */
  padding: 0rem 0.5rem   0rem   0.5rem  ;
  text-underline-offset: 0.7rem;
  cursor: pointer;
}
#show-span:hover{
  color: lightgrey;
}
.contain{
  display: inline-block;
  width: 100%;
  height:25rem;
  /* background: lightblue; */
  text-align: center;
   /* padding-left: 5rem; */
}

.writeup{
  color: white;
  /* background-color: rgb(91, 128, 128); */
  width: 25rem;
  margin-left: 9rem;
  text-align: center;
}
.line{
  position: inherit;
  margin: 2.7rem 0rem 1rem 0rem;
  opacity: 1;
  border: 1px solid white;
  width: 100%;
}
.writeup h1{
  font-weight: 200;
  font-size:100px;
  padding: 2rem 0rem 1.9rem 0rem;
}
.writeup p{
  line-height: 20px;
  font-size: 15px;
  padding: 0rem 1.3rem 0rem 0rem;
}
.writeup-bottom{
  text-align: left;
  width: 100%;
   padding: 0rem 5rem 1.3rem 0rem;
   display: flex;
   justify-content: space-between;

}
.active{
    color: white;
    text-decoration: underline 2.4px;
}
}
/* Phone Size */
@media screen and (max-width:720px){
  html,body{
     /* display: flex; */
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start;  For pushing an elemnt when reducing browser */
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/background-destination-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
}
.header{
  display: flex;
  width: 100%;
  /* background-color: blue; */
  align-items: center;
  justify-content: center;
  text-align: center;
  /* position: fixed; */
  color: white;
  margin:6rem 0rem 0rem 0rem ;
}
#num{
  /* display: inherit; */
font-weight: bold;
color: rgba(247, 244, 244, 0.559);
/* margin-right:1rem; */
font-size: 1.2rem;
}
#head{
  font-size: 1.2rem;
  font-weight: bold;
}
.fade-enter-active {
  transition:all 0.5s ease;
}
.fade-leave-active{
  transition:all 0.5s ease-out;
}
.fade-enter-from {
  opacity:0;
  transform:translateY(80px) ;
}
.fade-leave-to{
    opacity:0;
  transform:translateY(-80px) ;
}
img{
  /* margin-left: 4rem; */
  padding: 0;
  width: 15rem;
  height: 15rem;
  margin-left:auto; /* Allows image to shift to left due to justify content: flex start */
}
.container{
  display: inline-block;
   /* margin-left:auto ; */
  width: 80%;
  height:57rem;
  margin: 2rem 0rem 0rem 0rem;
  /* trbl */
  color: white;
  /* background: grey;  */
}
.nav{
  display: block;
  width: 100%;
  /* background-color: darkslategray; */
}
.show{
  display: inline-block;
 /* background-color: brown; */
 width: 100%;
 height: 25rem;
 text-align: center;
 align-items: center;
 /* margin-left: 40rem; */
 margin-top: 1rem;
}
.span{
  display: inline-block;
  /* background-color: yellow; */
   width: 20rem;
  height: 2rem;
}
#show-span{
  /* trbl */
  padding: 0rem 0.5rem   0rem   0.5rem  ;
  text-underline-offset: 0.7rem;
  cursor: pointer;
}
#show-span:hover{
  color: lightgrey;
}
.contain{
  display: inline-block;
  width: 100%;
  height:25rem;
  /* background: lightblue; */
  text-align: center;
   /* padding-left: 5rem; */
}

.writeup{
  color: white;
  /* background-color: rgb(91, 128, 128); */
  width: 21rem;
  /* margin-left: 9rem; */
  text-align: center;
}
.line{
  position: inherit;
  margin: 2.7rem 0rem 1rem 0rem;
  opacity: 1;
  border: 1px solid white;
  width: 100%;
}
.writeup h1{
  font-weight: 200;
  font-size:88px;
  padding: 1.5rem 0rem 1.5rem 0rem;
}
.writeup p{
  line-height: 20px;
  font-size: 15px;
  padding: 0rem 1.3rem 0rem 0rem;
}
.writeup-bottom{
  text-align: left;
  width: 100%;
   padding:1rem 0rem 1.3rem 0rem;
   display: flex;
   justify-content: space-between;

}
.active{
    color: white;
    text-decoration: underline 2.4px;
}
}
</style>