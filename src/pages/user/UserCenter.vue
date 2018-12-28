<template>
  <div class="module-container">
    <div class="user-center-bar">
      <div class="person-info">
        <label><img
            :src="headPhoto"
            src="../../assets/img/user/headImg.png"
          ></label>
        <span>{{userNameReg}}</span>
        <a
          href="javascript:;"
          @click="goToSetting()"
        >
          <i class="sprite s-icon-setting"></i>
        </a>
      </div>
      <div class="person-assets">
        <div class="info">
          <ul>
            <li
              v-for="(value,key) in assets"
              :key="key"
            >
              <div class="content">
                <label class="t">
                  <span>{{value.name}}</span>
                  <em>(元)</em>
                  <a
                    href="javascript:;"
                    v-if="value.look"
                    @click="showAssets($event)"
                    :class="{'unlook':!uAssetsLook}"
                  >
                    <i class="sprite s-icon-look"></i>
                  </a>
                </label>
                <label class="c">{{value.money | fMoney}}</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="handle">
          <a href="javascript:;">提现</a>
          <a href="javascript:;">充值</a>
        </div>
      </div>
      <div class="person-card">
        <div class="box-list-arrow">
          <ul>
            <li>
              <a href="#/usercenter/s/banks">
                <label><i class="sprite s-icon-bank"></i></label>
                <span>我的银行卡</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
            <li>
              <a href="#/usercenter/s/capital">
                <label><i class="sprite s-icon-capital"></i></label>
                <span>资金管理</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
            <li>
              <a href="#/usercenter/s/trades">
                <label><i class="sprite s-icon-trade"></i></label>
                <span>交易记录</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
            <li>
              <a href="#/usercenter/s/appraisal">
                <label><i class="sprite s-icon-appraisal"></i></label>
                <span>风险评测</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="person-card">
        <div class="box-list-arrow">
          <ul>
            <li>
              <a href="#/usercenter/s/activity">
                <label><i class="sprite s-icon-activity"></i></label>
                <span>活动管理</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
            <li>
              <a href="#/usercenter/s/notice">
                <label><i class="sprite s-icon-message"></i></label>
                <span>消息管理</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
            <li>
              <a href="#/usercenter/s/password">
                <label><i class="sprite s-icon-password"></i></label>
                <span>密码管理</span>
                <em><i class="sprite s-icon-arrow"></i></em>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <fb-footer></fb-footer>
  </div>
</template>

<script>
  import $G from "@/assets/js/global";

  export default {
    name: "usercenter",
    data() {
      return {
        headPhoto: "",
        userName: "17723558969",
        uAssetsLook: !!localStorage.getItem("uAssetsLook")
          ? JSON.parse(localStorage.getItem("uAssetsLook"))
          : true,
        assets: [
          {
            name: "总资产",
            money: "2000000",
            look: true
          },
          { name: "我的余额", money: "100000" },
          { name: "累积收益", money: "52000" },
          { name: "待收收益", money: "1314" }
        ],
        assetsMoney: 0
      };
    },
    mounted() {
      this.assetsMoney = this.assets[0].money;
      this.assets[0].money = this.uAssetsLook ? this.assets[0].money : "******";
    },
    filters: {
      fMoney: function(value) {
        return value.split("*").length <= 1
          ? $G.moneyFormat($G.count.div(value, 100))
          : value;
      }
    },
    computed: {
      userNameReg: function() {
        let reg = /^(\d{3})\d{4}(\d{4})$/;
        return this.userName.replace(reg, "$1****$2");
      }
    },
    methods: {
      goToSetting: function() {
        this.$router.push("/settings");
      },
      showAssets: function(event) {
        //本地模拟
        let el = event.currentTarget;
        let $this = this.$(el);
        let $text = $this.parents(".content").find(".c");
        let mFilter = this.$options.filters["fMoney"];
        $this.toggleClass("unlook");

        if ($this.hasClass("unlook")) {
          $text.text("******");
          localStorage.setItem("uAssetsLook", false);
        } else {
          $text.text(mFilter(this.assetsMoney));
          localStorage.setItem("uAssetsLook", true);
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../../assets/less/user.less";
</style>