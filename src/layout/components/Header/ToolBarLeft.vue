<script setup lang="ts">
import { computed } from "vue"
import { GlobalStore } from "@/store"
import CollapseIcon from "./components/CollapseIcon.vue"
import Breadcrumb from "./components/Breadcrumb.vue"

const globalStore = GlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
</script>

<template>
  <div class="tool-bar-lf">
    <CollapseIcon id="collapseIcon" />
    <Breadcrumb id="breadcrumb" v-if="themeConfig.breadcrumb" />
  </div>
</template>

<style scoped lang="scss">
.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
</style>
