<script setup lang="ts">
// 隐藏tabbar
import { onShow, onLaunch } from '@dcloudio/uni-app'
import chatBubble from '@/components/common/chatBubble.vue'
import answerList from './modules/answerList.vue'
import { ref } from 'vue'
import { welcomeList } from './welocome'
onShow(() => {
  console.log('what hell')
  uni.hideTabBar({
    animation: false,
    success() {},
    fail() {},
    complete() {},
  })
})
const weleomeIndex = ref(0)
const _welcomeList = ref(welcomeList)
const userResponses = ref([])
// 提示
const uToastRef = ref()
// 判断有没有选择一个response，没有就拒绝下一步
const isSelected = ref(true)
const showToast = (message) => {
  uToastRef.value.show({
    message,
    type: 'default',
  })
}

const goNext = () => {
  //  处理没有提问环节
  if (weleomeIndex.value <= 2) {
    isSelected.value = true
  }
  // 处理输入年龄环节
  if (weleomeIndex.value === 3) {
    if (!ageValue.value) {
      console.log('ageValue', ageValue.value)
      showToast('请输入年龄哦~')
      return
    } else {
      isSelected.value = true
    }
  }
  if (weleomeIndex.value === _welcomeList.value.length - 1) {
    console.log('最后一步')
    // 直接跳转到首页
    uni.switchTab({
      url: '/pages/home/index',
    })
  }
  if (!isSelected.value) {
    // 处理提问环节
    showToast('请选择一个回答')
    return
  }
  weleomeIndex.value++
  isSelected.value = false
  if (weleomeIndex.value >= _welcomeList.value.length) {
    weleomeIndex.value = 0
  }
}

interface response {
  index: number
  promptNumber: number
}
const handleReceivedResponse = (params: response) => {
  isSelected.value = true
  userResponses.value.push(params)
  goNext()
}

// 特殊处理年龄输入
const ageValue = ref('')
</script>

<template>
  <up-toast ref="uToastRef"></up-toast>
  <div class="chat-container">
    <chatBubble :msg="_welcomeList[weleomeIndex].prompt"></chatBubble>
    <img class="img" src="@/static/images/cutecat.png" alt="" />
  </div>
  <section class="question-list">
    <answerList
      :data="_welcomeList[weleomeIndex].responses"
      @click="handleReceivedResponse"></answerList>
  </section>
  <section class="age-input" v-if="weleomeIndex === 3">
    <up-input
      placeholder="请输入年龄"
      v-model="ageValue"
      border="bottom"
      clearable
      type="number"
      inputAlign="center"></up-input>
  </section>
  <div class="next-button">
    <up-button text="下一步" type="primary" @click="goNext"></up-button>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  .img {
    position: absolute;
    right: -60px;
    width: 150px;
    height: 150px;
    transform: rotate(-35deg);
    animation: alternate move 1s infinite;
  }
}
.age-input {
  position: fixed;
  bottom: 150px;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes move {
  0% {
    transform: translateY(5px) rotate(-35deg);
  }
  100% {
    transform: translateY(-5px) rotate(-35deg);
  }
}
.next-button {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
</style>
