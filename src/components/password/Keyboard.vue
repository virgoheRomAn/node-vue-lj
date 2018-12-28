<template>
  <transition enter-to-class="active" enter-active-class="animated-bottom-enter" leave-active-class="animated-bottom">
    <div class="keybord-bar" :class="{blank:blank}" v-if="show" @click.self="hideKeyBoard()">
      <div class="container">
        <ul>
          <li v-for="(item,key) in keys" :key="key">
            <span @click="keyBtn($event)">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "vuex";
  export default {
    name: "keyboard",
    props: {
      blank: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        index: 0,
        keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "清空", "0", "删除"]
      };
    },
    computed: {
      show() {
        return this.$store.getters.isKeyBoardShow;
      },
      ...mapState({
        payPassword: state => state.payPassword
      })
    },
    methods: {
      ...mapActions(["showKeyBoard", "hideKeyBoard"]),
      keyBtn(e) {
        let ele = e.currentTarget;
        let $this = this.$(ele);
        let text = $this.text();
        let index = $this.parents("li").index();
        let psd = "";
        if (index !== 9 && index !== 11) {
          if (this.index <= 5) {
            this.$store.dispatch("addPayPasswore", text);
            if (this.index === 5) {
              this.payPassword.map(item => {
                psd += item;
              });
              this.$store.dispatch("hideKeyBoard");
            }
            this.index++;
          }
        } else if (index === 9) {
          this.index = 0;
          this.$store.dispatch("delPayPassword", {
            index: 0,
            number: this.payPassword.length
          });
        } else if (index === 11) {
          this.index--;
          this.$store.dispatch("delPayPassword", {
            index: this.index,
            number: 1
          });
        }
      }
    }
  };
</script>

<style lang="less">
  @import url("../../assets/less/_variable");
  .keybord-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 8888;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    &.blank {
      background: rgba(0, 0, 0, 0.5);
    }
    .container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: @white;
      ul {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        border-top: 1px solid @bd;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33.33%;
          height: 60px;
          background: @white;
          font-size: 24px;
          border-right: 1px solid @bd;
          border-bottom: 1px solid @bd;
          &:active {
            background: #dfe4ea;
          }

          &:nth-child(3n) {
            border-right: 0 none;
          }
          &:nth-last-child(1),
          &:nth-last-child(2),
          &:nth-last-child(3) {
            border-bottom: 0 none;
          }

          &:nth-last-child(1),
          &:nth-last-child(3) {
            background: #dfe4ea;
            font-size: 18px;
            &:active {
              background: @white;
            }
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
</style>
