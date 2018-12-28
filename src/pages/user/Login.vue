<template>
  <div class="user-bar">
    <el-tabs class="login-tab" v-model="activeName">
      <el-tab-pane label="密码登陆" name="password">
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
        </div>

        <div class="user-handle">
          <label class="btn">
            <el-button class="user-btn" @click="login('password')">登陆</el-button>
          </label>
          <label class="tips">
            <a href="javascript:;" @click="jump()">马上注册</a>
            <span>|</span>
            <a href="javascript:;" @click="jump()">忘记密码</a>
          </label>
        </div>
      </el-tab-pane>

      <el-tab-pane label="短信登陆" name="verCode">
        <div class="user-form">
          <div class="item">
            <span>手机号：</span>
            <div class="input">
              <el-input type="tel" placeholder="请输入手机号" v-model="mobile" maxlength="11" clearable>
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
          <label class="btn">
            <el-button class="user-btn" @click="login('verCode')">登陆</el-button>
          </label>
          <label class="tips">
            <a href="javascript:;" @click="jump()">马上注册</a>
            <span>|</span>
            <a href="javascript:;" @click="forget()">忘记密码</a>
          </label>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        mobile: "",
        password: "",
        verCode: "",
        isMobile: false,
        activeName: "password"
      };
    },
    methods: {
      jump() {
        this.$router.push("/register");
      },
      getVerCode() {},
      forget() {
        this.$router.push({
          name: "forgetLogin",
          params: { mobile: this.userMobile }
        });
      }
    }
  };
</script>
