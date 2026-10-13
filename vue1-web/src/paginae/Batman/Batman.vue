
<script setup lang="ts">
import { House } from '@lucide/vue'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

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

</script>

<template>
  <div class="Batman">

    <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3">

      <RouterLink to="/" @click="scrollToSection('#')" aria-label="Inicio">
        <House class="icon-home" />
      </RouterLink>

      <NavigationMenu>
        <NavigationMenuList class="flex flex-col sm:flex-row">
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
              <RouterLink to="/batman" @click="scrollToSection('Portada')">Portada</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="[navigationMenuTriggerStyle(),'text-md hover:bg-brand-purple hover:text-white transition-colors']">
            </NavigationMenuLink>
              <RouterLink to="/batman" @click="scrollToSection('Vehiculos')">Vehiculos</RouterLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="[navigationMenuTriggerStyle(),'text-md hover:bg-brand-purple hover:text-white transition-colors']">
              <RouterLink to="/batman" @click="scrollToSection('Videos')">Videos</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="[navigationMenuTriggerStyle(),'text-md hover:bg-brand-purple hover:text-white transition-colors']">
              <RouterLink to="/batman" @click="scrollToSection('contactos')">Imagenes</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </nav>

    <header class="titulos-img" id="Portada">
      <div class="titulos">
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
        <img src="/imagenes/Batman/avion.jpg"/>
      </div>

      <div class="item duo">
        <div class="noticia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/imagenes/Batman/moto.jpg"/>
      </div>
      
      <div class="item tribus">
        <div class="noticia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/imagenes/Batman/car.jpg"/>
      </div>
    </div>

 </section>

  </div>
</template>

<style scoped>

.vehiculos-arca {
  display: flex;              /* "esta caja ahora es flexbox" */
  flex-direction: column;     /* colócalos uno debajo de otro */
}

@font-face {
  font-family: "Batman";
  src: url("/imagenes/fonts/batmfo__.ttf") format("truetype");
}
.Batman {
  font-family: Arial, Helvetica, sans-serif;
}

.icon-home{
    width: 3rem;
    height: 3rem;
    color: slateblue;
}

.icon-home:hover{
    color: white;
    background-color: slateblue;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
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
  background-image: url("/imagenes/Batman/batman.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
}

.titulos-img:hover {
  background-size: 115% 115%;
}

.titulos > h1 {
  position: absolute;
  top: 63%;
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
