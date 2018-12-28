<template>
  <div class="set-password-bar">
    <div class="container">
      <pay-input>
        <span slot="title">请输入支付密码</span>
      </pay-input>
      <key-board></key-board>
      <div class="set-button">
        <el-button class="user-btn" @click="ensure()">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import PayInput from "components/password/Input";
  import KeyBoard from "components/password/Keyboard";
  export default {
    name: "settingPay",
    components: {
      PayInput,
      KeyBoard
    },
    computed: {
      ...mapState({
        payPassword: state => state.payPassword
      })
    },
    methods: {
      ensure() {
        let psd = "";
        if (this.payPassword.length !== 6) {
          this.$jBox.error("请输入六位密码");
          return false;
        }
        this.payPassword.map(item => {
          psd += item;
        });
        this.$store.dispatch("delPayPassword", {
          index: 0,
          number: this.payPassword.length
        });
        console.log(psd);
        this.$router.push({ name: "password" });
      }
    }
  };
</script>
<style lang="less">
  .set-password-bar {
    padding: 40px 20px;
    .set-button {
      padding: 0 15px;
      margin-top: 30px;
    }
  }
</style>




