
<template>
  <div class="container">
    <VentanaInstrucciones v-if="ocultarVentana" @ocultarVentana="cerrarBienvenida">
      <template #texto>
        <h3>Son sesiones de actividad física desarrolladas en el entorno laboral, con una
          duración continua mínima de 10 minutos que incluye adaptación física
          cardiovascular, fortalecimiento muscular y mejoramiento de la flexibilidad
          buscando reducir el riesgo cardiovascular y las lesiones musculares por sobreuso asociados al desempeño
          laboral.
        </h3>
        <h3>
          Las Pausas Activas son una forma de promover la actividad física, como habito
          de vida saludable, por lo cual se deben desarrollar programas educativos sobre
          la importancia y los beneficios de la actividad física regular.
        </h3>



      </template>
      <template #btntexto>
        <div class="btn-jugar auto flex-center-elements-row gap-2" style="text-align:center">
          <button class="btn-primary"> COMENZAR</button>
        </div>
      </template>

    </VentanaInstrucciones>
    <div class="animacion-bienvenida animate__animated animate__delay-2s animate__fadeOut">
      <!-- <VentanaBienvenida :sliderActive="true" :slider="slidersBienvenida" /> -->

    </div>

    <!--  <VentanaBienvenida v-if="ocultarVentana" :sliderActive="false"
      class="animate__animated animate__delay-2s animate__fadeIn" ruta="usuario">
      <template #titulo> Bienvenido </template>
      <template #texto>



        <p>Son sesiones de actividad física desarrolladas en el entorno laboral, con una
          duración continua mínima de 10 minutos que incluye adaptación física
          cardiovascular, fortalecimiento muscular y mejoramiento de la flexibilidad
          buscando reducir el riesgo cardiovascular y las lesiones musculares por sobreuso asociados al desempeño
          laboral.
        </p>
        <p>
          Las Pausas Activas serán una forma de promover la actividad física, como habito
          de vida saludable, por lo cual se deben desarrollar programas educativos sobre
          la importancia y los beneficios de la actividad física regular.
        </p>


        <p>En el entorno laboral, la gran mayoría de trabajadores permanecen por lo menos
          ocho horas del día, y dependiendo del trabajo, en muchas ocasiones están
          sentados, con un nivel de actividad física mínimo. </p>
      </template>

    </VentanaBienvenida> -->
  </div>
</template>

<script setup>
import VentanaBienvenida from "@/components/VentanaBienvenida.vue";
import VentanaInstrucciones from "@/components/VentanaInstrucciones.vue";
import { ref, reactive, onMounted, computed } from "vue";
import Sliders from "../textos/Bienvenida.json";
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
import { useConfigStore } from "../stores/config.js";
import { useRouter, useRoute } from "vue-router";
import animateCSS from "../helpers/animations.js";
const router = useRouter()

const ocultarVentana = ref(false);
const countert = ref(null);


const texto = reactive({
  titulo: computed(() => { config.titulo })
})


const cerrarBienvenida = () => {
  ocultarVentana.value = false
   router.push(`/Usuario`);
 /*  animateCSS(".contenedor-instrucciones", "fadeOut").then((message) => {


   
  }); */
}

onMounted(() => {
  const { Bienvenida } = Sliders[0];

  Bienvenida.forEach((element) => {
    slidersBienvenida.value.push(element);
  });

  // persist state in localStorage
  /*   const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    ) */

  const config = useConfigStore();

  countert.value = config.titulo


  let instruciones = setTimeout(() => {
    ocultarVentana.value = !ocultarVentana.value
    clearTimeout(instruciones)
  }, 4200);

  /*     const counter = ref(config.counter) */


  /*  config.increment()
 
   console.log(config.doubleCount); */

});

const slidersBienvenida = ref([]);
</script>



<style lang="css">
.animacion-bienvenida {
  width: 99vw;
  height: 100vh;
  background-image: url('./src/animaciones/axa.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>