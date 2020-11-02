<template>
  <div class="header-nav-wrap">
    <a-button type="text" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-tabs @change="handlChangeRoute">
      <a-tab-pane v-for="(route, index) in menuList" :key="index">
        <template v-slot:tab>
          <span> {{ route.meta.title }} </span>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import storage from "@/utils/localStorage";
import { computed, getCurrentInstance, reactive, toRefs } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const state = reactive({
      activeKey: 1,
      collapsed: false,
    });

    const menuList = computed(() => {
      return storage.get("menuList");
    });

    const handlChangeRoute = function (key) {
      ctx.activeKey = key;
      const currRouter = ctx.menuList[key];
      ctx.$router.push(currRouter.path);
    };
    const toggleCollapsed = function () {
      ctx.collapsed = !ctx.collapsed;
      ctx.$emit("toggleCollapsed");
    };

    return {
      ...toRefs(state),
      menuList,
      handlChangeRoute,
    };
  },
};
</script>

<style scoped lang="less">
.header-nav-wrap {
  display: flex;
  align-items: center;
}
</style>
