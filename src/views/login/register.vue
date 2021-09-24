<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="70px"
      class="resContainer"
    >
      <el-form-item label="用户名">
        <el-input
          v-model="form.username"
          type="text"
          placeholder="输入用户名"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="输入密码"
        />
      </el-form-item>
      <!-- <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="用户角色">
        <el-select v-model="form.roleZh">
          <el-option label="管理员" value="5684464427c543c38f5a3d649481b9be" />
          <el-option
            label="普通用户"
            value="ed98ce8b1af44a89b68a6894c95766d5"
          />
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.postalCode"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button
          type="primary"
          class="loginContainer-register_button"
          @click="onSubmit()"
          >注册</el-button
        >
      </el-form-item>
      <el-link type="primary" class="loginContainer-login" @click="goLogin()">
        使用已有账号进行登录
      </el-link>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        sex: "",
        roleZh: "",
        address: "",
        phone: "",
        postalCode: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 注册后跳转到登录页
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let user = {
            username: this.form.username,
            sex: this.form.sex,
            address: this.form.address,
            phone: this.form.phone,
            postalCode: this.form.postalCode,
          };
          this.postRequest(
            "/user/register?roleZh=" +
              this.form.roleZh +
              "&password=" +
              this.form.password,
            user
          ).then((resp) => {
            if (resp) {
              this.$message({ message: "注册成功，请登录", type: "success" });
              this.$router.replace("/");
            }
          });
        } else {
          return false;
        }
      });
    },
    // 跳转到登录页
    goLogin() {
      this.$router.replace("/login");
    },
  },
};
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login3.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.loginContainer {
  border-radius: 8px;
  position: fixed;
  width: 300px;
  height: 300px;
  margin: 230px 0 0 620px;
}

.loginContainer-h3 {
  text-align: center;
  color: rgb(43, 127, 223);
}

.loginContainer-button {
  width: 98%;
  margin: 0 1%;
}

.loginContainer-register_button {
  width: 98%;
  margin: 0 1%;
}

.loginContainer-register {
  margin-left: 270px;
  margin-top: 10px;
}

.loginContainer-login {
  margin-left: 160px;
}
.resContainer {
  border-radius: 8px;
  position: fixed;
  width: 300px;
  height: 300px;
  margin: 240px 0 0 600px;
}
</style>