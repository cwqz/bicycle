<template>
  <div class="header fl-r">
    <div class="header_title fl-r">
      <img :src="src" class="header_title_logo" />
      <div class="header_title_name">校园单车</div>
    </div>
    <el-menu
      mode="horizontal"
      background-color="#fff"
      text-color="#606266"
      active-text-color="#fdd42e"
      class="header_menu"
      router
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">出行服务</template>
        <el-menu-item index="2-1">车辆列表</el-menu-item>
        <el-menu-item index="2-2">出行管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">账户充值</template>
        <el-menu-item index="3-1">账户余额</el-menu-item>
        <el-menu-item index="3-2">充值</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">问题反馈</template>
        <el-menu-item index="4-1">车辆报损</el-menu-item>
        <el-menu-item index="4-2">用车评价</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">个人中心</template>
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="/register">注册</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("../../assets/images/logo.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-around;
}
.header_title {
  width: 20%;
  height: 100%;
}

.header_title_logo {
  width: 70px;
  height: 60px;
  margin: 10px 10px 10px 0;
}

.header_title_name {
  font-size: 28px;
  color: rgb(230, 138, 19);
}

.header_menu {
  font-size: 18px;
  margin: 10px 0;
}
</style>

<style>
</style>
