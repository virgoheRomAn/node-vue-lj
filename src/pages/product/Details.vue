<template>
  <div class="module-container">
    <div class="product-details-bar">
      <div class="details-box">
        <div class="card-box">
          <label class="name">{{product_name}}</label>
          <label class="rate">
            <span>{{rate}}<em>%</em></span>
            <span>预期年化收益率</span>
          </label>
          <div class="fund">
            <label>
              <span>起投金额(元)</span>
              <em>{{start_amountStr}}</em>
            </label>
            <label>
              <span>封闭期限(天)</span>
              <em>{{end_day}}</em>
            </label>
          </div>
        </div>
        <div class="progress-box">
          <label class="line">
            <span :style="{width:ratio}"></span>
          </label>
          <label class="text">
            <span>{{ratio}}</span>
            <span>{{total_amountStr}}</span>
          </label>
        </div>
        <div class="day-line-box">
          <label class="text start">
            <span>今日投资</span>
            <em>2018.07.11</em>
          </label>
          <label class="day-line"></label>
          <label class="text mid">
            <span>起息日</span>
            <em>2018.07.13</em>
          </label>
          <label class="day-line"></label>
          <label class="text end">
            <span>到期日</span>
            <em>2019.07.11</em>
          </label>
        </div>
        <div class="information-box">
          <div class="box-list-title">
            <h2 class="title">热门产品展示</h2>
            <div class="container">
              <div class="box-list-arrow item">
                <ul>
                  <li>
                    <label>产品名称：</label>
                    <span>{{product_name}}</span>
                  </li>
                  <li>
                    <label>产品规模：</label>
                    <span>{{total_amountFormat}}元</span>
                  </li>
                  <li>
                    <label>还款方式：</label>
                    <span>{{repayment_type}}</span>
                  </li>
                  <li>
                    <label>风险类型：</label>
                    <span>{{risk_type}}</span>
                  </li>
                  <li>
                    <label>征信措施：</label>
                    <span>{{trustment_type}}</span>
                  </li>
                  <li>
                    <label>备注：</label>
                    <span>{{remark}}</span>
                  </li>
                  <li>
                    <a href="javascript:;" @click="investSpecification()">
                      <span>产品说明书</span>
                      <em>
                        <i class="sprite s-icon-arrow"></i>
                      </em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="box-list-title">
            <h2 class="title">收益说明</h2>
            <div class="container">
              <div class="box-list-arrow item">
                <ul>
                  <li>
                    <span>{{income_info}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="box-list-title">
            <h2 class="title">投资记录</h2>
            <div class="container">
              <div class="box-list-arrow item">
                <ul>
                  <li>
                    <a href="javascript:;" @click="investmentList()">
                      <span>投资记录</span>
                      <em>
                        <i class="sprite s-icon-arrow"></i>
                      </em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-btn-box">
      <el-button class="user-btn" @click="invest()">立即投资</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productDetails",
    data() {
      return {
        productCode: "",
        product_name: "“富荣尊享”第023期收益分享合约产品",
        rate: "8.50",
        end_day: "365",
        start_amount: "1000000",
        new_amount: "75000000",
        total_amount: "150000000",
        repayment_type: "一次性还本付息",
        risk_type: "中低风险",
        trustment_type: "金融机构远期收购资产",
        remark: "此产品适用于经济人",
        income_info:
          "销售结束后的第一个交易日开始产生收益。预期收益率 详情见产品销售公告，实际收益以到期后兑换值为准。 所述预测结果仅供客户参考，不够成公司对客户承诺。"
      };
    },
    created() {
      this.productCode = this.$route.params.code;
    },
    computed: {
      start_amountStr: function() {
        let amount =
          this.start_amount &&
          this.$G.moneyFormat(this.$G.count.div(this.start_amount, 100), 0);

        return amount;
      },
      ratio: function() {
        return (
          this.new_amount &&
          this.$G.count
            .mul(this.$G.count.div(this.new_amount, this.total_amount), 100)
            .toFixed(2) + "%"
        );
      },
      total_amountStr: function() {
        let amount =
          this.total_amount && this.$G.count.div(this.total_amount, 100);
        if (amount >= 10000) {
          amount = this.total_amount && this.$G.count.div(amount, 10000) + "万元";
        } else {
          amount = amount + "元";
        }
        return amount;
      },
      total_amountFormat: function() {
        let amount =
          this.start_amount &&
          this.$G.moneyFormat(this.$G.count.div(this.total_amount, 100), 0);
        return amount;
      }
    },
    methods: {
      invest() {
        this.$router.push({
          name: "buy",
          params: { code: this.productCode },
          query: { title: this.product_name }
        });
      },
      investSpecification() {},
      investmentList() {}
    }
    // watch:{
    //   '$route':'porductCode'
    // }
  };
</script>
