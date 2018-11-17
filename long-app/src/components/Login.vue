<template>
  <div class="background">
    <div class="background2">
      <el-input placeholder="请输入账号" class="Loginput" v-model="user"></el-input>
      <el-input placeholder="请输入密码" class="Loginput2" v-model="password" type="password"></el-input>
      <!--<span @click="go">登录</span>-->
      <span @click="go">登录</span>
      <span class="login">注册</span>
    </div>
  </div>
</template>
<script>
  // import  axios from "axios"
  export default {
      data(){
        return{
          user: "",
          password: ""
        }
      },
    created() {
        // this.go()
    },
      methods:{
        go(){
          let data = {
            username: this.user,
            password: this.password
          };
          axios.post("login/login", data).then((res)=>{
            this.$router.replace({
              path: "/Dis-count"
            })
          })
        }
      },
  }
</script>
<style scoped>
  .background{
    width: 100%;
    height: 100%;
    background-image: url("../assets/bgc.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position: relative;
  }
  .background2{
    width: 350px;
    height: 402px;
    background-image: url("../assets/bgc2.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position: absolute;
    top: 200px;
    right: 20px;
  }
  .Loginput, .Loginput2{
    position: absolute;
    top: 137px;
    right: -5px;
    width: 247px;
    height: 48px;
  }
  .Loginput2{
    margin-top: 64px;
  }
  .background2 span{
    position: absolute;
    top: 302px;
    right: 219px;
    color: #fff;
    cursor: pointer;
  }
  .background2 .login{
    margin-right: -140px;
  }
</style>
