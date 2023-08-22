<template>
<body class="body">
    <div class="giant">
        <div class="hold">
    <transition name = "fade" mode="out-in">
        <div v-if= "activeDiv ===1" class="doo">
           <h2>FLIGHT ENGINEER</h2>
           <h1>ANOUSHEH ANSARI</h1> 
                <p>
                Anousheh Ansari is an Iranian American engineer
                and co-founder of Prodea Systems. Ansari was the
                fourth self-funded space tourist, the first self-funded 
                woman to fly to the ISS, and the first Iranian in space.
                </p>
        </div>
        <div v-else-if= "activeDiv ===2" class="doo">
            <h2>COMMANDER DOUGLAS</h2>
             <h1>HURLEY DOUGLAS GERALD</h1>
             <p>
              Hurley is an American engineer, former Marine Corps pilot and
              former NASA astronaut. He launched into space for the third
              time as commander of Crew Dragon Demo-2.
             </p>
        </div>
        <div v-else-if= "activeDiv ===3" class="doo">
            <h2>MISSION SPECIALIST</h2>
            <h1>MARK SHUTTLEWORTH </h1>
            <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, 
            the company behind the Linux-based Ubuntu operating system. 
            Shuttleworth became the first South African to travel to space
             as a space tourist.
            </p>
        </div>
        <div v-else-if= "activeDiv ===4" class="doo">
            <h2>PILOT</h2>
           <h1>VICTOR GLOVER</h1>
           <p>
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
    .body{
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
.giant{
    margin: 12rem  0rem  0rem  0rem;
    /* background-color: orange; */
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    /* margin-right: auto;
    margin-left: auto;
     */
}
h1{
    font-size: 3.3rem;
    font-weight: 600;
    margin:1rem  0rem  3rem 0rem;

}
p{
    /* background-color: aqua; */
    width: 26.5rem;
    line-height: 25px;
    margin:0rem  0rem  0rem 0rem;


}
/* .fade-enter-active {
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
  transform:translateY(80px) ;
}*/
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
    /* flex: 1; */
    /* margin-right: calc(0.5vw + 5px); */
    /* background-color: lightseagreen; */
    width: 35rem;
   height:25rem;
   /* margin: 15rem 1rem 0rem 0rem; */
}
.doo{
    
    width: 35rem;
   height:22rem;
    /* background-color: aliceblue; */
    text-align: left;
}
.our-image{
    align-items: center;
    justify-content: center;
}
.images{
    flex: 1;
    margin-left: calc(0.5vw + 5px);
    width: 32rem;
    height: 32rem;
}
</style>