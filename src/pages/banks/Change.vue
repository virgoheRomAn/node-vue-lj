<template>
  <div class="banks-bar">
    <div class="banks-card">
      <div class="item" :class="cardClass">
        <label class="card-name">
          <i class="sprite" :class="cardInfo.icon"></i>
          <span>{{cardInfo.name}}</span>
        </label>
        <label class="card-no">
          <span class="dot"><i></i><i></i><i></i><i></i></span>
          <span class="dot"><i></i><i></i><i></i><i></i></span>
          <span class="dot"><i></i><i></i><i></i><i></i></span>
          <span>{{cardNo}}</span>
        </label>
        <label class="card-limit">
          <span>单笔限额{{singleStroke}}元</span>
          <em>|</em>
          <span>单日限额{{singleDay}}元</span>
        </label>
      </div>
    </div>
    <div class="information-box">
      <div class="box-list-title">
        <h2 class="title">身份/银行卡信息</h2>
        <div class="container">
          <div class="box-list-arrow title-width item">
            <ul>
              <li>
                <label>姓名</label>
                <span>{{cardInfo.userName}}</span>
              </li>
              <li>
                <label>身份证号</label>
                <span>{{idNo}}</span>
              </li>
              <li>
                <label>开户行</label>
                <span>{{cardInfo.bankName}}</span>
              </li>
              <li>
                <label>储蓄卡号</label>
                <span>{{bankCardNo}}</span>
              </li>
              <li>
                <label>银行预留手机号</label>
                <span>{{bankMobile}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="change-bank">
      <el-button class="user-btn" @click="changeBank()">更换银行卡</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "changeBank",
    data() {
      return {
        hasCard: true,
        cardClass: "card-zs",
        cardInfo: {
          userName: "徐继强",
          idCardNo: "152103199006181819",
          bankName: "招商银行",
          userMoblie: "17723558969",
          name: "招商银行储存卡",
          icon: "s-icon-bank-zs",
          cardNo: "",
          singleDay: "5000",
          singleStroke: "5000"
        }
      };
    },
    watch: {
      $route: "getCardInfo"
    },
    computed: {
      idNo: function() {
        let idCardNo = this.cardInfo.idCardNo;
        let before = idCardNo.substring(0, 5);
        let after = idCardNo.substring(idCardNo.length - 4, idCardNo.length);
        return before + "********" + after;
      },
      bankCardNo: function() {
        let cardNo = this.cardInfo.cardNo;
        let after =
          "**** **** **** " + cardNo.substring(cardNo.length - 4, cardNo.length);
        return after;
      },
      bankMobile: function() {
        let reg = /^(\d{3})\d{4}(\d{4})$/;
        return this.cardInfo.userMoblie.replace(reg, "$1****$2");
      },
      cardNo: function() {
        return this.cardInfo.cardNo.substring(
          this.cardInfo.cardNo.length - 4,
          this.cardInfo.cardNo.length
        );
      },
      singleStroke: function() {
        return this.$G.moneyFormat(this.cardInfo.singleStroke, 0);
      },
      singleDay: function() {
        return this.$G.moneyFormat(this.cardInfo.singleDay, 0);
      }
    },
    created() {
      this.getCardInfo();
    },
    methods: {
      getCardInfo() {
        //通过银行卡号读取银行卡信息
        this.cardInfo.cardNo = this.$route.params.cardNo;
        console.log(this.cardInfo.cardNo);
      },
      changeBank() {
        this.$router.push({
          path: "/usercenter/s/banks/add"
        });
      }
    }
  };
</script>

<style>
</style>
