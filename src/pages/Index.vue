<template>
  <div class="module-container">
    <div class="index-bar">
      <div class="banner-bar">
        <div class="swiper-container" id="banner">
          <div class="swiper-slide swiper-wrapper">
            <div class="swiper-slide">
              <a href="##">
                <img class="swiper-lazy" src="../assets/img/tjs-banner1.png">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="##">
                <img class="swiper-lazy" src="../assets/img/tjs-banner2.png">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="##">
                <img class="swiper-lazy" src="../assets/img/tjs-banner3.jpg">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="notice-bar">
        <label class="icon">
          <i class="sprite s-icon-notice"></i>
        </label>
        <ul class="list" id="slideBox">
          <li v-for="item in noticeList">
            <a href="javascript:;" @click="noticeLink(item.url)">{{item.title}}</a>
          </li>
        </ul>
        <a class="more" href="javascript:;">更多</a>
      </div>
      <div class="tips-bar">
        <div class="box-list-flex">
          <div class="item">
            <div class="content">
              <label class="logo"><img src="../assets/img/tips/index-img1.png" /></label>
              <label class="name">
                <span>天津金融交易所</span>
                <em><i></i>挂牌<i></i></em>
              </label>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <label class="logo"><img src="../assets/img/tips/index-img2.png" /></label>
              <label class="name">
                <span>协信控股集团</span>
                <em><i></i>保证承兑<i></i></em>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list hot-product">
        <div class="box-list-title">
          <h2 class="title">热门产品展示</h2>
          <div class="container">
            <list-item v-for="(product,key) in productList" :data="product.data" :key="key" :class="{'sale-out':product.data.status==='2'}">
            </list-item>
          </div>
        </div>
      </div>
    </div>

    <fb-footer></fb-footer>
  </div>
</template>

<script>
  import Item from "@/components/ProductItem";
  export default {
    name: "index",
    components: {
      "list-item": Item
    },
    data() {
      return {
        noticeList: [
          { title: "关于农业银行维护统治1", url: "http://www.baidu.com" },
          { title: "关于农业银行维护统治2", url: "http://www.baidu.com" },
          { title: "关于农业银行维护统治3", url: "http://www.baidu.com" },
          { title: "关于农业银行维护统治4", url: "http://www.baidu.com" }
        ],

        productList: [
          {
            code: "1",
            data: {
              name: "“富融通保”2018年第001期收益分11111",
              rate: "8.50",
              day: "365",
              now: "105000000",
              amount: "500000000",
              money: "1000000",
              link: "",
              status: "1",
              repayType: "一次性还本付息",
              explainList: ["保证担保", "回购承诺"]
            }
          },
          {
            code: "2",
            data: {
              name: "“富融通保”2018年第001期收益分2222",
              rate: "9.50",
              day: "3650",
              now: "90000000",
              amount: "700000000",
              money: "5000000",
              link: "",
              status: "2",
              repayType: "一次性还本付息",
              explainList: ["保证担保", "回购承诺"]
            }
          }
        ]
      };
    },
    methods: {
      noticeLink(url) {
        console.log(url);
      }
    },
    mounted() {
      //banner
      let banner = new this.$swiper("#banner", {
        autoplay: {
          delay: 4000
        },
        pagination: {
          el: ".swiper-pagination"
        },
        lazy: {
          loadPrevNext: true
        },
        loop: true,
        observer: true,
        observeParents: true
      });
      //slide
      let slideBox = this.$G.slideBox("#slideBox");
    }
  };
</script>
