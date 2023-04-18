<script setup lang="ts">
import mittBus from "@/utils/mittBus"
const openDrawer = () => {
  mittBus.emit("openThemeDrawer")
}
</script>

<template>
  <div class="theme-setting">
    <i class="toolBar-icon iconfont icon-setting" @click="openDrawer"></i>
  </div>
</template>
