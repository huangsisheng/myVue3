<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <a-menu-item v-for="(route, index) in routerList" :key="index">
      <a-sub-menu v-if="route.children" key="sub3" title="Submenu">
        <a-menu-item v-for="(routeC, indexC) in routerList" :key="indexC">
          <template v-slot:title>
            <span class="route-span" @click="jump2page(routeC)"
              ><MailOutlined /><span> {{ routeC.meta.title }}</span></span
            >
          </template>
        </a-menu-item>
      </a-sub-menu>
      <span class="route-span" @click="jump2page(route)" v-else>{{
        route.meta.title
      }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {
  computed,
  getCurrentInstance,
  onMounted,
  reactive,
  toRefs,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import { mapState } from "vuex";

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
      collapsed: false,
      openKeys: [1],
      preOpenKeys: [1],
      ...mapState("user", ["routeList"]),
    });
    // 获取路由列表
    const routerList = computed(() => ctx.routeList());
    /* 监听器 */
    watch("preOpenKeys", (newVal, oldVal) => {
      ctx.preOpenKeys = oldVal;
    });

    /* 生命钩子 */
    onMounted(() => {
      ctx.$mitt.on("toggleCollapsed", () => {
        state.collapsed = !state.collapsed;
        state.preOpenKeys = state.collapsed ? [] : state.preOpenKeys;
        console.log(ctx);
      });
    });

    /* 函数 */
    const jump2page = function (rou) {
      ctx.$router.push({ name: rou.name });
    };
    console.log(ctx);
    return {
      ...toRefs(state),
      routerList,
      route,
      jump2page,
    };
  },
};
</script>

<style scoped lang="less">
.route-span {
  display: inline-block;
  width: 100%;
}
</style>
