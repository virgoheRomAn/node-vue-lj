<template>
  <div class="settings-bar">
    <div class="box-list-arrow-content">
      <ul>
        <li>
          <div class="content">
            <span>头像</span>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-error="handleAvatarError">
              <img v-if="headPhoto" :src="headPhoto">
              <img v-else src="../../assets/img/user/headImg.png">
            </el-upload>
            <em><i class="sprite s-icon-arrow"></i></em>
          </div>
        </li>
        <li v-for="(value,key) in personInfo" :key="key">
          <div class="content">
            <span>{{value.title}}</span>
            <label @click="setting(value.type,$event)">{{value.text}}</label>
            <em>
              <i v-if="!!value.type" class="sprite s-icon-arrow"></i>
            </em>
          </div>
        </li>
      </ul>
    </div>
    <div class="login-out">
      <el-button class="user-btn">退出登录</el-button>
    </div>

    <!--安装地址-->
    <div id="areaDisk" class="area-disk">
      <div id="areaAnimate" class="animated-disk animated-bottom">
        <h2 class="disk-title">选择安装地址<a class="close-disk sprite-icon" id="areaClose" href="javascript:;"></a></h2>

        <div class="disk-cont">
          <div class="disk-tab clearfix">
            <a class="disk-tab-option show-modal active" id="province" href="javascript:;"><span>请选择</span></a>
            <a class="disk-tab-option hide-modal" id="city" href="javascript:;"><span>请选择</span></a>
            <a class="disk-tab-option hide-modal" id="county" href="javascript:;"><span>请选择</span></a>
            <i id="animateLine" class="current-line"></i>
          </div>
          <div class="disk-tab-cont" id="areaCont">
            <div id="areaContainer" class="area-container"></div>
            <div id="areaLoading" class="disk-loading"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $checkArea from "assets/plugins/selectArea";
  export default {
    name: "settings",
    data() {
      return {
        headPhoto: "",
        personInfo: [
          { title: "昵称", text: "开发小强", type: "name" },
          { title: "手机号", text: "17723558969" },
          { title: "地区", text: "暂无", type: "area" },
          { title: "身份信息", text: "协信员工/业主/其他", type: "person" }
        ]
      };
    },
    methods: {
      setting(tag, event) {
        switch (tag) {
          case "name":
            this.$prompt("", "请输入昵称", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              inputPlaceholder: this.personInfo[0].text,
              inputValidator: function(value) {
                if (value === "" || value === null) {
                  return "昵称不能为空";
                } else if (value.length >= 20) {
                  return "昵称不能超过20个字符";
                }
              }
            })
              .then(({ value }) => {
                this.personInfo[0].text = value;
              })
              .catch(() => {});
            break;
          case "area":
            let _this = event.currentTarget;

            this.$ajax
              .get("/static/city.json")
              .then(res => {
                let data = res.data;
                var cityData = data.data;
                this.province = cityData.province;
                this.city = cityData.city;

                //初始化地址选择插件
                let checkAddress = $checkArea.init({
                  areaData: {
                    province: cityData.province,
                    city: cityData.city,
                    county: cityData.area
                  }
                });
                checkAddress.selectCity({
                  clickTarget: _this,
                  finishFunction: (data, resultHtml) => {
                    this.$(_this).html(resultHtml);
                  }
                });
              })
              .catch(err => {
                console.log(err);
              });
            break;
          case "person":
            this.$router.push("/personApprove");
            break;
        }
      },
      handleAvatarError(res, file) {
        let vue = this;
        vue.$jBox.close(vue.loading, null, function() {
          vue.$jBox.error("上传失败！");
        });
      },
      handleAvatarSuccess(res, file) {
        this.headPhoto = URL.createObjectURL(file.raw);
        this.$jBox.close(this.loading);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$jBox.error("上传头像图片只能是 JPG 格式!");
          return false;
        }
        if (!isLt2M) {
          this.$jBox.error("上传头像图片大小不能超过 2MB!");
          return false;
        }

        this.loading = this.$jBox.loading("上传中...");
        return isJPG && isLt2M;
      }
    },
    created() {},
    mounted() {}
  };
</script>
