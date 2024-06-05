<script lang="ts" setup>
defineOptions({
    name: 'chat-bubble',
})
const props = defineProps({
  msg: {
    type: String,
    default: () => {
      return ''
    }
  }
})
</script>

<template>
    <div class="chat-bubble">{{ props.msg }}</div>
</template>

<style lang="scss" scoped>
.chat-bubble {
    // width: 200px;
    // height: 100px;
    position: relative;
    max-width: 200px;
    background-color: $my-primary-color;
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    &::after {
        //  在右侧绘制一个小三角
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        /* 箭头靠右边 */
        top: 13px;
        right: -13px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 15px solid  $my-primary-color;
    }
}
</style>
