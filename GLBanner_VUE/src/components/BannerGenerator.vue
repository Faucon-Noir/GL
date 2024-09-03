<script setup lang="ts">
// Const
import { TeamName, PlayerName } from '@/utils/constants/placeholder'
import { imageListConfig } from '@/utils/constants/config'
// Components
import ImageList from './ImageList.vue'
// Utils
import { saveImage } from '../utils/misc'
import { onMounted, ref } from 'vue'
import { CanvasStore } from '@/store/canvas'
import { loadImageToCanva } from '../utils/draw'
import { background } from '../utils/constants/config'

const canvasBanner = ref<HTMLCanvasElement>()

onMounted(() => {
  loadImageToCanva(background[0].src)
  const canvas = canvasBanner.value
  if (!canvas) return
  CanvasStore.canvas = canvas
  CanvasStore.context = canvas.getContext('2d')!
  CanvasStore.size = { width: canvas.width, height: canvas.height }
})
</script>

<template>
  <h1>🎌 Banner Maker 🎌</h1>
  <canvas ref="canvasBanner" id="Bidule" width="1080" height="720"></canvas>
  <div>
    <div id="export">
      <input type="text" :placeholder="TeamName" v-model="CanvasStore.data.teamName" />
      <button @click="saveImage()" class="border">Save Image</button>
    </div>
  </div>
  <div class="Player">
    <div v-for="n in CanvasStore.data.playerList.length" :key="n">
      <input
        type="text"
        :placeholder="PlayerName + n"
        :id="'player-input-' + n"
        v-model="CanvasStore.data.playerList[n - 1]"
      />
    </div>
  </div>
  <div class="Inline">
    <div v-for="(gallery, index) in imageListConfig" :key="index">
      <ImageList :name="gallery.name" :images="gallery.src" :index="index" />
    </div>
  </div>
</template>

<style scoped>
.canva {
  border: 1px solid var(--black);
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}

#export {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.border {
  border: 1px solid var(--black);
  border-radius: 5px;
  color: black;
  background-color: var(--white);
  width: 170px;
  padding: 0px;
}

.Inline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.Player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  gap: 10px;
}
</style>
