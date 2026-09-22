
<script setup lang="ts">

interface heroe {
    nombre: string
    edad: number
    codenombre: string
    facultat?: string

}

const persona: heroe = {
    nombre: 'Tony',
    edad: 44,
    codenombre: 'Ironman', 
    facultat: 'dinero' 
}

console.log(persona.nombre) 

const { nombre, edad, codenombre, facultat = 'Sin facultad' } = persona

</script>


<template>
    <div>
<h2> Desestructuracion de Objetos </h2>
<p> {{ nombre }} </p>
<p> {{ edad }} </p>
<p> {{ codenombre }} </p>
<p> {{ facultat }} </p>
<p> {{ nombre }} tiene {{ edad }} años y es {{ codenombre }} </p>
    </div>
</template>



<style scoped>

</style>