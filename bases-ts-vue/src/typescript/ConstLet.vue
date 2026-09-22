
<script setup lang="ts">
let urbs: string = 'Valencia' 
urbs = 'Madrid'

// console.log(urbs)

const aetas: number = 24

const nomen = 'Tony'
//nomen = 'Pepe'

const cognomen = 'Stark'

const plenumNomen = `${nomen} ${cognomen}`

console.log `${plenumNomen.toUpperCase()} es de ${urbs} y tiene ${aetas + 3} años

`
</script>

<template>
    <div>

<h2>Tipos Básicos</h2>

<p> {{ plenumNomen.toUpperCase() }} es de {{ urbs }} y tiene {{ aetas + 3  }} años </p>

    </div>
</template>


<style scoped>


</style>