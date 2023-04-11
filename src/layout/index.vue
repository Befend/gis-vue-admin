<script setup lang="ts" name="layout">
import { computed, type Component } from "vue"
import { GlobalStore } from "@/store"
import ThemeDrawer from "./components/ThemeDrawer/index.vue"
import Vertical from "@/layout/components/SideBar/Vertical.vue"
import Classic from "@/layout/components/SideBar/Classic.vue"
import Horizontal from "@/layout/components/SideBar/Horizontal.vue"
import Columns from "@/layout/components/SideBar/Columns.vue"

const LayoutComponents: { [key: string]: Component } = {
  vertical: Vertical,
  classic: Classic,
  transverse: Horizontal,
  columns: Columns
}

const globalStore = GlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
</script>

<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
  <ThemeDrawer />
</template>

<style scoped lang="scss">
.layout {
  min-width: 760px;
}
</style>
