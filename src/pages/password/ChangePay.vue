<template>
  <div class="user-bar">
    <div class="user-form">
      <h2 class="title"><span class="has-line">支付密码修改</span></h2>
      <div class="item">
        <span>手机号：</span>
        <div class="input">
          <el-input class="tc-333" type="text" v-model="userMobile" disabled>
          </el-input>
        </div>
      </div>
      <div class="item">
        <span>验证码</span>
        <div class="input">
          <el-input type="text" placeholder="请输入手机验证码" v-model="verCode" minlength="6" maxlength="20" clearable>
          </el-input>
        </div>
        <a class="ver-code" :class="{'disabled': !isMobile}" href="javascript:;" @click="getVerCode">{{verText}}</a>
      </div>
    </div>
    <div class="user-handle">
      <label class="btn">
        <el-button class="user-btn" @click="nextStep()">下一步</el-button>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changePay",
    data() {
      return {
        userMobile: "",
        isMobile: true,
        verCode: "",
        verText: "获取验证码"
      };
    },
    created() {
      this.userMobile = this.$route.params.mobile;
    },
    methods: {
      getVerCode() {},
      nextStep() {
        this.$router.push({
          name: "settingPay",
          params: { mobile: this.userMobile }
        });
      }
    }
  };
</script>


