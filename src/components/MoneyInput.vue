<template>
  <div class="money-input">
    <label class="continer">
      <em>{{icon}}</em>
      <input ref="input" type="text" v-model="money" placeholder="请输入金额">
      <!-- <span>
        <input ref="input" type="text" v-model="money" placeholder="请输入金额">
        <b>{{moneyStr}}</b>
      </span> -->
      <i class="sprite s-icon-close" v-if="isClose" @click.self="clear()"></i>
    </label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "money",
    props: {
      icon: {
        type: String,
        default: "￥"
      },
      isClose: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        money: ""
      };
    },
    methods: {
      clear() {
        this.money = "";
        this.$refs.input.focus();
      }
    },
    computed: {
      // moneyStr: {
      //   set: function(val) {
      //     if (val.indexOf(",") > 0 || val.indexOf(".") > 0) {
      //       this.money = val.replace(/[,.]/gi, "");
      //     } else {
      //       this.money = val;
      //     }
      //   },
      //   get: function() {
      //     if (!isNaN(this.money)) {
      //       return this.money && this.$G.moneyFormat(this.money, 0);
      //     } else {
      //       return this.money && this.money;
      //     }
      //   }
      // }
      moneyStr: function() {
        return this.money && this.$G.moneyFormat(this.money, 2);
      }
    }
  };
</script>

<style lang="less">
  @import url("../assets/less/_variable.less");
  .money-input {
    position: relative;
    > label.continer {
      position: relative;
      display: block;
      width: 100%;
      padding: 0 20px 10px;
      border-bottom: 1px solid @bd;
      min-height: 42px;
      em {
        position: absolute;
        top: 7px;
        left: 0;
        width: 20px;
        color: @light;
        font-size: @fs-19;
      }
      span {
        position: relative;
        display: block;
        width: 100%;
        height: 32px;
        color: @main;
        font-size: 27px;
        b {
          font-weight: normal;
        }
        input {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
      input {
        display: block;
        width: 100%;
        border: 0 none;
        background: transparent;
        padding: 0 2px;
        color: @main;
        font-size: 27px;
        &::placeholder {
          font-size: @fs-16;
        }
      }
      i {
        position: absolute;
        bottom: 12px;
        right: 0;
        z-index: 100;
      }
    }
    > label.tips {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      > span {
        color: @g-999;
        em {
          color: @main;
        }
      }
    }
  }
</style>
