<template>
  <div class="login-wrap vh100">
      <vue-particles
      class="particles-wrap vh100"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <a-form
      class="login-form"
      name="login"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item required has-feedback label="用户名" name="name">
        <a-input v-model="ruleForm.name" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item required has-feedback label="密码" name="password">
        <a-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const { router } = useRouter;

    /* 定义数据 Start*/
    const state = reactive({
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ validator: ctx.validatePass, trigger: "blur" }],
        password: [{ validator: ctx.validatePass, trigger: "blur" }],
      },
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
    });
    /* 定义数据 End*/

    /* 方法 Start*/
    const handleFinish = function (params) {
        router.push('/')
    };
    const handleFinishFailed = function (params) {};
    const validatePass = async (rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password");
      } else {
        if (ctx.ruleForm.password !== "") {
          ctx.$refs.ruleForm.validateField("password");
        }
        return Promise.resolve();
      }
    };
    /* 方法 End*/

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="less">
.row-col-center() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-wrap {
  position: relative;
  background: #999999;
  .login-form {
    .row-col-center();
    width: 50%;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
</style>
