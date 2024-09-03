<script setup lang="ts">
import { loadImageToCanva } from '@/utils/draw'
import { SearchItem } from '@/utils/constants/placeholder'
import { ref } from 'vue'
import { searchFilter } from '../utils/misc'

const search = ref('')
const props = defineProps<{
  name: string
  images: { src: string; alt: string }[]
  index: number
}>()
</script>

<template>
  <div class="label">
    <!-- On mets le label au bord pour faire joli -->
    <template v-if="props.index % 2 === 0">
      {{ name }}
      <input type="text" class="textInput" :placeholder="SearchItem" v-model="search" />
    </template>
    <template v-else>
      <input type="text" class="textInput" :placeholder="SearchItem" v-model="search" />
      {{ name }}
    </template>
  </div>

  <div class="imageList blur">
    <div v-for="(image, index) in searchFilter(images, search)" :key="index">
      <img :src="image.src" :alt="image.alt" @click="loadImageToCanva(image.src)" />
    </div>
  </div>
</template>

<style scoped>
/* COLORS */
/* --red: #D12B38;
	--white: #F4F4F4;
	--black: #1A1A1A;
	--azure: #498BEA;
	--coral: #FF6550; */

/* SCROLLBAR */
::-webkit-scrollbar {
  width: 4px;
  scrollbar-width: thin;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--white);
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: transparent; /* A voir ce qui est le plus stylé, transparent ou noir */
  margin: 5px;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.imageList {
  min-width: 522px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--black);
  border-radius: 10px;
}

.imageList img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 15px;
  object-fit: cover;
}

.blur {
  background-color: rgba(211, 211, 211, 0.5);
  backdrop-filter: blur(20px);
}
</style>
