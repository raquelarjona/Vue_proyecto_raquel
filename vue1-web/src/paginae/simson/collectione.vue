
<script setup lang="ts">
import { Card, CardContent,} from '@/components/ui/card'
import { computed, ref } from 'vue';
import { characters } from './data';
import { useRouter } from 'vue-router';

const router = useRouter()

const inPagina = 6

const nuncPagina = ref(1)

const totalPaginas = Math.ceil(characters.length / inPagina)

const ListaSimpsons = computed(() => {
    const initIndex = (nuncPagina.value - 1) * inPagina
    const endIndex = initIndex + inPagina
    return characters.slice(initIndex, endIndex)
})

const ireAdPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
        nuncPagina.value = pagina
    }
}

const paginaNumeros : number[] = [...Array(totalPaginas)].map((_, index) => index + 1)

</script>

<template>
    <div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto">
        <div class="text-center">
         <h1 class="text-xl lg:text-5xl font-bold mb-5">The Simsons quote App</h1>
         <p class="mb-5">Click on the quote of your favorite character</p>
         </div>

    <div class="grid grid-cols-2 md:grid-cols-3 mx-auto gap-8">
         <Card class ="cursor-pointer w-[220px]h-[2240px] hover:bg-simpsons-red hover:text-white transition-color"
            v-for="character in ListaSimpsons"
            :key="character.id">
            
            <CardContent 
            @click="router.push(`/simsons/gallery/${character.id}`)"
            class="flex flex-col items-center gap-1 w-full px-0">
                <img src="/public/imagenes/simsons/${character.imago}" class="w-48 h-42 object-cover object-top mt-2 bg-simpsons-yellow border border-black rounded-t-md" width="200" height="200" />
                <h2 class="text-lg font-semibold">${character.nomen}</h2>
            </CardContent>
         </Card>

    </div>
        <div class="flex items-center justify-center gap-2 mt-4">
        <button
            @click="ireAdPagina(nuncPagina - 1)"
            :disabled="nuncPagina ===1"
            class="[px-4 py-2 rounded-md font-medium transition-colors]"
            :class="[
                nuncPagina === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
            ]"
            
        >
            Anterior
        </button>

        <button
            
        v-for="pagina in paginaNumeros"
            :key="pagina"
            @click="ireAdPagina(nuncPagina + 1)"
            :disabled="nuncPagina ===totalPaginas"
             :class="[
                nuncPagina === totalPaginas ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
            ]"

        >
            {{ pagina }}
        </button>

        <button
            class="px-4 py-2 rounded-md font-medium transition-colors bg-simpsons-yellow hover:bg-simpsons-red hover:text-white"
            @click="ireAdPagina(nuncPagina + 1)"
        >
            Siguiente
        </button>
        </div>

    </div>
</template>



<style scoped>

</style>