<script setup lang="ts" name="longPressDirect">
import { ElMessage } from "element-plus"
const longPress = () => {
  ElMessage.success("长按事件触发成功")
}
</script>

<template>
  <div class="card content-box">
    <span class="text">长按指令</span>
    <el-button type="primary" v-longpress="longPress">长按2秒触发事件</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
