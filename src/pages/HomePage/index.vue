<template>
  <IntroPage v-if="status === HomePageStatus.INTRO" @onFinalAnswer="handleFinalAnswer"></IntroPage>
  <MainPage v-else-if="status === HomePageStatus.MAIN"></MainPage>
</template>

<script setup lang="ts">
import IntroPage from './subPages/IntroPage.vue'
import MainPage from './subPages/mainPage.vue'
import { HomePageStatus } from './type'
import { ref } from 'vue'

const DEV_STATUS = HomePageStatus.MAIN

const status = ref<HomePageStatus>(DEV_STATUS)

const setStatus = (newStatus: HomePageStatus) => {
  status.value = newStatus
}

const handleFinalAnswer = () => {
  setStatus(HomePageStatus.MAIN)
}
</script>

<style></style>
