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
    <section class="header-nav-wrap-rt">
      <span class="opre-btn" @click="toggleScreenSize">
        <FullscreenExitOutlined v-if="isFullScreen"/>
        <FullscreenOutlined v-else/>
      </span>
    </section>
  </div>
  <div class="header-route-wrap">
    <section class="header-route-wrap-lt">
      <a-tag
        v-for="(pane, index) in fastRouteList()"
        :key="pane.path"
        closable
        @close="delRoute(index)"
        @click="jump2page(pane)"
      >
        {{ pane.meta.title }}
      </a-tag>
    </section>
    <section class="header-route-wrap-rt"></section>
  </div>
</template>

<script>
import storage from "@/utils/localStorage";
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import FullScreen from "@/utils/fullScreen";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  },
  setup() {
    const { ctx } = getCurrentInstance();

    const state = reactive({
      activeKey: "home",
      activeR: "/home",
      collapsed: false,
      isFullScreen:false,
      ...mapActions("user", ["setRouteList", "delFastRouteList"]),
      ...mapState("user", ["fastRouteList"]),
    });
    const menuList = computed(() => {
      return storage.get("menuList");
    });
    onMounted(() => {
      ctx.handlChangeRoute("home");
    });

    const handlChangeRoute = function (key) {
      state.activeKey = key;
      const currRouter = ctx.menuList[key];
      console.log(ctx);

      ctx.setRouteList(currRouter.children);

      ctx.$router.push(currRouter.path);
    };
    const jump2page = (route) => {
      ctx.$router.push({ path: route.path });
    };
    const delRoute = (index) => {
      ctx.delFastRouteList(index);
      let r = ctx.fastRouteList();
      let path = r[r.length - 1].path;
      ctx.$router.push({ path: path });
    };
    const toggleCollapsed = () => {
      ctx.$mitt.emit("toggleCollapsed");
      state.collapsed = !state.collapsed;
    };
    
    const toggleScreenSize = () => {
        state.isFullScreen = !state.isFullScreen
        new FullScreen(state.isFullScreen)
    };

    return {
      ...toRefs(state),
      menuList,
      handlChangeRoute,
      toggleCollapsed,
      jump2page,
      delRoute,
      toggleScreenSize
    };
  },
};
</script>

<style scoped lang="less">
.header-nav-wrap,
.header-route-wrap {
  padding: 0 20px;
  justify-content: space-between;
}
.header-nav-wrap,
.header-nav-wrap-lt,
.header-nav-wrap-rt,
.header-route-wrap,
.header-route-wrap-lt,
.header-route-wrap-rt {
  display: flex;
  align-items: center;
}

.opre-btn{
    cursor: pointer;
}
</style>
