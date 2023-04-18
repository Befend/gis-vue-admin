<script setup lang="ts" name="classic">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { GlobalStore } from "@/store"
import { AuthStore } from "@/store/modules/auth"
import Main from "@/layout/components/Main/index.vue"
import SubMenu from "@/layout/components/Menu/SubMenu.vue"
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue"
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue"

const route = useRoute()
const authStore = AuthStore()
const globalStore = GlobalStore()
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))
const menuList = computed(() => authStore.showMenuListGet)
const isCollapse = computed(() => globalStore.themeConfig.isCollapse)
</script>

<!-- 经典布局 -->
<template>
  <el-container class="layout">
    <el-header>
      <div class="header-lf">
        <div class="logo flx-center">
          <img src="@/assets/images/sys_logo.svg" alt="logo" />
          <span>GIS Vue Admin</span>
        </div>
        <ToolBarLeft />
      </div>
      <ToolBarRight />
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :default-active="activeMenu"
              :router="false"
              :collapse="isCollapse"
              :collapse-transition="false"
              :unique-opened="true"
              background-color="#ffffff"
              text-color="#303133"
            >
              <SubMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 59px;
    padding: 0 15px 0 0;
    background-color: #191a20;
    border-bottom: 1px solid #f1f1f1;
    .header-lf {
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      .logo {
        flex-shrink: 0;
        width: 210px;
        margin-right: 16px;
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
    :deep(.tool-bar-lf) {
      color: #ffffff;
      .el-breadcrumb__inner.is-link {
        color: #e5eaf3;
        &:hover {
          color: var(--el-color-primary);
        }
      }
      .el-breadcrumb__item:last-child .el-breadcrumb__inner,
      .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
        color: #cfd3dc;
        fill: #cfd3dc;
      }
    }
    :deep(.tool-bar-ri) {
      .toolBar-icon,
      .username {
        color: #e5eaf3;
      }
    }
  }
  .el-aside {
    width: auto;
    overflow: inherit;
    background-color: #ffffff;
    border-right: 1px solid var(--el-border-color);
    transition: all 0.3s ease;
    .menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: all 0.3s ease;
      .el-menu {
        overflow-x: hidden;
        border-right: none;
      }
    }
  }
}
</style>
