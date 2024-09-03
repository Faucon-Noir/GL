import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { teamNameInput, teamPlayerInputs } from './utils/constants/input'
import { CanvasStore } from './store/canvas'
import { drawText } from './utils/draw'

// TODO: Vérifier comment je peux dessiner le texte sur le canvas sans rafraichir le background

teamNameInput.addEventListener('input', (e: Event) => {
  const input = e.target as HTMLInputElement
  CanvasStore.data.teamName = input.value
  drawText()
})
teamPlayerInputs.forEach((input, index) => {
  input.addEventListener('input', (e: Event) => {
    CanvasStore.data.playerList[index] = input.value
    drawText()
  })
})

createApp(App).mount('#app')
