<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车牌号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="时间段">
        <div class="block">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="定位信息">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <!--视频-->
    <el-row :gutter="20">
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <!--<img src="../assets/video.png" alt="" width="100%">-->
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
        >
        </video-player>
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
      <el-col :span="6"><div class="video">
        <img src="../assets/video2.png" alt="" class="begin">
        <img src="../assets/video.png" alt="" width="100%">
      </div></el-col>
    </el-row>
  </div>
</template>
<script>
  import { videoPlayer } from 'vue-video-player';
  import 'videojs-contrib-hls'
  export default {
    data() {
      return {
        playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "application/x-mpegURL",
            src: "video.m3u8" //你的m3u8地址（必填）
          }],
          poster: "poster.jpg", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
        },

        formInline: {
          user: '',
          region: ''
        },
        value6: '',
      }
    },
    components:{
      videoPlayer
    },
    mounted:{

    },
    computed:{
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods:{
      onPlayerPlay(player) {
        alert("play");
      },
      onPlayerPause(player){
        alert("pause");
      },
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style lang="less" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<style>

</style>
