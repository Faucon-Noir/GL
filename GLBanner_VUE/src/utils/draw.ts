import { CanvasStore } from '@/store/canvas'
import { P1_coord, P2_coord, P3_coord, P4_coord, P5_coord, teamName_coord } from './constants/const'

export function drawText() {
  if (CanvasStore.context) {
    CanvasStore.context.font = '30px Saira_Light'
    CanvasStore.context.fillStyle = 'black'
    CanvasStore.context.fillText(CanvasStore.data.teamName, teamName_coord.x, teamName_coord.y)
    CanvasStore.context.fillText(CanvasStore.data.playerList[0], P1_coord.x, P1_coord.y)
    CanvasStore.context.fillText(CanvasStore.data.playerList[1], P2_coord.x, P2_coord.y)
    CanvasStore.context.fillText(CanvasStore.data.playerList[2], P3_coord.x, P3_coord.y)
    CanvasStore.context.fillText(CanvasStore.data.playerList[3], P4_coord.x, P4_coord.y)
    CanvasStore.context.fillText(CanvasStore.data.playerList[4], P5_coord.x, P5_coord.y)
  }
}

// Ajouter un LoadInitImage pour distinguer le background des assets
export function loadImageToCanva(src: string) {
  try {
    const img = new Image()
    console.log('src', src)
    img.onload = () => {
      if (CanvasStore.context) {
        CanvasStore.context.clearRect(0, 0, CanvasStore.size.width, CanvasStore.size.height)
        CanvasStore.context.fillStyle = 'transparent'
        CanvasStore.context.fillRect(0, 0, CanvasStore.size.width, CanvasStore.size.height)

        // Calculate the dimensions to maintain the aspect ratio
        const canvasAspect = CanvasStore.size.width / CanvasStore.size.height
        const imgAspect = img.width / img.height
        let drawWidth, drawHeight

        if (imgAspect > canvasAspect) {
          drawWidth = CanvasStore.size.width
          drawHeight = CanvasStore.size.width / imgAspect
        } else {
          drawHeight = CanvasStore.size.height
          drawWidth = CanvasStore.size.height * imgAspect
        }

        // Calculate the position to center the image
        const drawX = (CanvasStore.size.width - drawWidth) / 2
        const drawY = (CanvasStore.size.height - drawHeight) / 2

        CanvasStore.context.drawImage(img, drawX, drawY, drawWidth, drawHeight)
        drawText()
      } else {
        console.log('CanvasStore.context is null')
      }
    }
    img.onerror = (e) => {
      console.log('Failed to load image', e)
    }
    img.src = src
    console.log('img', img)
  } catch (e) {
    console.log('LoadImage', e)
  }
}
