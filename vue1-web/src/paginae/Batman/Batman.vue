
<script setup lang="ts">
import {House} from '@lucide/vue'

</script>

<template>
  <div class="Batman">
    <RouterLink to="/">
      <House class="icon-home" />
    </RouterLink>

    <div class="titulus-img">
      <div class="titulus">
        <h1>Batman</h1>
        <p>El puede tomar la decisión que nadie más puede, la decisión correcta</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

@font-face {
  font-family: "Batman";
  src: url("/imagenes/fonts/batmfo__.ttf") format("truetype");
}
.Batman {
  font-family: Arial, Helvetica, sans-serif;
}

.icon-home{
    width: 3rem;
    height: 3rem;
    color: slateblue;
}

.icon-home:hover{
    color: white;
    background-color: slateblue;
}

.titulus-img {
  position: relative;
  background-image: url("/imagenes/Batman/batman.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  font-family: batman;
  display:none;
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }
}

</style>