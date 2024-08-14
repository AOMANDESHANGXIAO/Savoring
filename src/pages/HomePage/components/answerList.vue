<script lang="ts" setup>
defineOptions({
  name: 'answer-list',
})
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    },
  },
  promptNumber: {
    // 记录这是第几次问答
    type: Number,
    default: 0,
  },
})
const emits = defineEmits(['click'])
const handleClick = (index: number) => {
  emits('click', {
    index,
    promptNumber: props.promptNumber,
  })
}
</script>

<template>
  <div class="answer-list">
    <up-button
      v-for="(item, index) in props.data"
      :key="index"
      :text="item"
      plain
      :type="index % 2 === 0 ? 'success' : 'primary'"
      @click="handleClick(index)"></up-button>
  </div>
</template>

<style lang="scss" scoped>
.answer-list {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
