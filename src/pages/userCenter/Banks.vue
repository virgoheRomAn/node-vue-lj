<template>
  <div class="banks-bar">
    <div class="banks-card" v-if="hasCard">
      <div class="item" :class="cardClass" @click="cardDetails()">
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
    <div class="add-card" v-else>
      <a href="javascript:;" @click="addCard()">
        <i class="sprite s-icon-add-bank"></i>
        <span>添加银行卡</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banks",
    data() {
      return {
        hasCard: true,
        cardClass: "card-zs",
        cardInfo: {
          name: "招商银行储存卡",
          icon: "s-icon-bank-zs",
          cardNo: "6228481234567891234",
          singleDay: "5000",
          singleStroke: "5000"
        }
      };
    },
    computed: {
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
    methods: {
      cardDetails: function() {
        this.$router.push({
          name: "changeBank",
          params: { cardNo: this.cardInfo.cardNo }
        });
      },
      addCard: function() {
        this.$router.push({
          path: "banks/add"
        });
      }
    }
  };
</script>

<style>
</style>
