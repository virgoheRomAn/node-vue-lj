<template>
  <div
    :id="id"
    class="popup-box"
    @click.self="closePopup($event)"
  >
    <div
      class="container"
      :class="{[container]:true}"
      :style="popupStyle"
    >
      <div class="box">
        <div
          v-if="title"
          class="title"
          :class="titleCls"
        >
          <slot name="title"></slot>
          <label
            class="close"
            :class="colseCls"
            @click.self.stop="closePopup($event)"
          >
            <slot name="closeBtn"></slot>
          </label>
        </div>

        <div
          class="content"
          :class="contentCls"
        >
          <slot name="nav"></slot>
          <div class="cont">
            <slot name="cont"></slot>
          </div>
        </div>

        <div
          v-if="isFooter"
          class="footer"
          :class="footerCls"
        >
          <slot name="btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "popup-box",
    props: [
      "id",
      "isTitle",
      "isFooter",
      "popupStyle",
      "containerCls",
      "titleCls",
      "colseCls",
      "contentCls",
      "footerCls"
    ],
    data() {
      return {
        container: this.containerCls || "bottom animated-bottom",
        title: this.isTitle !== "false"
      };
    },
    created() {
      if (this.__timer__) {
        clearTimeout(this.__timer__);
      }
    },
    methods: {
      closePopup: function(event) {
        let ele = event.currentTarget;
        let $this = this.$(ele).hasClass("close")
          ? this.$(ele).parents(".popup-box")
          : this.$(ele);
        let $child = $this.children(".container");
        $child.removeClass("active");
        this.__timer__ = setTimeout(() => {
          $this.fadeOut();
        }, 300);
      },
      showPopup: function(id) {
        let $this = id ? this.$("#" + id) : this.$(".popup-box");
        let $child = $this.children(".container");
        $this.fadeIn(30, function() {
          $child.addClass("active");
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .popup-box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;

    .container {
      position: absolute;
      z-index: 100;
      background: #ffffff;
      width: 100%;
      &.fullscreen {
        width: 100%;
        height: 100%;
      }
      &.bottom {
        bottom: 0;
        left: 0;
      }
      &.left {
        top: 0;
        left: 0;
      }
      &.right {
        top: 0;
        right: 0;
      }
      &.left,
      &.right {
        width: 70%;
        height: 100%;
      }
      &.bottom {
        width: 100%;
        height: 60%;
      }

      > .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        > .title {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 50px;
          padding: 0 15px;
          > span {
            font-size: 16px;
            color: #333;
          }
          > .close {
            position: relative;
            top: -3px;
            display: block;
            width: 50px;
            height: 40px;
            background: url("../assets/img/icon/close.png") no-repeat center right;
            background-size: 15px 15px;
          }
        }

        > .content {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          overflow: hidden;
          .cont {
            display: block;
            width: 100%;
            flex: 1;
            overflow-x: hidden;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
</style>

