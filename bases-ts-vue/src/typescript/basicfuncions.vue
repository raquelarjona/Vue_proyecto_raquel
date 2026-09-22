
<script setup lang="ts">

//function saludar(nombre:string):string {
  //  return `Hola ${nombre} ¿Como estas? `
//}   

const saludar = (nombre: string): string => {
    return `Hola ${nombre} ¿Como estas? `
}
//const obtineusuarios = () => {
 //   return [
//        {
//           id: 'ABC123',
 //           nombre: 'Raquel',
 //       }
//    ]
//}

const obtineusuarios = (id: string) => ( { 
    id: id, 
    nombre: 'Raquel' 
})

const heroum = [
    {
        id: 1,
        nombre: 'Batman',
    },
    {
        id: 2,
        nombre: 'Superman',
        facultat: 'Volar',
    },
]

const heroe = heroum.find((heroe) => heroe.nombre === 'Superman')



</script>


<template>
    <div>
<h2> Funciones Básicas </h2>
<p> {{ saludar('Raquel') }} </p>
<p> {{ obtineusuarios('xyz456').id }} </p>
<p> {{ heroe?.nombre }} - {{ heroe?.facultat?.toUpperCase }} </p>




    </div>
</template>



<style scoped>

</style>