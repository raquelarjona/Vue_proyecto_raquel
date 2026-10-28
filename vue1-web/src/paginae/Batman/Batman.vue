
<script setup lang="ts">
NavigatorPrimarius
import { House } from '@lucide/vue'

import { useMouseMotio } from '@/composables/useMouseMotio'
import { onMounted, onUnmounted, ref } from 'vue'
import NavigatorPrimarius from '@/components/components/navigatorPrimarius.vue';

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
    <Naviga
    tionPrimarius :items="menuItems" homeRoute="/"/>

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
