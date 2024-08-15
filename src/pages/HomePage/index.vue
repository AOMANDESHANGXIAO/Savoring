<template>
  <IntroPage
    v-if="status === HomePageStatus.INTRO"
    @onFinalAnswer="handleFinalAnswer"></IntroPage>
  <MainPage v-else-if="status === HomePageStatus.MAIN"></MainPage>
</template>

<script setup lang="ts">
import IntroPage from './subPages/IntroPage.vue'
import MainPage from './subPages/mainPage.vue'
import { HomePageStatus } from './type'
import useState from '@/hooks/useState'

const DEV_STATUS = HomePageStatus.INTRO

const [status, setStatus] = useState<HomePageStatus>(DEV_STATUS)

const handleFinalAnswer = () => {
  setStatus(HomePageStatus.MAIN)
}
</script>

<style></style>
