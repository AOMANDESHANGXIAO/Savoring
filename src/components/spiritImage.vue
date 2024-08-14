<script setup lang="ts">
import { computed } from 'vue';
import type { GIFStatus} from '@/types/type';
interface Props {
  status: GIFStatus
}

const props = withDefaults(defineProps<Props>(), {
  status: 'suprise'
})

const imagePath = computed(() => {
  return '../static/images/home/spirit/' + props.status + '.GIF'
})
</script>

<template>
  <div class="image-container">
    <img :src="imagePath"/>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  // background-color: pink;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>