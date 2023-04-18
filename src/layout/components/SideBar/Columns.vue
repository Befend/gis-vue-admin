<script setup lang="ts" name="columns">
import { ref, computed, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { GlobalStore } from "@/store"
import { AuthStore } from "@/store/modules/auth"
import Main from "@/layout/components/Main/index.vue"
import ToolBarLeft from "@/layout/components/Header/ToolBarLeft.vue"
import ToolBarRight from "@/layout/components/Header/ToolBarRight.vue"
import SubMenu from "@/layout/components/Menu/SubMenu.vue"

const route = useRoute()
const router = useRouter()
const authStore = AuthStore()
const globalStore = GlobalStore()
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path))
const menuList = computed(() => authStore.showMenuListGet)
const isCollapse = computed(() => globalStore.themeConfig.isCollapse)

const subMenu = ref<Menu.MenuOptions[]>([])
const splitActive = ref<string>("")
watch(
  () => [menuList, route],
  () => {
    // 当前菜单没有数据直接 return
    if (!menuList.value.length) return
    splitActive.value = route.path
    const menuItem = menuList.value.filter(
      (item: Menu.MenuOptions) => route.path === item.path || `/${route.path.split("/")[1]}` === item.path
    )
    if (menuItem[0].children?.length) return (subMenu.value = menuItem[0].children)
    subMenu.value = []
  },
  {
    deep: true,
    immediate: true
  }
)

// 切换 SubMenu
const changeSubMenu = (item: Menu.MenuOptions) => {
  splitActive.value = item.path
  if (item.children?.length) return (subMenu.value = item.children)
  subMenu.value = []
  router.push(item.path)
}
</script>

<!-- 分栏布局 -->
<template>
  <el-container class="layout">
    <div class="aside-split">
      <div class="logo flx-center">
        <img src="@/assets/images/sys_logo.svg" alt="logo" />
      </div>
      <el-scrollbar>
        <div class="split-list">
          <div
            class="split-item"
            :class="{ 'split-active': splitActive === item.path || `/${splitActive.split('/')[1]}` === item.path }"
            v-for="item in menuList"
            :key="item.path"
            @click="changeSubMenu(item)"
          >
            <el-icon>
              <!-- <component :is="item.meta.icon"></component> -->
              <SvgIcon :name="item.meta.icon" />
            </el-icon>
            <span class="title">{{ item.meta.title }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-aside :class="{ 'not-aside': !subMenu.length }" :style="{ width: isCollapse ? '65px' : '210px' }">
      <div class="logo flx-center">
        <span v-show="subMenu.length">{{ isCollapse ? "G" : "GIS Vue Admin" }}</span>
      </div>
      <el-scrollbar>
        <el-menu
          :default-active="activeMenu"
          :router="false"
          :collapse="isCollapse"
          :collapse-transition="false"
          :unique-opened="true"
          background-color="#ffffff"
        >
          <SubMenu :menuList="subMenu" />
        </el-menu>
      </el-scrollbar>
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
  .aside-split {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 70px;
    height: 100%;
    background-color: #191a20;
    border-right: 1px solid #ffffff;
    .logo {
      box-sizing: border-box;
      height: 59px;
      border-bottom: 1px solid #282a35;
      img {
        width: 32px;
        object-fit: contain;
      }
    }
    .el-scrollbar {
      height: calc(100% - 59px);
      .split-list {
        flex: 1;
        .split-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #292b35;
          }
          .el-icon {
            font-size: 21px;
          }
          .title {
            margin-top: 6px;
            font-size: 12px;
            transform: scale(0.96);
          }
          .el-icon,
          .title {
            color: #e5eaf3;
          }
        }
        .split-active {
          background-color: $primary-color !important;
          .el-icon,
          .title {
            color: #ffffff;
          }
        }
      }
    }
  }
  .el-aside {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background-color: #ffffff;
    border-right: 1px solid #f0eded;
    transition: all 0.3s ease;
    .el-scrollbar {
      height: calc(100% - 59px);
      .el-menu {
        overflow-x: hidden;
        border-right: none;
      }
    }
    .logo {
      box-sizing: border-box;
      height: 59px;
      border-bottom: 1px solid #f0eded;
      span {
        font-size: 24px;
        font-weight: bold;
        color: var(--el-menu-text-color);
        white-space: nowrap;
      }
    }
  }
  .not-aside {
    width: 0 !important;
  }
  .el-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 59px;
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
