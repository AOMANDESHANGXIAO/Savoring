<template>
  <IntroPage v-if="status === HomePageStatus.INTRO"></IntroPage>
</template>

<script setup lang="ts">
import IntroPage from './subPages/IntroPage.vue'
import { HomePageStatus } from './type'
import { ref } from 'vue'

const status = ref<HomePageStatus>(HomePageStatus.INTRO)

const setStatus = (newStatus: HomePageStatus) => {
  status.value = newStatus
}
</script>

<style>
</style>
