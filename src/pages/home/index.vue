<script setup lang="ts"></script>

<template>
  <div class="home-page">
    <img src="@/static/images/sea.png" alt="" class="bg" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
