<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
  uni.navigateTo({
    url: '/pages/intro/index',
    animationType:'pop-in',
    success: (result)=>{
        console.log('跳转成功')
    },
    fail: ()=>{},
    complete: ()=>{}
  })
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
</style>
