<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Rolemanger from "./base/Role-manger";
  import Groupmanger from "./base/Group-manger";
  import Personmanger from "./base/Person-manger";
  import Carsmanger from "./base/Person-manger";
  import Internetmanger from "./base/Internet-manger";
  import Videomanger from "./base/Video-manger";
  import Imgmanger from "./base/Img-manger";
  import Discount from "./base/Dis-count";
  import Dicmanger from "./base/Dic-manger";
  import Logmanger from "./base/Log-manger";
  import PADmanger from "./base/Log-manger";
export default {
  name: 'App',
  components:{
    Rolemanger,
    Groupmanger,
    Personmanger,
    Carsmanger,
    Internetmanger,
    Videomanger,
    Imgmanger,
    Discount,
    Dicmanger,
    Logmanger,
    PADmanger
  }
}
</script>

<style>
</style>
