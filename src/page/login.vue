<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <h4 v-if="error">{{error}}</h4>
        <p>
          <span>账号登陆</span>
        </p>
        <el-input
          :class="{error: error && !userName}"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
          v-model="userName"
        ></el-input>
        <el-input
          :class="{error: error && !password}"
          placeholder="密码"
          type="password"
          prefix-icon="password"
          v-model="password"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a href="/" class="oauth__link oauth__link--qq"></a>
            <a href="/" class="oauth__link oauth__link--weibo"></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a>
          </li>
          <li>
            <a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a>
          </li>
          <li>
            <a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a>
          </li>
          <li>
            <a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a>
          </li>
          <li class="last">
            <a href="http://meituan.com/mobile">美团手机版</a>
          </li>
        </ul>
      </div>
      
        <p>
          ©
          <span>2019</span>
          美团网团购
          meituan.com
          京ICP证070791号
          京公网安备11010502025545号
        </p>
      
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      console.log(this.userName, this.password);
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      api
        .login({
          params: {
            userName: this.userName,
            password: this.password
          }
        })
        .then(res => {
          if (res.data.status == "succses") {
            this.$router.push({ name: "index" });
            this.$store.commit('setUserNmae',this.userName);
          } else {
            this.error = res.data.msg;
          }
        });
    }
  }
};
</script>
<style lang="sass">
@import "@/assets/css/login/index.scss"
</style>
