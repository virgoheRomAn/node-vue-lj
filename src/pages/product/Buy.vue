<template>
  <div class="buy-bar">
    <div class="information-box">
      <div class="box-list-title">
        <h2 class="title">购买金额</h2>
        <div class="container">
          <money-input ref="moneyInput">
            <label class="tips">
              <span>当前余额<em>{{balanceStr}}</em>元</span>
              <span>可使用余额<em>{{balanceUseStr}}</em>元</span>
            </label>
          </money-input>
        </div>
      </div>
      <div class="box-list-title pt-10">
        <h2 class="title">红包及优惠券</h2>
        <div class="container">
          <div class="box-list-arrow">
            <ul>
              <li>
                <span>1000元奖金红包</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="handle-box">
      <label class="agreement">
        <el-checkbox v-model="agreement">
          <span>已阅读并同意<a class="agreement-word" href="javascript:;" @click="showAgreement">《XXXXXX协议》</a></span>
        </el-checkbox>
      </label>
      <el-button class="user-btn" @click="buy()">立即购买</el-button>
      <el-button class="user-btn line" @click="recharge()">充值</el-button>
    </div>

    <div class="warning-box">
      <label>温情提示</label>
      <span>1、最多提现金额为1000元，不足1000元请一次性全部提现。 </span>
      <span>2、提现金额最迟T+1个工作日到账。</span>
      <span>3、本系统已接入了天津交易所存管，对于超过5,000元的 提现交易，建议您拆分多笔操作，或者在工作日找8:00-晚 17:00操作完成，感谢您的理解与支持。</span>
    </div>
  </div>
</template>

<script>
  import MoneyInput from "components/MoneyInput";
  export default {
    name: "buy",
    data() {
      return {
        balance: "50000",
        balanceUse: "45000",
        agreement: false
      };
    },
    components: {
      MoneyInput
    },
    computed: {
      balanceStr: function() {
        return this.$G.moneyFormat(this.balance);
      },
      balanceUseStr: function() {
        return this.$G.moneyFormat(this.balanceUse);
      }
    },
    methods: {
      buy() {
        let m = this.$refs.moneyInput;
        console.log(m.money);
        if(!this.agreement){
           this.$jBox.error("请勾选协议");
          return false;
        }
        if (isNaN(m.money)) {
          this.$jBox.error("请输入数字金额");
          return false;
        }
        if (m.money === "") {
          this.$jBox.error("输入的投资金额");
          return false;
        }
        if (parseFloat(m.money) > parseFloat(this.balanceUse)) {
          this.$jBox.error("输入的金额大于可用余额");
          return false;
        }
      },
      recharge() {},
      showAgreement() {}
    }
  };
</script>

<style lang="less" scoped>
  @import url("../../assets/less/_variable.less");
  .buy-bar {
    padding: 0 20px;
    .money-input {
      margin-top: 5px;
    }
    .box-list-arrow {
      padding: 0;
      ul > li {
        padding: 10px 0 10px;
        border-bottom: 1px solid @bd;
        span {
          color: @main;
          font-size: @fs-14;
        }
      }
    }
  }
</style>
