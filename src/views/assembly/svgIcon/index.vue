<script setup lang="ts" name="svgIcon"></script>

<template>
  <div class="card content-box">
    <el-alert
      title="SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons"
      type="warning"
      :closable="false"
    />
    <div class="icon-list">
      <SvgIcon name="icon-xianxingdaoyu" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingdiqiu" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingditu" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingfanchuan" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingfeiji" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxinglvhangriji" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingtianqiyubao" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingxiangjipaizhao" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingxiarilengyin" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingyoulun" :icon-style="{ width: '100px', height: '100px' }" />
      <SvgIcon name="icon-xianxingxiarilengyin" :icon-style="{ width: '100px', height: '100px' }" />
    </div>
    <el-descriptions title="配置项" :column="1" border>
      <el-descriptions-item label="name"> 图标的名称，svg 图标必须存储在 src/assets/icons 目录下 </el-descriptions-item>
      <el-descriptions-item label="prefix"> 图标的前缀，默认为 "icon" </el-descriptions-item>
      <el-descriptions-item label="iconStyle"> 图标的样式，默认样式为 { width: "100px", height: "100px" } </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped lang="scss">
.icon-list {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 40px 100px 0;
}
</style>
