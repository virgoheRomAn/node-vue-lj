<template>
  <div class="error-bar">
    <label>
      <img src="../assets/img/404.png" />
      <span>对不起，你访问的页面不存在</span>
      <a href="#/index">回到首页</a>
    </label>
  </div>
</template>

<script>
  export default {
    name: "ErrorPage"
  };
</script>

<style lang="less" scoped>
  @import url("../assets/less/_variable.less");
  .error-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      img {
        display: block;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }
      span {
        font-size: @fs-14;
        margin-bottom: 20px;
      }
      a {
        display: block;
        height: 36px;
        line-height: 36px;
        width: 100px;
        text-align: center;
        font-size: @fs-14;
        background: @btn;
        color: @white;
        border-radius: 3px;
      }
    }
  }
</style>
