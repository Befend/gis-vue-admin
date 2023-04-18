<script setup lang="ts">
import { useFullscreen } from "@vueuse/core"
const { toggle, isFullscreen } = useFullscreen()
</script>

<template>
  <div class="fullscreen">
    <i
      :class="['iconfont', isFullscreen ? 'icon-exit-full-screen' : 'icon-full-screen']"
      class="toolBar-icon"
      @click="toggle"
    ></i>
  </div>
</template>
