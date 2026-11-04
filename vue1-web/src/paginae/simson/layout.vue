
<script setup lang="ts">
import Logosimsons from '@/components/logosimsons.vue';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen ">
    <header class="bg-simpsons-yellow w-full border border-black">
    <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-page md:px-20">
        <Logosimsons estilus="w-[8rem] h-auto" />
        <div class="flex gap-4 pt-4">
            <RouterLink to="/simson/gallery" active-class="font-bold">
                characters
            </RouterLink>
            <RouterLink to="/simson/about" active-class="font-bold">
                 about
             </RouterLink>
        <Button variant="tertiarius" size="elongatis" class="bg-simpsons-red hover:bg-simpsons-yellow">
            <RouterLink to="/">
                Exit
            </RouterLink>
        </Button>
    </div>
    </div>
    </header>
    <main>
        <RouterView />
    </main>
    <footer class="bg-simpsons-yellow text-center p-6 border border-black">
    <div>
	    <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
    </div>

        <small>
	        This app was done by Fernando Cordón
        </small>
    </footer>
    
</div>
</template>


<style scoped>

</style>