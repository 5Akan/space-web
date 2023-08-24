<template>
<body>
    <div class="contain">
        <div class="all-span">
            <span @click="showSpecificDiv(1)" :class= "{active:showDiv===1}">1</span>
            <span @click="showSpecificDiv(2)" :class= "{active:showDiv===2}">2</span>
            <span @click="showSpecificDiv(3)" :class= "{active:showDiv===3}">3</span>
        </div>
        <div class="write-up">
            <transition name="fade" mode="out-in">
            <article v-if="showDiv===1">
                <h4>The terminology...</h4>
                <h1>LAUNCH VEHICLE</h1>
                <p>
                     A launch vehicle or carrier rocket is a rocket-propelled
                     vehicle used to carry a payload from Earth's surface to space,
                     usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                     the most powerful in operation. Standing 150 metres tall,
                     it's quite an awe-inspiring sight on the launch pad!
                </p>
            </article>
            <article v-else-if="showDiv===2">
                <h4>The terminology...</h4>
                <h1>SPACE CAPSULE</h1>
                <p>
                    A space capsule is an often-crewed spacecraft that uses
                    a blunt-body reentry capsule to reenter the Earth's 
                    atmosphere without wings. Our capsule is where you'll 
                    spend your time during the flight. It includes a space
                    gym, cinema, and plenty of other activities to keep
                    you entertained.
                </p>
            </article>
            <article v-else-if="showDiv===3">
                <h4>The terminology...</h4>
                <h1>SPACEPORT</h1>
                <p>
                    A spaceport or cosmodrome is a site for launching 
                    (or receiving) spacecraft, by analogy to the seaport 
                    for ships or airport for aircraft. Based in the famous 
                    Cape Canaveral, our spaceport is ideally situated to take
                    advantage of the Earth’s rotation for launch.
                </p>
            </article>
            </transition>
        </div>
        <div class="images">
             <transition name="fade" mode="out-in">
                 <img class="image" v-if= "showDiv===1" src="../assets/image-launch-vehicle-portrait.jpg" alt="" srcset="">
                 <img class="image" v-else-if= "showDiv===2" src="../assets/image-space-capsule-portrait.jpg" alt="" srcset="">
                 <img class="image" v-else-if= "showDiv===3" src="../assets/image-spaceport-portrait.jpg" alt="" srcset="">
            </transition>
        </div>
    </div>
    
</body>
</template>

<script setup>
import { ref } from 'vue'
     const showDiv = ref(1);
    const showSpecificDiv = (num) =>{
        showDiv.value = num;
        
    }
   
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/background-technology-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.contain{
    margin-top: 7rem;
    /* padding-left: 5rem; */
    width: 100%;
    height: 34rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    /* background-color: rgb(14, 18, 18); */
    
}
.write-up{
    display: flex;
    width: 35rem;
    height: 21rem;
    margin: 0rem -4rem 0rem 2rem;
    text-align: left;
    /* background-color: aquamarine; */
}
h1{
    margin: 0.3rem 0rem 1.8rem 0rem;
    font-size: 3rem;
    font-weight: 500;
}
h4{
    margin: 2.7rem 0rem 0rem 0rem;
    font-size: 16px;
}
p{
    width: 24rem;
    height: 11rem;
    display: flex;
    /* background-color: wheat; */
    font-size: 16px;
    line-height: 23px;
}
.all-span{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-right: 1rem;
    /* background-color: rgb(77, 75, 75); */
}
span{
    display: flex;
    color: white;
    margin: 0.5rem 1rem 1rem 1rem;
    position: relative;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 27px;
    border: 1px solid rgba(255, 255, 255, 0.235);
}
span:hover{
    color: rgba(21, 14, 14, 0.922);
    background-color: rgb(154, 154, 160);
}
.active{
    background-color: white;
    color: black;
}
.fade-enter-active {
  transition:all 0.5s ease;
}
.fade-leave-active{
  transition:all 0.5s ease-out;
}
.fade-enter-from {
  opacity:0;
  transform:translateX(-80px) ;
}
.fade-leave-to{
    opacity:0;
  transform:translateX(80px) ;
}

.images{
    margin: 0rem 0rem 0rem 4rem;
   
}
.image{
    margin: 0;
    width: 29rem;
    width: 29rem;
}
</style>