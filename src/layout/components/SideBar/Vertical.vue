<script setup lang="ts" name="vertical">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { GlobalStore } from "@/store"
import { AuthStore } from "@/store/modules/auth"
import Main from "@/layout/components/Main/index.vue"
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue"
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue"
import SubMenu from "@/layout/components/Menu/SubMenu.vue"

const route = useRoute()
const authStore = AuthStore()
const globalStore = GlobalStore()
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))
const menuList = computed(() => authStore.showMenuListGet)
const isCollapse = computed(() => globalStore.themeConfig.isCollapse)
</script>

<!-- 纵向布局 -->
<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo flx-center">
          <img src="@/assets/images/logo_bak3.svg" alt="logo" />
          <span v-show="!isCollapse">GIS Vue Admin</span>
        </div>
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :router="false"
            :collapse="isCollapse"
            :collapse-transition="false"
            :unique-opened="true"
            background-color="#191a20"
            text-color="#bdbdc0"
            active-text-color="#ffffff"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    width: auto;
    overflow: inherit;
    background-color: #191a20;
    border-right: 1px solid #191a20;
    .menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: all 0.3s ease;
      .el-scrollbar {
        height: calc(100% - 55px);
        .el-menu {
          overflow-x: hidden;
          border-right: none;
        }
      }
      .logo {
        box-sizing: border-box;
        height: 55px;
        border-bottom: 1px solid #282a35;
        span {
          font-size: 21.5px;
          font-weight: bold;
          color: #dadada;
          white-space: nowrap;
        }
        img {
          width: 28px;
          object-fit: contain;
          margin-right: 6px;
        }
      }
    }
  }
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
    :deep(.tool-bar-ri) {
      .toolBar-icon,
      .username {
        color: var(--el-text-color-primary);
      }
    }
  }
}
</style>
