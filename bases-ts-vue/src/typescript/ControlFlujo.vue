
<script setup lang="ts">

const vigila: boolean = true

let mensaje: string | undefined = undefined

if (vigila === true) {
    mensaje = 'Si, hola, buenos días'
} else {
    mensaje = ' Zzz zzz zzz'
}

// console.log(mensaje)

const precio: number = 40

const libro = precio > 30 ?  'El libro es caro' : 'El libro es barato'

console.log(libro)

</script>


<template>
    <div>
<h2> Estructura condicional</h2>
<p> ¿Estas despierta?{{ mensaje }} </p>

    </div>
</template>


<style scoped>

</style>
