<script lang="ts" setup>
import { ref } from 'vue'
import SpiritImage from '@/components/spiritImage.vue'
import ButtonGroup from '@/pages/HomePage/components/ButtonGroup.vue'
import { introList } from '../data'
import type { GIFStatus } from '@/types/type'

const spiritStatus = ref<GIFStatus>('suprise')

const usersAnswer = ref<(number | string)[]>([])

const info = ref<{
  text: string
  list: string[]
  type: 'button' | 'input'
  placeholder: string
}>({
  text: '',
  list: [],
  type: 'button',
  placeholder: '',
})

const index = ref(0)

const setSpiritStatus = () => {
  const status = introList[index.value].status
  spiritStatus.value = status
}

const setInfo = () => {
  const text = introList[index.value].prompt
  const list = introList[index.value].responses
  const type = introList[index.value].type
  info.value = {
    text,
    list,
    type,
    placeholder: introList[index.value]?.placeholder || '',
  }
}

setInfo()
setSpiritStatus()

const emits = defineEmits(['onFinalAnswer'])


const goNext = (answer: number | string) => {
  
  index.value++
  if (index.value >= introList.length) {
    emits('onFinalAnswer')
  } else {
    usersAnswer.value.push(answer)
    setInfo()
    setSpiritStatus()
  }
}
</script>

<template>
  <view class="intro-page-container">
    <view class="text-container">{{ info.text }}</view>
    <SpiritImage :status="spiritStatus"></SpiritImage>
    <view class="button-container">
      <ButtonGroup
        :list="info.list"
        :type="info.type"
        :placeholder="info.placeholder"
        @onClick="goNext"></ButtonGroup>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.intro-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .text-container {
    width: 80%;
    text-align: center;
    font-size: 20px;
  }
}
</style>
