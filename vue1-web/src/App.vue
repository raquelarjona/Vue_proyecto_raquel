<script setup lang="ts">
import {RouterView} from 'vue-router'
import { Toaster as SoonerToaster} from '@/components/ui/sonner'
import 'vue-sonner/style.css'

</script>

<template>

 <RouterView />
 
  <SoonerToaster />
 
</template>
