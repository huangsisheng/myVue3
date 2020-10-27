<template>
  <a-layout id="components-layout-demo-custom-trigger" class="vh100">
    <a-layout-sider>
      <menue-list />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <header-nav/>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <main-wrap/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import HeaderNav from "./headerNav";
import MenueList from "./menueList";
import MainWrap from "./mainWrap";
export default {
  components: {
    HeaderNav,
    MenueList,
    MainWrap,
  }
};
</script>

<style scoped lang="">
</style>
