<template>
  <div class="container">
    <div class="intro">
      <img src="../../assets/imgs/logo.png" class="logo" alt="logo"/>
      <span style="margin-left: 1vw;font-size: 1vw;">
        <i>你好，欢迎来到学畅行，还没账号？</i>
        <router-link to="/register" style="text-decoration: none;color: #ff4040;">点击注册</router-link>
      </span>
    </div>
    <div class="login-container">
      <div class="login-form">
        <div class="login-title"><i>学畅行</i></div>
        <el-form
            :model="userInfo"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="10vw"
            class="demo-ruleForm">
          <el-form-item label="账号" prop="uname">
            <el-input
                type="text"
                ref="uNameInput"
                v-model="userInfo.uname"
                placeholder="用户ID/邮箱"
                autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input
                type="password"
                ref="passwordInput"
                v-model="userInfo.passWord"
                placeholder="密码"
                autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="intro"></div>
  </div>
</template>
<script>
export default {
  data() {
    const validateUname = (rule, value, callback) => {
      if (!value || value.trim().length <= 0) {
        callback(new Error('账号不能为空！！'));
      } else {
        callback();
      }
    };

    const validatePassWord = (rule, value, callback) => {
      if (!value || value.trim().length < 6) {
        callback(new Error('密码格式有误！！'));
      } else {
        callback();
      }
    };

    return {
      userInfo: {
        uname: '',
        passWord: '',
      },
      rules: {
        uname: [
          {validator: validateUname, trigger: 'blur'}
        ],
        passWord: [
          {validator: validatePassWord, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm() {

    },
    /**
     * 重置表单内容
     */
    resetForm() {
      /*this.userInfo.uname = ''
      this.userInfo.passWord = ''
      // 解决 输入框 autocomplete 不为 off 问题
      this.$refs.uNameInput.$el.querySelector('input').setAttribute('autocomplete', 'off');
      this.$refs.passwordInput.$el.querySelector('input').setAttribute('autocomplete', 'off');
      */
      this.$router.go(0)
    }
  }
}
</script>
<style scoped>
.container {
  z-index: -1;
}
.intro {
  align-items: center;
  width: 100%;
  height: 9vh;
}
.logo {
  vertical-align: middle; /* 垂直对齐方式 */
  max-height: 9vh;
  object-fit: contain; /* 图片保持原始宽高比，且不会超出容器 */
}
.login-container {
  display: flex;
  align-items: center; /* 垂直方向居中 */
  justify-content: flex-end; /* 水平方向靠左 */
  width: 100%;
  height: 80vh;
  background-image: url('src/assets/imgs/background-logo.png');
  background-size: cover; /* 确保背景图片覆盖整个 div */
  background-position: center; /* 将背景图片居中 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
.login-form {
  margin-right: 5vw;
  padding: 3vh 0;
  text-align: center;
  align-items: center;
  background-color: #fff;
  width:35vw;
}
.login-title {
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 2vh;
}
.el-input {
  width: 18vw;
}
</style>
