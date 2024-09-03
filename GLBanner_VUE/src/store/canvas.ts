import { reactive } from 'vue'

export const CanvasStore = reactive<{
  context?: CanvasRenderingContext2D
  size: { width: number; height: number }
  src: { background: string; asset: string; assetPosition: { x: number; y: number } }
  data: {
    teamName: string
    teamPosition: { x: number; y: number }
    playerNumber: number
    playerList: string[]
    playerPosition: { x: number; y: number }[]
  }
  canvas?: HTMLCanvasElement
}>({
  // TODO:
  // Virer les valeurs par défaut pour faire en sorte que playerList prennent playerNumber comme taille
  // Prendre en compte les positions dans le store plutot que prédeterminé dans const.ts

  size: { width: 0, height: 0 },
  src: { background: '', asset: '', assetPosition: { x: 0, y: 0 } },
  data: {
    teamName: '',
    teamPosition: { x: 0, y: 0 },
    playerNumber: 0,
    playerList: ['', '', '', '', ''],
    playerPosition: []
  }
})
