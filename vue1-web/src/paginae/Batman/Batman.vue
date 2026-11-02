
<script setup lang="ts">
NavigatorPrimarius
import { House, Loader2, LucideBadgeCheck } from '@lucide/vue'
import { Phone, Mail, MapPin } from '@lucide/vue'
import { useMouseMotio } from '@/composables/useMouseMotio'
import { onMounted, onUnmounted, ref } from 'vue'
import NavigatorPrimarius from '@/components/components/navigatorPrimarius.vue';
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Icon } from '@iconify/vue'
import type { DateValue } from 'reka-ui/date';
import { toast } from 'vue-sonner'
const nomen = ref<string>('')
const cognomen = ref<string>('')
const estLoading = ref<boolean>(false)
const missione = ref<string>('')  
const dies = ref<DateValue>()
const { cumMouseMove, cumMouseLeave } = useMouseMotio()

const menuItems =[
{
  Label: 'Portada',
  href: "#",
  onclick: ()=> scrollToSection ('#')
},
  {
    Label: 'Vehiculos',
    href: '#vehiculis',
    onclick: ()=> scrollToSection('vehiculis')
  },
  {
   Label: 'Imagenes',
    href: '#imagenes',
    onclick: ()=> scrollToSection('imagenes')
  },
  {
   Label: 'contacto',
    href: '#contactus',
    onclick: ()=> scrollToSection('contactus')
  }
]
const mittereSubmit = async () => {
  estLoading.value = true;
  
  toast(`Solicitud enviada con éxito
  - Nombre: ${nomen.value}
  - Apellidos: ${cognomen.value}
  - Misión: ${missione.value}
  - Fecha: ${dies.value ? `${dies.value.day}/${dies.value.month}/${dies.value.year}` : 'No especificada'}`, {
    duration: 4000,
    position: 'top-right',
    icon: LucideBadgeCheck,
    style: {
      background: '#201c3b',
      color: '#ffffff',
      whiteSpace: 'pre-line',
      
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 2000)) // Envio de datos
  estLoading.value = false;
  console.log('Formulario enviado:', {
    nomen: nomen.value,
    cognomen: cognomen.value,
    missione: missione.value,
    dies: dies.value,
  });
  nomen.value = ''
  cognomen.value = ''
  missione.value = ''
};

const archivos = import.meta.glob(
  '/src/assets/Batman/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

const imagenes = Object.values(archivos) as string[]

const imagenActual = ref(0)

const siguienteImagen = () => {
  imagenActual.value = (imagenActual.value + 1) % imagenes.length
}

const anteriorImagen = () => {
  imagenActual.value =
    (imagenActual.value - 1 + imagenes.length) % imagenes.length
}

const scrollToSection = (sectionId: string) => {
  if (sectionId === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const selector = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const element = document.querySelector<HTMLElement>(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handleResize = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


onMounted(() => {
  handleResize()
  window.addEventListener ('resize',handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


</script>

<template>
  <div class="Batman">
    <NavigationPrimarius :items="menuItems" homeRoute="/"/>

    <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3">

      <RouterLink to="/" @click="scrollToSection('#')" aria-label="Inicio">
        <House class="icon-home" />
      </RouterLink>

      
    </nav>

    <header class="titulos-img" id="Portada">
      <div class="titulos">
        <div
        @mousemov="cumMouseMove"
        @mouseleave="cumMouseLeave"
        :style="{
          backgroundPositionX: `calc(50% + $ (mousePositione.x)px)`,
          backgroundPositionY: `calc(50% + $ (mousePositione.y)px)`,
          transition: 'background-position 0,1s ease-out'
        }
        "
        </div>

        <h1>Batman</h1>
        <p>El puede tomar la decisión que nadie más puede, la decisión correcta</p>
      </div>
    </header>

    <section id="vehiculos">
  <div class="vehiculos-arca">
     <div class="vehiculos-titulos">
      <h1>Vehículos de Batman</h1>
    </div>
    <div class="item unus">
        <div class="noticia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/src/assets/Batman/avion.jpg" alt="Automóvil asociado a Batman, presentado en una sección dedicada a sus vehículos." />
      </div>

      <div class="item duo">
        <div class="noticia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/src/assets/Batman/moto.jpg" alt="Motocicleta asociada a Batman, presentada en una sección dedicada a sus vehículos." />
      </div>
      
      <div class="item tribus">
        <div class="noticia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/src/assets/Batman/car.jpg" alt="Automóvil asociado a Batman, presentado en una sección dedicada a sus vehículos." />
      </div>
    </div>

 </section>

  <section id="imagenes" class="galeria" v-if="imagenes.length">
    <h2>Imágenes de Batman</h2>
    <div class="galeria-controles">
      <button type="button" @click="anteriorImagen" aria-label="Imagen anterior">Anterior</button>
      <img :src="imagenes[imagenActual]" alt="Imagen seleccionada de la galería de Batman; el contenido visual cambia al avanzar o retroceder." />
      <button type="button" @click="siguienteImagen" aria-label="Imagen siguiente">Siguiente</button>
    </div>
  </section>
<section id="contactus" class="w-full py-12 bg-gray-100">

  <div class="container mx-auto max-w-5xl px-4">

    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
          
    <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.362755252682!2d-0.3440323!3d39.4837227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e0!3m2!1ses!2ses!4v1793609572594!5m2!1ses!2ses"
            class="w-full h-full rounded-lg"
            :style="{ border: 0 }"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

            <!-- Formulario -->
      <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">

        <form  
        class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square" @submit.prevent="mittereSubmit">
          <div class="space-y-2">
             <Label for="nomen">Nombre</Label>
             <input id="nomen" required v-model="nomen" type="text" class="w-full rounded-md border px-3 py-2" />

          </div>
                
          <div class="space-y-2">
              
            <Label for="cognomen">Apellidos</Label>
            <input id="cognomen" required v-model="cognomen" type="text" class="w-full rounded-md border px-3 py-2" />
            

          </div>

          <div class="space-y-2">

              <Select required>
                 <SelectTrigger>
                   <SelectValue placeholder="Seleciona una mision" />
                 </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rescatare">
                    Rescatar a rehenes
                </SelectItem>
                <SelectItem value="investigare">
                   Investigar a criminales
                </SelectItem>
                <SelectItem value="persequi">
                    Perseguir a villanos
                </SelectItem>
                <SelectItem value="defendere">
                    Defender a Gotham
                </SelectItem>
                </SelectContent>
              </Select>

          </div>

          <div class="space-y-2">

            <Label>Fecha de la misión</Label>
            <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" class="w-full justify-between">
                <span>
                  
                  <span v-if="dies">
                    {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
                  </span>
                  <span v-else class="text-gray-400">
                    Selecciona una fecha
                  </span>
                </span>
               
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0" align="start">  
              <Calendar v-model="dies"/>
            </PopoverContent>
            </Popover>

          </div>

          <Button type="submit"class="w-full bg-brand-purple hover:bg-brand-purple-dark" :disabled="estLoading">
            <Loader2 v-if="estLoading" class="mr-2 h-4 w-4 animate-spin" />
            {{ estLoading ? 'Enviando...' : 'Enviar solicitud' }}
          </Button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="w-full bg-gray-900 text-gray-300 py-12">
   <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Phone class="w-5 h-5" />
            +1 (555) 123-4567

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Mail class="w-5 h-5" />
            batman@wayneenterprises.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <MapPin class="w-5 h-5" />
            Wayne Manor, Gotham City

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
        
          <X class="w-10 h-10 hover:text-white" />
          <Icon icon="mdi:instagram" class="w-10 h-10 hover:text-white transition-colors" />
          <Icon icon="mdi:linkedin" class="w-10 h-10 hover:text-white transition-colors" />
          <Icon icon="mdi:message-circle" class="w-10 h-10 hover:text-white transition-colors" />
              
        </div>
    </div>
  </div>
</footer>
  </div>
</template>

<style scoped>

.vehiculos-arca {
  display: flex;              /* "esta caja ahora es flexbox" */
  flex-direction: column;     /* colócalos uno debajo de otro */
}

.galeria {
  padding: 2rem 1rem;
  text-align: center;
}

.galeria-controles {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.galeria-controles img {
  max-width: min(70%, 600px);
  max-height: 400px;
  object-fit: contain;
}

@font-face {
  font-family: "Batman";
  src: url("/imagenes/fonts/batmfo__.ttf") format("truetype");
}
.Batman {
  font-family: Arial, Helvetica, sans-serif;
}


@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

.titulos-img {
  position: relative;
  background-image: url("../../assets/Batman/batman.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
  aspect-ratio: 8/7;
}

.titulos-img:hover {
  background-size: 115% 115%;
}

.titulos > h1 {
  position: absolute;
  top: calc(100vw * 0.5);
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman;
}

.titulos > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  font-family: batman;
  display:none;
}

@media (min-width: 768px) {
  .titulos > p {
    display: block;
  }
}

#vehiculos {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
}

.vehiculos-arca {
  display: flex;
  flex-direction: column;
  order: 1;
}

.vehiculos-titulos {
  height: 5.5rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  padding: 1.5rem 0;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item > img {
  width: 350px;
  height: 300px;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2);
  order:2
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order:3
}

.noticia {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.noticia > small {
  font-weight: bold;
  padding: 1rem;
}

.noticia > h2 {
  font-size: 1.7rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
}

@media (min-width: 640px) {
  #vehiculos {
    max-width: 576px;

  }
}
@media (min-width: 640px) {
  #vehiculos {
    max-width: 900px;
    
  }
}
.item {
    flex-direction: row;
    height: 320px;
}
.noticia {
    width: 40%;
}

.unus > img {
    order:-1
}

@media (min-width: 1024px) {
  #vehiculos {
    max-width: 1280px;
  }
}
.item {
    flex-direction: column;
    height: 560px;
}

.vehiculos-arca{
    flex-direction: row;

}

.noticia {
    width: 90%;
}

</style>
