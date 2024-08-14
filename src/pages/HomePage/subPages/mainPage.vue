<script lang="ts" setup>
defineOptions({
  name: 'main-page',
})

const isLands = {
  coconut: {
    src: '../../../static/images/home/island/coconut.png',
    style: {
      left: '4px',
      top: '398px',
      width: '200px',
      height: '200px',
    },
  },
  forest: {
    src: '../../../static/images/home/island/forest.png',
    style: {
      left: '25px',
      top: '138px',
      width: '200px',
      height: '200px',
    },
  },
  building: {
    src: '../../../static/images/home/island/building.png',
    style: {
      left: '176px',
      top: '-4px',
      width: '200px',
      height: '200px',
    },
  },
}

type Lands = keyof typeof isLands

const handleClickImg = (img: Lands) => {
  switch (img) {
    case 'coconut':
      console.log('coconut')
      break
    case 'forest':
      console.log('forest')
      break
    case 'building':
      console.log('building')
      break
  }
}
</script>

<template>
  <view class="main-page-container">
    <img
      class="bg"
      src="../../../static/images/home/background/bg.png"
      alt="" />
    <img
      :src="isLands.coconut.src"
      :style="isLands.coconut.style"
      @click="handleClickImg('coconut')" />
    <img
      :src="isLands.forest.src"
      :style="isLands.forest.style"
      @click="handleClickImg('forest')" />
    <img
      :src="isLands.building.src"
      :style="isLands.building.style"
      @click="handleClickImg('building')" />
  </view>
</template>

<style lang="scss" scoped>
.main-page-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  image {
    position: absolute;
  }
  .bg {
    width: 100%;
    height: 100%;
  }
}
</style>
