<template>
  <div class="password-bar">
    <div class="box-list-arrow">
      <ul>
        <li>
          <a href="javascript:;" @click="loginPsd()">
            <span>登陆密码修改</span>
            <em><i class="sprite s-icon-arrow"></i></em>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="payPsd()">
            <span>{{psdText}}</span>
            <em><i class="sprite s-icon-arrow"></i></em>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="forget()">
            <span>忘记登陆密码</span>
            <em><i class="sprite s-icon-arrow"></i></em>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "password",
    data() {
      return {
        hasPayPsd: true,
        userMobile: "",
        psdText: ""
      };
    },
    created() {
      //首先获取用户是否设置了支付密码，如果设置就修改，反之设置
      this.hasPayPsd = false;
      this.userMobile = "17723558969";
      this.psdText = this.hasPayPsd ? "修改支付密码" : "设置支付密码";
    },
    methods: {
      loginPsd: function() {
        this.$router.push({
          name: "changeLogin",
          params: { mobile: this.userMobile }
        });
      },
      payPsd: function() {
        if (this.hasPayPsd) {
          this.$router.push({
            name: "changePay",
            params: { mobile: this.userMobile }
          });
        } else {
          this.$router.push({
            name: "settingPay",
            params: { mobile: this.userMobile }
          });
        }
      },
      forget() {
        this.$router.push({
          name: "forgetLogin",
          params: { mobile: this.userMobile }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
</style>
