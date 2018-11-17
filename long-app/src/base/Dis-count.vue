<template>
  <div class="back">
    <!--<div class="back">-->
      <!--<div style="width: 746px;height: 507px; background-color:#fff;"></div>-->
    <!--</div>-->


    <el-form :inline="true" :model="formInline" class="demo-form-inline ">
      <el-form-item label="车牌号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="起止日期">
        <div class="block">
          {{value6}}
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="病害类型">
        <el-select v-model="formInline1.region1" placeholder="请选择">
          <el-option label="闯红灯" value="Tom"></el-option>
          <el-option label="压实线" value="Jack"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small" class="button">查询</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="20">
      <el-col :span="7"><div class="grid-content1"><div id="myChart" :style="{width: '100%', height: '300px'}"></div></div><div class="grid-content5"><div id="myChartPie" :style="{width: '100%', height: '330px'}"></div></div></el-col>
      <el-col :span="10"><div class="grid-content2" id="allmap" :style="{width: '100%'}"></div><div class="grid-content6"><div id="myChartPie2" :style="{width: '100%', height: '270px'}"></div></div></el-col>
      <el-col :span="7"><div class="grid-content3"><div id="myChartPie1" :style="{width: '100%', height: '170px'}"></div></div><div class="grid-content4"><div id="myChartPie4" :style="{width: '100%', height: '180px'}"></div></div><div class="grid-content7"><div id="myChartPie3" :style="{width: '100%', height: '300px'}"></div></div></el-col>
    </el-row>

  </div>
