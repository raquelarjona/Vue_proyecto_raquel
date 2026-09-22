
<script setup lang="ts">


const jeep: { potentia: number; tipo: string } = {
    potentia: 200,
    tipo: 'Renegade',
}
console.log(jeep)

interface habitatio {
    urbs: string
    provincia: string
    pais: string
}


interface Persona {
    cognomen: string
    aetas: number
    ubihabitat: undefined | string

}


const persona : Persona = {
    cognomen: 'Stark',
    aetas: 44,
    ubihabitat: 'New York',

}



console.log (persona.ubihabitat);

persona.aetas = 45
//const persona2 = persona

const persona2 = {...persona}



persona2.cognomen = 'Parker'
console.log(persona)
console.log(persona2)


</script>


<template>
    <div>
<h2>Objetos literales</h2>
    </div>
</template>


<style lang="scss" scoped>

</style>