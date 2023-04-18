<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="dark" />
      <div class="login-left">
        <img src="@/assets/images/logo_left.svg" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/sys_logo.svg" alt="" />
          <h2 class="logo-text">GIS-Vue-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import SwitchDark from "@/components/SwitchDark/index.vue"
import LoginForm from "./components/LoginForm.vue"
</script>

<style scoped lang="scss">
.login-container {
  height: 100%;
  min-height: 550px;
  background-color: #eeeeee;
  background-image: url("@/assets/images/login_bg.svg");
  background-size: 100% 100%;
  background-size: cover;
  .login-box {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96%;
    height: 94%;
    padding: 0 50px;
    background-color: hsl(0deg 0% 100% / 80%);
    border-radius: 10px;
    .dark {
      position: absolute;
      top: 13px;
      right: 18px;
    }
    .login-left {
      width: 800px;
      margin: 0 10px 0 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-form {
      width: 420px;
      padding: 50px 40px 45px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
      .login-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;
        .login-icon {
          width: 60px;
          height: 52px;
        }
        .logo-text {
          padding: 0 0 0 25px;
          margin: 0;
          font-size: 42px;
          font-weight: bold;
          color: #34495e;
          white-space: nowrap;
        }
      }
    }
  }
}
@media screen and (max-width: 1250px) {
  .login-left {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .login-form {
    width: 97% !important;
  }
}
</style>
