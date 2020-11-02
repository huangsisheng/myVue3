<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <a-menu-item v-for="(route, index) in routerList.children" :key="index">
      <a-sub-menu v-if="route.children" key="sub3" title="Submenu">
        <a-menu-item v-for="(routeC, indexC) in routerList" :key="indexC">
          <template v-slot:title>
            <span @click="jump2page(routeC)"
              ><MailOutlined /><span> {{ routeC.meta.title }}</span></span
            >
          </template>
        </a-menu-item>
      </a-sub-menu>
      <span @click="jump2page(route)" v-else>{{ route.meta.title }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
      collapsed: false,
      openKeys: [1],
      preOpenKeys: [1],
    });
    const routerList = computed(
      () =>
        route.matched.filter((item) => {
          return item.children.length && item.name === route.name;
        })[0]
    );
    /* 监听器 */
    watch("preOpenKeys", (newVal, oldVal) => {
      ctx.preOpenKeys = oldVal;
    });

    /* 生命钩子 */
    onMounted(() => {
      console.log(routerList);
      ctx.$emit("toggleCollapsed", () => {
        ctx.collapsed = !ctx.collapsed;
        ctx.openKeys = ctx.collapsed ? [] : ctx.preOpenKeys;
      });
    });


    /* 函数 */
    const jump2page = function (rou) {
        ctx.$router.push({path:ctx.routerList.path+'/'+rou.path})
    }
    console.log(ctx);
    return {
      routerList,
      route,
      jump2page
    };
  },
};
</script>

<style scoped lang="">
</style>
