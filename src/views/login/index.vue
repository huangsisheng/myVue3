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
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-item has-feedback label="用户名" name="name">
        <a-input v-model:value="ruleForm.name" type="text" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="密码" name="password">
        <a-input
          v-model:value="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" @click="onSubmit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          this.$router.push("home");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
/* 

setup() {
    const { ctx } = getCurrentInstance();
    const { router } = useRouter;
    const state = reactive({
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: "blur" }],
      },
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
    });

    const onSubmit = function() {
        console.log(ctx)
      ctx.$refs.ruleForm
        .validate()
        .then(() => {
          router.push("home");
        })
        .catch(error => {
          console.log('error', error);
        });
    }

    return {
      ...toRefs(state),
      onSubmit
    };
  },
*/
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
    width: 40%;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
</style>
