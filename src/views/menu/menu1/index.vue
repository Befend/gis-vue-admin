<script setup lang="ts" name="menu1">
import { ref } from "vue"
const value = ref<string>("")
</script>

<template>
  <div class="card content-box">
    <span class="text">我是menu1</span>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<style scoped lang="scss"></style>
