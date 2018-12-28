<template>
  <div class="user-bar">
    <div class="user-form">
      <h2 class="title"><span class="has-line">忘记登陆密码</span></h2>
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
      <div class="item">
        <span>新密码：</span>
        <div class="input">
          <el-input type="password" placeholder="请输入6-20位数字和字母组合的密码" v-model="newPsd" clearable>
          </el-input>
        </div>
      </div>
      <div class="item">
        <span>确认密码：</span>
        <div class="input">
          <el-input type="password" placeholder="请再次确认密码" v-model="newAgainPsd" clearable>
          </el-input>
        </div>
      </div>
    </div>
    <div class="user-handle">
      <label class="btn">
        <el-button class="user-btn" @click="sure()">提交</el-button>
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
        newPsd: "",
        newAgainPsd: "",
        verCode: "",
        verText: "获取验证码"
      };
    },
    created() {
      this.userMobile = this.$route.params.mobile;
    },
    methods: {
      getVerCode() {},
      sure() {}
    }
  };
</script>


