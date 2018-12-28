<template>
  <div class="user-bar">
    <div class="user-form">
      <div class="item">
        <span>手机号：</span>
        <div class="input">
          <el-input type="tel" placeholder="请输入手机号" v-model="mobile" maxlength="11" clearable>
          </el-input>
        </div>
      </div>
      <div class="item">
        <span>密码：</span>
        <div class="input">
          <el-input type="password" placeholder="输入6-20位数字和字母组合的密码" v-model="password" minlength="6" maxlength="20"
            clearable>
          </el-input>
        </div>
      </div>
      <div class="item">
        <span>确认密码：</span>
        <div class="input">
          <el-input type="password" placeholder="请再次输入密码" v-model="again" minlength="6" maxlength="20" clearable>
          </el-input>
        </div>
      </div>
      <div class="item">
        <span>验证码：</span>
        <div class="input">
          <el-input type="text" placeholder="请输入验证码" v-model="verCode" minlength="6" maxlength="20" clearable>
          </el-input>
        </div>
        <a class="ver-code" :class="{'disabled': !isMobile}" href="javascript:;" @click="getVerCode">获取验证码</a>
      </div>
    </div>
    <div class="user-handle">
      <label class="agreement">
        <el-checkbox v-model="agreement">
          <span>已阅读并同意<a href="javascript:;" @click="showAgreement">《用户服务协议》</a></span>
        </el-checkbox>
      </label>
      <label class="btn">
        <el-button class="user-btn">注册</el-button>
      </label>
      <label class="tips">
        <a href="javascript:;" @click="jump()">马上登录</a>
        <span>|</span>
        <a href="javascript:;" @click="jump()">忘记密码</a>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        mobile: "",
        password: "",
        again: "",
        verCode: "",
        agreement: true,
        isMobile: false
      };
    },
    methods: {
      getVerCode() {},
      showAgreement() {},
      jump() {
        this.$router.push("/login");
      }
    }
  };
</script>


