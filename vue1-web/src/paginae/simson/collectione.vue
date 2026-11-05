
<script setup lang="ts">
import { Card, CardContent,} from '@/components/ui/card'
import { ref } from 'vue';
import { characters } from './data';

const ListaSimpsons = ref( characters.slice(0, 6));
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
            
            <CardContent class="flex flex-col items-center gap-1 w-full px-0">
                <img src="/public/imagenes/simsons/${character.imago}" class="w-48 h-42 object-cover object-top mt-2 bg-simpsons-yellow border border-black rounded-t-md" width="200" height="200" />
                <h2 class="text-lg font-semibold">${character.nomen}</h2>
            </CardContent>
         </Card>

          

          
    </div>


    </div>
</template>



<style scoped>

</style>