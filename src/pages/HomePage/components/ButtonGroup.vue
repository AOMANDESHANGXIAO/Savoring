<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'button-group',
})

const props = defineProps<{
  list: Array<string>
  type: 'input' | 'button'
  placeholder?: string
}>()

const value = ref('')

const uToastRef = ref<HTMLElement | null>(null)

const showToast = (message: string) => {
  uToastRef.value!.show({
    message,
    type: 'default',
  })
}

const sumbit = () => {
  if (value.value === '' || +value.value < 0 || +value.value > 100) {
    showToast('请正确输入年龄')
    return
  }
  emits('onClick', value.value)
}

const emits = defineEmits(['onClick'])
</script>

<template>
  <!-- 按钮组 -->
  <view class="button-group-container" v-if="props.type === 'button'">
    <up-button
      v-for="(item, index) in props.list"
      @click="emits('onClick', index)"
      style="width: 100%"
      :key="index"
      :text="item"
      :plain="true"
      :type="index % 2 === 0 ? 'success' : 'primary'"></up-button>
  </view>
  <!-- 提示 -->
  <up-toast v-if="props.type === 'input'" ref="uToastRef"></up-toast>
  <!-- 输入年龄 -->
  <view class="button-group-container" v-if="props.type === 'input'">
    <up-input
      :placeholder="props.placeholder"
      v-model="value"
      type="number"></up-input>
    <up-button
      text="下一步"
      style="width: 100%"
      type="primary"
      @click="sumbit"></up-button>
  </view>
</template>

<style lang="scss" scoped>
.button-group-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
</style>
