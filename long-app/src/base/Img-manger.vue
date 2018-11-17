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
      <el-form-item label="图片分类">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="美的" value="shanghai"></el-option>
          <el-option label="丑的" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="病害类型">
        <el-select v-model="formInline1.region1" placeholder="请选择">
          <el-option label="闯红灯" value="Tom"></el-option>
          <el-option label="压实线" value="Jack"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
      </el-form-item>

      <!--图片-->
      <el-row :gutter="20">
        <el-col :span="8"><div class="imgs">
          <!--<img src="../assets/img2.jpg" alt="" width="100%">-->
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
        <el-col :span="8"><div class="imgs">
          <el-row :gutter="20">
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
            <el-col :span="12"><div>
              <img src="../assets/img.png" alt="" width="100%">
            </div></el-col>
          </el-row>
        </div></el-col>
      </el-row>

    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        formInline1: {
          user: '',
          region1: ''
        },
        value6: '',
      }
    },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style lang="less" scoped>
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
