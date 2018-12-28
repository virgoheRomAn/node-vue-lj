<template>
  <div class="better-scroll-box">
    <div class="bscroll-container header footer">
      <header class="bscroll-header">
        <div class="tab-bar">
          <div class="tab-nav" name="tab">
            <div class="item" name="all" :class="{'active':activeName==='all'}"><label>全部产品</label></div>
            <div class="item" name="selled" :class="{'active':activeName==='selled'}"><label>已售罄</label></div>
            <div class="item disabled" name="tenement" :class="{'active':activeName==='tenement'}"><label>物业宝</label></div>
            <label class="tab-line"></label>
          </div>
        </div>
      </header>
      <scroll ref="scroll" class="wrapper" :data="productList" :pullUpLoad="pullUpLoadObj" @pullingUp="onPullingUp">
        <div class="product-bar">
          <div class="tab-bar">
            <div class="tab-content" name="tab">

              <div class="pane-item" :class="{'active':activeName==='all'}">
                <div class="product-list">
                  <div class="box-list-title">
                    <div class="container">
                      <item v-for="(product,key) in productList" :data="product" :key="key" :class="{'sale-out':product.status==='2'}">
                      </item>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pane-item" :class="{'active':activeName==='selled'}">
                <div class="product-list">
                  <div class="box-list-title">
                    <div class="container">
                      <item v-for="(product,key) in selledList" :data="product" :key="key" class="sale-out">
                      </item>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pane-item" :class="{'active':activeName==='tenement'}">
                <div class="data-list-none">暂无数据</div>
              </div>

            </div>
          </div>
        </div>
      </scroll>
      <fb-footer></fb-footer>
    </div>
  </div>

</template>

<script>
  import Item from "@/components/ProductItem";
  import Scroll from "@/components/Scroll";

  import data from "components/data/productData.json";

  export default {
    name: "product",
    components: {
      Item,
      Scroll
    },
    data() {
      return {
        activeName: "all",
        productList: data.data.productList,
        selledList: [],

        pullUpLoadObj: {
          threshold: 20
        }
      };
    },
    created() {
      this.productList.map(item => {
        if (item.status === "2") {
          this.selledList.push(item);
        }
      });
    },
    mounted() {
      let vue = this;
      vue.$G.tabBox(".tab-bar|tab", function(name) {
        if (name === "tenement") {
          vue.$jBox.confirm(`功能正在开发中<br>敬请期待`, {
            element: {
              width: "240px"
            },
            confirmType: 1,
            btn: { array: [{ text: "确定" }] }
          });
          return false;
        }
        // let loading = vue.$jBox.loading("加载中...");
        // vue.$jBox.close("", null, function() {
        //   vue.activeName = name;
        // });
        vue.activeName = name;
        vue.scrollTo(0, 0);
      });
    },
    methods: {
      scrollTo(x, y, t) {
        this.$refs.scroll.scrollTo(x, y, t, "swipeBounce");
      },
      onPullingUp() {
        let res = [
          {
            name: "【加载数据】投资产品001",
            rate: "9.50",
            day: "3650",
            now: "90000000",
            amount: "700000000",
            money: "5000000",
            link: "",
            status: "1",
            repayType: "一次性还本付息",
            explainList: ["保证担保", "回购承诺"]
          },
          {
            name: "【加载数据】投资产品002",
            rate: "9.50",
            day: "3650",
            now: "90000000",
            amount: "700000000",
            money: "5000000",
            link: "",
            status: "1",
            repayType: "一次性还本付息",
            explainList: ["保证担保", "回购承诺"]
          }
        ];
        setTimeout(() => {
          if (this.activeName === "all") {
            if (this.productList.length <= 6) {
              this.productList = this.productList.concat(res);
            } else {
              this.$refs.scroll.forceUpdate();
            }
          } else if (this.activeName === "selled") {
            if (this.selledList.length <= 6) {
              this.selledList = this.selledList.concat(res);
              //手动触发更新数据
              this.$refs.scroll.forceUpdate(true);
            } else {
              this.$refs.scroll.forceUpdate();
            }
          }
        }, 1500);
      },
      details: function() {
        this.$router.push({
          path: "/product/details",
          query: { sceneId: 1, sceneName: 2, add: 3 }
        });
      }
    }
  };
</script>
<style lang="less" scoped>
  .product-bar {
    display: block;
    padding: 15px 0 0 0;
    .product-list {
      padding: 0 15px;
    }
  }
</style>

