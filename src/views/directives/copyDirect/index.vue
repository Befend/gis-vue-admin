<script setup lang="ts" name="copyDirect">
import { ref } from "vue"

const data = ref<string>("我是被复制的内容")
</script>

<template>
  <div class="card content-box">
    <span class="text">复制指令</span>
    <div class="box-content">
      <el-input placeholder="请输入内容" v-model="data" style="width: 500px">
        <template #append>
          <el-button v-copy="data">复制</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
