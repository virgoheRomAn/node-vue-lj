<template>
  <div class="footer-bar">
    <div class="footer">
      <ul>
        <li>
          <router-link
            to="/index"
            exact
          >
            <i class="sprite s-icon-index"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/product">
            <i class="sprite s-icon-product"></i>
            <span>产品</span>
          </router-link>
        </li>
        <li>
          <router-link to="/usercenter">
            <i class="sprite s-icon-mine"></i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="fast">
      <label class="left">
        <router-link to="/inviteFriend">
          <img src="../assets/img/tips/invite.png">
        </router-link>
      </label>
      <label class="right">
        <a href="https://tb.53kf.com/code/wx/10186089/1">
          <img src="../assets/img/tips/customer.png">
        </a>
      </label>
    </div>
  </div>
</template>
<script>
  export default {
    name: "fb-footer"
  };
</script>
