<script lang="ts" setup>
defineOptions({
  name: 'main-page',
})

const isLands: {
  [key: string]: {
    name: string
    src: string
    style: {
      left: string
      top: string
      width: string
      height: string
    }
  }
} = {
  coconut: {
    name: 'coconut',
    src: '../../../static/images/home/island/coconut.png',
    style: {
      left: '4px',
      top: '398px',
      width: '200px',
      height: '200px',
    },
  },
  forest: {
    name: 'forest',
    src: '../../../static/images/home/island/forest.png',
    style: {
      left: '25px',
      top: '138px',
      width: '200px',
      height: '200px',
    },
  },
  building: {
    name: 'building',
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
      v-for="item in isLands"
      :src="item.src"
      :style="item.style"
      :key="item.name"
      @click="handleClickImg(item.name)" />
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
