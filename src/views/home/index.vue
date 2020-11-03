<template>
    <div class="" v-if="$route.name === 'home'">
        首页
    </div>
    <router-view v-else></router-view>
</template>

<script>
export default {
    name:'home'
};
</script>

<style scoped lang="">

</style>
