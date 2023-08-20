<template>
<body class="body">
    
    <transition class = "fader">
        <div v-if= "showDiv1" key="div1" class="doo">
            Walk
        </div>
    </transition>
    <transition class = "fader">
        <div v-if= "showDiv2" key="div2" class="doo1">
            Crew
        </div>
    </transition>
    <button @click= "showMyDiv1">showDiv1</button>
    <button @click= "showMyDiv2">showDiv2</button>
    
    
</body>
  
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const showDiv1 = ref(true);
        const showDiv2 = ref(false);

        const showMyDiv1 = ()=> {
           showDiv1.value = true ;
           
        }
        const showMyDiv2 = ()=> {
           showDiv2.value = true;
           
        }

        return{showDiv1, showDiv2, showMyDiv1, showMyDiv2}
    }
}
</script>

<style scoped>
    .body{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(../assets/background-crew-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.fader-enter-active, .fader-leave-active{
  transition: opacity 6s;
}
.fader-enter, .fader-leave-to{
  opacity:0;
}

.doo{
    width: 13rem;
    height: 12rem;
    background-color: aliceblue;
}
.doo1{
    width: 13rem;
    height: 12rem;
    background-color: red;
}
</style>