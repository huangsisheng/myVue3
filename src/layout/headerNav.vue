<template>
  <div class="header-nav-wrap">
    <section class="header-nav-wrap-lt">
      <div @click="toggleCollapsed" style="cursor: pointer; margin-top: -13px">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </div>
      <a-tabs @change="handlChangeRoute">
        <a-tab-pane v-for="(route, index) in menuList" :key="index">
          <template v-slot:tab>
            <span> {{ route.meta.title }} </span>
          </template>
        </a-tab-pane>
      </a-tabs>
    </section>
    <section class="header-nav-wrap-rt"></section>
  </div>
  <div class="header-route-wrap">
    <section>
      <a-tag closable @close="closeRouteTag"> Tag 2 </a-tag>
    </section>
  </div>
</template>

<script>
import storage from "@/utils/localStorage";
import { computed, getCurrentInstance, reactive, toRefs } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { mapActions } from "vuex";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      activeKey: "home",
      collapsed: false,
      ...mapActions("user", ["setRouteList"]),
    });

    const menuList = computed(() => {
      return storage.get("menuList");
    });
    const handlChangeRoute = function (key) {
      state.activeKey = key;
      const currRouter = ctx.menuList[key];
      console.log(ctx);

      ctx.setRouteList(currRouter.children);

      ctx.$router.push(currRouter.path);
    };
    const toggleCollapsed = () => {
      ctx.$mitt.emit("toggleCollapsed");
      state.collapsed = !state.collapsed;
    };
    const closeRouteTag = () => {
        
    }

    return {
      ...toRefs(state),
      menuList,
      handlChangeRoute,
      toggleCollapsed,
    };
  },
};
</script>

<style scoped lang="less">
.header-nav-wrap,
.header-route-wrap {
  padding: 0 20px;
}
.header-nav-wrap,
.header-nav-wrap-lt,
.header-nav-wrap-rt,
.header-route-wrap {
  display: flex;
  align-items: center;
}
</style>
