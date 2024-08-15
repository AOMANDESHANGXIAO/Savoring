<script lang="ts" setup>
import { ref } from 'vue'
import SpiritImage from '@/components/spiritImage.vue'
import ButtonGroup from '@/pages/HomePage/components/ButtonGroup.vue'
import { introList } from '../data'
import type { GIFStatus } from '@/types/type'
import useState from '@/hooks/useState'

const [spiritStatus, setSpiritStatus] = useState<GIFStatus>('suprise')

const getSpritStatusByIndex = (list: typeof introList, index: number) => {
  return list[index].status
}

const usersAnswer = ref<(number | string)[]>([])

const addAnswer = (answer: number | string) => {
  usersAnswer.value.push(answer)
}

const [info, setInfo] = useState<{
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

const getInfoByIndex = (list: typeof introList, index: number) => {
  return {
    text: list[index].prompt,
    list: list[index].responses,
    type: list[index].type,
    placeholder: list[index].placeholder || '',
  }
}

const setState = (list: typeof introList, index: number) => {
  const info = getInfoByIndex(list, index)
  setInfo(info)

  const status = getSpritStatusByIndex(list, index)
  setSpiritStatus(status)
}

setState(introList, index.value)

const emits = defineEmits(['onFinalAnswer'])

const goNext = (answer: number | string) => {
  index.value++
  if (index.value >= introList.length) {
    emits('onFinalAnswer')
  } else {
    addAnswer(answer)

    setState(introList, index.value)
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