</template>
<script>
  import BMap from "BMap";
  import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';
  let echarts = require('echarts/lib/echarts');// 引入基本模板
  //根据需要引入相应图的组件
  require('echarts/lib/chart/bar'); //柱状图
  require("echarts/lib/chart/lines"); //折线图
  require('echarts/lib/chart/pie'); //饼状图
  require("echarts/lib/component/toolbox"); //上方可以下载图片、刷新等工具栏
  require('echarts/lib/component/title'); //标题
  export default {
    components:{
      // XChart
    },
    data() {
      return {
        myChart: {},
        myChartPie: {},
        myChartPie1: {},
        myChartPie2: {},

        formInline: {
          user: '',
          region: ''
        },
        formInline1: {
          user: '',
          region1: ''
        },
        value6: '',
        value1: '',
        value2: '',
      }
    },
    mounted(){
      this.baiduMap()//地图组件
      let echarts = this.drawChart();
      this.myChart = echarts.myChart;
      this.myChartPie = echarts.myChartPie;
      this.myChartPie1 = echarts.myChartPie1;
      this.myChartPie2 = echarts.myChartPie2;
      this.myChartPie3 = echarts.myChartPie3;
      this.myChartPie4 = echarts.myChartPie4;
      window.onresize = () => {
        // 这里使用箭头函数，避免this指向问题
        this.myChart.resize();
        this.myChartPie.resize();
        this.myChartPie1.resize();
        this.myChartPie2.resize();
        this.myChartPie3.resize();
        this.myChartPie4.resize();
      }
    },
    methods: {
      baiduMap () {  //引入百度地图
        var map = new BMap.Map('allmap');  //创建map实例
        var point = new BMap.Point(116.404, 39.915)
        map.centerAndZoom(point, 11)  //初始化地图
        var marker = new BMap.Marker(point)  // 创建标注
        map.addOverlay(marker)              // 将标注添加到地图中
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.setCurrentCity("北京");  //设置地图显示的城市
        map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
      },

      drawChart() {// 绘制图表
        let idx = 1;
        let myChart = echarts.init(document.getElementById('myChart'));
        let myChartPie = echarts.init(document.getElementById('myChartPie'));
        let myChartPie1 = echarts.init(document.getElementById('myChartPie1'));
        let myChartPie2 = echarts.init(document.getElementById('myChartPie2'));
        let myChartPie3 = echarts.init(document.getElementById('myChartPie3'));
        let myChartPie4 = echarts.init(document.getElementById('myChartPie4'));

        var data = [];
        for (var i = 0; i <= 360; i++) {
          var t = i / 180 * Math.PI;
          var r = Math.sin(2 * t) * Math.cos(2 * t);
          data.push([r, i]);
        };
        myChart.setOption({
          tooltip: {},
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [
                {value: 235, name: '视频广告'},
                {value: 274, name: '联盟广告'},
                {value: 310, name: '邮件营销'},
                {value: 335, name: '直接访问'},
                {value: 400, name: '搜索引擎'}
              ]
            }
          ]
        });
        myChartPie.setOption({
          title: { text: '在Vue中使用echarts',textStyle:{color:"#2fb5bd"},x:"center"}, //修改标题样式
          tooltip: {},
          xAxis: {
            //设置坐标轴字体颜色和宽度
            axisLine:{
              lineStyle:{
                color:"#2fb5bd",
                width:2  //x轴的宽度
              }
            },
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {
            //设置坐标轴字体颜色和宽度
            axisLine:{
              lineStyle:{
                color:"#2fb5bd",
                width:2  //y轴的宽度
              }
            },
            // data: [10, 20, 30, 40, 50, 60]
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [
              {value:10,itemStyle:{ normal:{color:"#AEEEEE"}, } }, //设置柱形的数值和颜色
              {value:20,itemStyle:{ normal:{color:"#BFEFFF"}, } },
              {value:40,itemStyle:{ normal:{color:"#9FB6CD"}, } },
              {value:60,itemStyle:{ normal:{color:"#96CDCD"}, } },
              {value:10,itemStyle:{ normal:{color:"#AEEEEE"}, } },
              {value:33,itemStyle:{ normal:{color:"#90EE90"}, } },
            ]
          }],
        });
        myChartPie1.setOption({
          title: {},
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0,
            axisLine:{
              lineStyle:{
                color:"#2fb5bd",
                width:2  //x轴的宽度
              }
            }
          },
          radiusAxis: {
            min: 0
          },
          series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }],
          animationDuration: 2000
        });
        myChartPie2.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['利润', '支出', '收入']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'value',
              axisLine:{
                lineStyle:{
                  color:"#2fb5bd",
                  width:2  //x轴的宽度
                }
              },
            }
          ],
          yAxis : [
            {
              type : 'category',
              axisLine:{
                lineStyle:{
                  color:"#2fb5bd",
                  width:2  //x轴的宽度
                }
              },
              axisTick : {show: false},
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          series : [
            {
              name:'利润',
              type:'bar',
              label: {
                normal: {
                  show: true,
                  position: 'inside'
                }
              },
              data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
              name:'收入',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true
                }
              },
              data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
              name:'支出',
              type:'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'left'
                }
              },
              data:[-120, -132, -101, -134, -190, -230, -210]
            }
          ]
        });
        myChartPie3.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ]
            }
          ]
        });
        myChartPie4.setOption({
          title: {
            // text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#2fb5bd',
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000},
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
              },
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
              }
            ]
          }]
        });
        return { myChart: myChart, myChartPie: myChartPie,myChartPie1: myChartPie1,myChartPie2: myChartPie2,myChartPie3: myChartPie3,myChartPie4: myChartPie4 }
      },
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style scoped>
  .back{
    /*height: 1002px;*/
    width: 100%;
    background-image: url("../assets/mapBgc.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  #test {
    width: 400px;
    height: 400px;
    margin: 40px auto;
  }
  .grid-content1{
    /*width: 50%;*/
    height: 300px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content2{
    height: 360px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content3{
    height: 180px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content4{
    margin-top: 10px;
    height: 170px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content5{
    margin-top: 10px;
    height: 330px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content6{
    margin-top: 10px;
    height: 270px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
  .grid-content7{
    margin-top: 10px;
    height: 270px;
    /*background-color: #03161c;*/
    border: 1px solid #2fb5bd;
  }
</style>
