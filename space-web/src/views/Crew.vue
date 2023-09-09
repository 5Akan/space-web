<template>
<body>
    <div class="header">
     <p id="num">02</p><p id="head">MEET YOUR CREW</p>
   </div>
    <div class="giant">
        <div class="hold">
    <transition name = "fade" mode="out-in">
        <div v-if= "activeDiv ===1" class="doo" 
        @touchstart = "showMyDiv(1)"
         @touchmove = "showMyDiv(2)" 
         @touchstop = "showMyDiv(2)">
           <h2>FLIGHT ENGINEER</h2>
           <h1>ANOUSHEH ANSARI</h1> 
                <p class="write">
                Anousheh Ansari is an Iranian American engineer
                and co-founder of Prodea Systems. Ansari was the
                fourth self-funded space tourist, the first self-funded 
                woman to fly to the ISS, and the first Iranian in space.
                </p>
        </div>
        <div v-else-if= "activeDiv ===2" class="doo"
         @touchstart = "showMyDiv(2)"
         @touchmove = "showMyDiv(3)" 
         @touchstop = "showMyDiv(3)">
            <h2>COMMANDER DOUGLAS</h2>
             <h1>HURLEY DOUGLAS GERALD</h1>
             <p class="write">
              Hurley is an American engineer, former Marine Corps pilot and
              former NASA astronaut. He launched into space for the third
              time as commander of Crew Dragon Demo-2.
             </p>
        </div>
        <div v-else-if= "activeDiv ===3" class="doo">
            <h2>MISSION SPECIALIST</h2>
            <h1>MARK SHUTTLEWORTH </h1>
            <p class="write">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, 
            the company behind the Linux-based Ubuntu operating system. 
            Shuttleworth became the first South African to travel to space
             as a space tourist.
            </p>
        </div>
        <div v-else-if= "activeDiv ===4" class="doo">
            <h2>PILOT</h2>
           <h1>VICTOR GLOVER</h1>
           <p class="write">
             Pilot on the first operational flight of the SpaceX Crew Dragon
            to the International Space Station. 
            Glover is a commander in the U.S. Navy where he pilots an F/A-18.
            He was a crew member of Expedition 64, and served as a station
            systems flight engineer.
            </p>
        </div>
    </transition>
        <div class="change-pins">
        <div class="pins" @click= "showMyDiv(1)" :class = "{active:activeDiv===1}"> </div>
        <div class="pins" @click= "showMyDiv(2)" :class = "{active:activeDiv===2}"> </div>
        <div class="pins" @click= "showMyDiv(3)" :class = "{active:activeDiv===3}"> </div>
        <div class="pins" @click= "showMyDiv(4)" :class = "{active:activeDiv===4}"> </div>
    </div>
    </div>
    <div class="our-image">
        <transition name = "fade" mode="out-in">
            <img class="images" v-if= "activeDiv ===1" src="../assets/image-anousheh-ansari.png" alt="" srcset="">
            <img class="images" v-else-if= "activeDiv ===2" src="../assets/image-douglas-hurley.png" alt="" srcset="">
            <img class="images" v-else-if= "activeDiv ===3" src="../assets/image-mark-shuttleworth.png" alt="" srcset="">
            <img class="images" v-else-if= "activeDiv ===4" src="../assets/image-victor-glover.png" alt="" srcset="">
       </transition>
    </div>
    
    </div>
    
      
    
</body>
  
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const activeDiv = ref(1);

        const showMyDiv = (num)=> {
           activeDiv.value = num ;
           
        }
        return{ activeDiv,showMyDiv}
    }
}
</script>

<style scoped>
@media screen and (min-width: 863px) and (max-width:1440px){
      body{
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start;  */
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(../assets/background-crew-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  
}
.header{
  display: flex;
  width: 19rem;
  position: fixed;
  /* background-color: black; */
  color: white;
  margin:-23rem 0rem 0rem -41rem ;
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
.giant{
    position: fixed;
    margin:13rem  0rem  0rem  0rem;
    /* background-color: orange; */
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    /* margin-right: auto;
    margin-left: auto;
     */
}
h1{
    display: flex;
    font-size: 3.3rem;
    font-weight: 600;
    margin:1rem  0rem  3rem 0rem;

}
.write{
    display: flex;
    width: 26.5rem;
    line-height: 25px;
    margin:0rem  0rem  0rem 0rem;
}

 .change-pins{
    display: flex;
    margin: 0; 
} 
.pins{
    margin: 8px 10px 8px 8px;
    position: relative;
    background-color: grey;
    border-radius: 50%;
    padding: 6.5px;
    cursor: pointer;
}
.active{
    background-color: white;
}
.hold{
    width: 70%;
   height:25rem;
   margin:auto;
   /* background-color: lightgreen; */
}
.doo{
    padding: 0;
    width: 100%;
    height:22rem;
    /* background-color: aliceblue; */
    text-align: left;
    margin-left:auto;
}
.our-image{
    margin-right: 5rem;
    align-items: center;
    justify-content: center;
}
.images{
    /* flex: 1;
    margin-left: calc(0.5vw + 5px); */
    width: 32rem;
    height: 32rem;
}
}

/* Tablet Size */
@media screen and (min-width: 720px) and (max-width:863px){
    html,body{
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start;  */
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(../assets/background-crew-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  
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
.giant{
    /* position: fixed; */
    margin:2.4rem  0rem  0rem  0rem;
    /* background-color: orange; */
    width: 80%;
    display: inline-block;
    align-items: center;
    color: white;
    /* margin-right: auto;
    margin-left: auto;
     */
}
.hold{
    display: inline-block;
    width: 70%;
   height:25rem;
   margin:auto;
   /* background-color: lightgreen; */
}
h1{
    display: flex;
    font-size: 3rem;
    font-weight: 200;
    margin:1rem  0rem  2rem 0rem;

}
h2{
    font-weight: 100;
    font-size: 1.7rem;
}
.write{
    display: flex;
    line-height: 25px;
    margin:0rem  0rem  0rem 0rem;
}

 .change-pins{
    display: flex;
    margin: 0; 
    align-items: center;
    justify-content: center;
} 
.pins{
    margin: 8px 10px 8px 8px;
    position: relative;
    background-color: grey;
    border-radius: 50%;
    padding: 6.5px;
    cursor: pointer;
}
.active{
    background-color: white;
}

.doo{
    padding: 0;
    width: 100%;
    height:18rem;
    /* background-color: rgb(206, 30, 133); */
    text-align: center;
    margin-left:auto;
}
.our-image{
    margin-top:-3rem;
    align-items: center;
    justify-content: center;
}
.images{
    /* flex: 1;
    margin-left: calc(0.5vw + 5px); */
    width: 35rem;
    height: 35rem;
}  
}
  
</style>