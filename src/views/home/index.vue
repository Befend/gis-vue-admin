<script setup lang="ts" name="home"></script>

<template>
  <div class="home card">
    <div class="home-left">
      <img class="img img-left" src="@/assets/images/login_left.png" alt="welcome" />
      <img class="img img-left" src="@/assets/images/login_left01.png" alt="welcome" />
    </div>
    <img class="home-center" src="@/assets/images/welcome.png" alt="welcome" />
    <div class="home-right">
      <img class="img img-right" src="@/assets/images/login_right01.png" alt="welcome" />
      <img class="img img-right" src="@/assets/images/login_right.png" alt="welcome" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/login_bg01.svg");
  background-size: 100% 100%;
  background-size: cover;
  .home-left,
  .home-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    .img {
      width: 50%;
    }
  }
  .home-center {
    width: 40%;
    max-width: 1200px;
    margin-bottom: 20px;
  }
}
</style>
