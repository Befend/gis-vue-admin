<script setup lang="ts" name="horizontal">
import { computed } from "vue"
import { AuthStore } from "@/store/modules/auth"
import { useRoute, useRouter } from "vue-router"
import Main from "@/layout/components/Main/index.vue"
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue"
import SubMenu from "@/layout/components/Menu/SubMenu.vue"

const route = useRoute()
const router = useRouter()
const authStore = AuthStore()
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))
const menuList = computed(() => authStore.showMenuListGet)

const handleClickMenu = (subItem: Menu.MenuOptions) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank")
  router.push(subItem.path)
}
</script>

<!-- 横向布局 -->
<template>
  <el-container class="layout">
    <el-header>
      <div class="logo flx-center">
        <img src="@/assets/images/sys_logo.svg" alt="logo" />
        <span>GIS Vue Admin</span>
      </div>
      <el-menu
        mode="horizontal"
        :default-active="activeMenu"
        :router="false"
        :unique-opened="true"
        background-color="#191a20"
        text-color="#dadada"
        active-text-color="#ffffff"
      >
        <!-- 只有在这里写 submenu 才能触发 menu 三个点省略 -->
        <template v-for="subItem in menuList" :key="subItem.path">
          <el-sub-menu v-if="subItem.children?.length" :index="subItem.path" :key="subItem.path + 'el-sub-menu'">
            <template #title>
              <el-icon>
                <!-- <component :is="subItem.meta.icon"></component> -->
                <SvgIcon :name="subItem.meta.icon" />
              </el-icon>
              <span>{{ $t(subItem.meta.title) }}</span>
            </template>
            <SubMenu :menuList="subItem.children" />
          </el-sub-menu>
          <el-menu-item v-else :index="subItem.path" :key="subItem.path + 'el-menu-item'" @click="handleClickMenu(subItem)">
            <el-icon>
              <!-- <component :is="subItem.meta.icon"></component> -->
              <SvgIcon :name="subItem.meta.icon" />
            </el-icon>
            <template #title>
              <span>{{ $t(subItem.meta.title) }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>
    <Main />
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
    .logo {
      width: 210px;
      margin-right: 30px;
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
    :deep(.el-menu) {
      flex: 1;
      overflow: hidden;
      border-bottom: none;
      .is-active {
        background-color: var(--el-color-primary) !important;
        border-bottom-color: var(--el-color-primary) !important;
        .el-sub-menu__title {
          color: #ffffff !important;
          background-color: var(--el-color-primary) !important;
          border-bottom-color: var(--el-color-primary) !important;
        }
        &:hover {
          color: #ffffff !important;
        }
      }
    }
    :deep(.tool-bar-ri) {
      .toolBar-icon,
      .username {
        color: #e5eaf3;
      }
    }
  }
}
</style>
