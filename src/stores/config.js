import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useConfigStore = defineStore({
  id: 'counter',
  state: () => ({
    /* counter: useStorage('contador', 0),
    titulo: useStorage('titulo', 'hola') */
    counter: 0,
    titulo: 'hola',
    posicionActualEscenario: useStorage('posicionActualEscenario', 0),
    isCamaraHabilitada: useStorage('isCamaraHabilitada', false),
    usuario: useStorage('usuario', ''),
    preguntasAleatorias: useStorage('opciones', [])
  }),
  getters: {
    preguntasAleatoriasSeleccionadas: (state) => state.preguntasAleatorias,
    posicionactualEscenarioJuego: (state) => state.posicionActualEscenario,
    nombreUsuario: (state) => state.usuario,
    doubleCount: (state) => state.counter * 2,
    isCamara: (state) => state.isCamaraHabilitada
  },
  actions: {
    increment() {
      this.counter++
    },
    habilitarCamara() {
      this.isCamaraHabilitada = true
    },
    inhabilitarCamara() {
      this.isCamaraHabilitada = false
    },
    setNombreUsuario(nombre) {
      this.usuario = nombre
    },
    setPosicionActualUsuario(posicion) {
      this.posicionActualEscenario = posicion
    },
    setPreguntasAleatorias(preguntas) {
      this.preguntasAleatorias = preguntas
    }
  },
  persist: {
    key: 'store-config',
    storage: {},
    paths: ['nested.data'],
    beforeRestore: context => {
      console.log('Before hydration...')
    },
    afterRestore: context => {
      console.log('After hydration...')
    },
  }
})
