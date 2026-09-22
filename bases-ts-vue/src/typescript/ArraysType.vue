
<script setup lang="ts">

const numeriArray: number[] = [1, 2, 3, 4, 5]

//console.log (numeriArray.length)
//const cadena: string =numeriArray.join(' - ')
//console.log(cadena)



numeriArray.push(6)
//console.log(numeriArray)

// const numeriArray2 = [...numeriArray]

const numeriArray2: (number | string)[] = [...numeriArray,]
numeriArray2.push(7)
numeriArray2.push('holi')

console.log(numeriArray)
console.log(numeriArray2)

const numeriArray3 = numeriArray.map((numero) => {
    return Number((numero * 2.374013).toFixed(2))
})
console.log(numeriArray3)


const carro = [
    {
        vestimenta: 'camiseta',
        precio: 20,
        color: 'rojo'
    },
    {
        vestimenta: 'pantalon',
        precio: 30,
        color: 'azul'
    },
    {
        vestimenta: 'chaqueta',
        precio: 50,
        color: 'negro'
    }

] 
//   const precio= carro.map((producto) => {
   // return producto.precio
   //})
const precio = carro.map((producto) => producto.precio)
console.log(precio) 

let summa = 0
for (const valor of precio) {
    summa += valor
}
console.log(summa)


</script>

<template>
    <div>
<h2>Tipos de Arrays</h2>
<p>{{ numeriArray.join(' - ') }} </p> 
<p>{{ numeriArray2.join(' - ') }} </p>  
<p>{{ numeriArray3.join(' - ') }} </p>  
<p>{{ precio.join(' + ') }} = {{ summa }} </p>



    </div>
</template>



<style scoped>


</style>