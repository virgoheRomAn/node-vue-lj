<template>
  <div class="banks-bar pad-all-0">
    <div class="user-bar">
      <div class="user-form">
        <h2 class="title"><span>请填写身份信息</span></h2>
        <div class="item">
          <span>姓名</span>
          <div class="input">
            <el-input type="text" placeholder="请输入真实姓名" v-model="userName" clearable>
            </el-input>
          </div>
        </div>
        <div class="item">
          <span>身份证号</span>
          <div class="input">
            <el-input type="text" placeholder="请输入身份证号" v-model="idNo" maxlength="18" clearable>
            </el-input>
          </div>
        </div>
      </div>

      <div class="user-form pt-10">
        <h2 class="title">
          <span>请填写银行卡</span>
          <label @click="lookBankInfo()">
            <i class="sprite s-icon-bank-info"></i>
            <em>支持的银行卡及充值限额</em>
          </label>
        </h2>
        <div class="item">
          <span>选择银行</span>
          <div class="input">
            <el-select v-model="bankName" clearable placeholder="请选择">
              <el-option v-for="item in bankList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="item">
          <span>单笔限额</span>
          <div class="input">
            <el-input type="text" value="1万元" v-model="singleStroke" disabled>
            </el-input>
          </div>
        </div>
        <div class="item">
          <span>单日限额</span>
          <div class="input">
            <el-input type="text" value="1万元" v-model="singleDay" disabled>
            </el-input>
          </div>
        </div>
        <div class="item">
          <span>借记卡号</span>
          <div class="input">
            <el-input type="text" placeholder="请输入借记卡号" v-model="bankCardNo" clearable>
            </el-input>
          </div>
        </div>
        <div class="item">
          <span>预留手机号</span>
          <div class="input">
            <el-input type="tel" placeholder="请输入预留手机号" v-model="mobile" maxlength="11" clearable>
            </el-input>
          </div>
        </div>
        <div class="item">
          <span>手机验证码</span>
          <div class="input">
            <el-input type="text" placeholder="请输入手机验证码" v-model="verCode" minlength="6" maxlength="20" clearable>
            </el-input>
          </div>
          <a class="ver-code" :class="{'disabled': !isMobile}" href="javascript:;" @click="getVerCode">获取验证码</a>
        </div>
      </div>
      <div class="user-handle">
        <label class="btn">
          <el-button class="user-btn" @click="addBank()">绑定</el-button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addBank",
    data() {
      return {
        userName: "",
        idNo: "",
        mobile: "",
        bankName: "",
        bankCardNo: "",
        verCode: "",
        singleStroke: "2万元",
        singleDay: "2万元",
        isMobile: false,
        bankList: [
          {
            value: "0",
            label: "中国银行"
          },
          {
            value: "1",
            label: "中国建设银行"
          },
          {
            value: "2",
            label: "中国工商银行"
          },
          {
            value: "3",
            label: "中国招商银行"
          },
          {
            value: "4",
            label: "中国农业银行"
          }
        ]
      };
    },
    methods: {
      getVerCode() {},
      lookBankInfo() {},
      addBank() {
        this.$router.push({
          name: "banks"
        });
      }
    }
  };
</script>

