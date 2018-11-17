<template>
  <div>
    <el-header class="header">
      <img src="../assets/title2.png" alt="" style="margin-top: 20px">
      <button class="button btns"></button>
    </el-header>
    <el-container style="background-color:#07161b;height: 100%">
      <el-aside width="230px" style="background-color:#07161b;height: 100%;border: none" class="aside">
        <el-menu default-active="2"
                 background-color="#07161b"
                 text-color="#8ee3e8"
                 active-text-color="#fff"
                 @open="handleOpen"
                 @close="handleClose">
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="open8"><img src="../assets/iconTop.png" alt="" style="margin: 0 15px"><span style="font-size: 18px">数据统计</span></el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2">
            <template slot="title"><img src="../assets/data2.png" alt="" style="margin: 0 15px"><span style="font-size: 18px;color:#8ee3e8">数据管理</span></template>
            <el-menu-item index="2-1" @click="open6" class="font" style="padding-left: 75px;color:#46a3a8">视频管理</el-menu-item>
            <el-menu-item index="2-2" @click="open7" class="font" style="padding-left: 75px;color:#46a3a8">图片管理</el-menu-item>
            <el-menu-item index="2-3" @click="open11" class="font" style="padding-left: 75px;color:#46a3a8">PAD日志</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><img src="../assets/system.png" alt="" style="margin: 0 15px"><span style="font-size: 18px;color:#8ee3e8">系统管理</span> </template>
            <el-menu-item index="3-1" @click="open1" class="font" style="padding-left: 75px;color:#46a3a8">角色管理</el-menu-item>
            <el-menu-item index="3-2" @click="open2" class="font" style="padding-left: 75px;color:#46a3a8">单位管理</el-menu-item>
            <el-menu-item index="3-3" @click="open3" class="font" style="padding-left: 75px;color:#46a3a8">人员管理</el-menu-item>
            <el-menu-item index="3-4" @click="open4" class="font" style="padding-left: 75px;color:#46a3a8">车辆管理</el-menu-item>
            <el-menu-item index="3-5" @click="open5" class="font" style="padding-left: 75px;color:#46a3a8">网络配置</el-menu-item>
            <el-menu-item index="3-6" @click="open9" class="font" style="padding-left: 75px;color:#46a3a8">字典管理</el-menu-item>
            <el-menu-item index="3-7" @click="open10" class="font" style="padding-left: 75px;color:#46a3a8">日志管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main" style="background-color: #03161c;">
      <router-view>
        <slot>
          <discount></discount>
        </slot>
      </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import discount from "../base/Dis-count";
  export default {
    name: 'Mainpage',
    components:{
      discount
    },
    data() {
      return {
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
     open1 () {
       this.$router.push({
         path: '/Role-manger'
       })
     },
       open2 () {
       this.$router.push({
         path: '/Group-manger'
       })
     },
        open3 () {
           this.$router.push({
             path: '/Person-manger'
           })
         },
        open4 () {
           this.$router.push({
             path: '/Cars-manger'
           })
         },
        open5 () {
           this.$router.push({
             path: '/Internet-manger'
           })
         },
        open9 () {
           this.$router.push({
             path: '/Dic-manger'
           })
         },
        open10 () {
           this.$router.push({
             path: '/Log-manger'
           })
         },
        open6 () {
           this.$router.push({
             path: '/Video-manger'
           })
         },
      open7 () {
        this.$router.push({
          path: '/Img-manger'
        })
      },
      open8 () {
        this.$router.push({
          path: '/Dis-count'
        })
      },
      open11 () {
        this.$router.push({
          path: '/PAD-manger'
        })
      },
    }
  };
</script>
<style scoped >
  *{
    margin: 0;
    padding: 0;
  }
  .main{
    border: 10px solid #0d2d37;
    background-color: #03161c;
  }
  .el-menu-item{

  }
  .el-menu-item.is-active {
    color: #fff!important;
    background-color: #518894 !important;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    color: #fff!important;
    background-color: #518894 !important;
  }
  .el-menu {
     border-right:none;
  }
  .font{
    padding-left: 55px;
    font-size: 16px;
  }
  li.el-submenu{
    /*border-top: 1px solid #155d69;*/
    /*border-bottom: 1px solid #155d69;*/
    background-color: #518894 !important;
  }
  .btns{
    margin-top: 10px;
    background-image: url("../assets/titleimg.jpg");
  }
  .header{
    width: 100%;
    height: 58px;
    background-image:url(../assets/bgimg.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .header img{
    margin-left: 30px;
  }
  .el-container {
    width: 100%;
    /*height: 100%;*/
  }
  .title{
    font-size: 30px;
    font-weight: bolder;
  }
  .button{
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 50%;
    margin: 10px 50px 10px;
    float: right;
    top: 60px;
    right: 20px;
  }
  .el-main{
    width: 100%;
    /*height: 100%;*/
    background-color: #010b0e;
    padding: 20px;
    /*height: 100%;*/
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
