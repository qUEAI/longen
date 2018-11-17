<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="单位名称">
        <el-input v-model="formInline.user" placeholder="请输入单位名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
        <div style="position: relative">
          <el-button type="primary" @click="centerDialogVisible = true" class="button button1" size="small">创建单位</el-button>
        </div>
      </el-form-item>
    </el-form>
    <!--树形表格-->
    <div id="tree"><tree-table :data="data" :columns="columns" border/></div>
    <pagination></pagination>

    <!--弹框-->
    <el-dialog
      style="margin-top: 70px"
      class="dialog2"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form :inline="true" :model="formInline" class="dialogForm">
        <el-form-item label="单位名称:">
          <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" class="button3"  @click="centerDialogVisible = false">取 消</el-button>
    <el-button size="small" class="button3" @click="centerDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import pagination from "../pagination/pagination"
  import treeTable from "../TreeTable";
  export default {
    components: { treeTable,pagination },
    data() {
      return {
        centerDialogVisible: false,
        columns: [
          {
            text: "单位编号",
            value: "event",
          },
          {
            text: "单位名称",
            value: "id"
          },
        ],
        data: [
          {
            id: 1,
            event: "编号1",
            timeLine: 100,
            comment: "无",
            children: [
              {
                id: 2,
                event: "编号2",
                timeLine: 10,
                comment: "无"
              },{
                id: 2,
                event: "编号2",
                timeLine: 10,
                comment: "无"
              },{
                id: 2,
                event: "编号2",
                timeLine: 10,
                comment: "无"
              },
              {
                id: 3,
                event: "编号3",
                timeLine: 90,
                comment: "无",
                children: [
                  {
                    id: 4,
                    event: "事件4",
                    timeLine: 5,
                    comment: "无"
                  },
                  {
                    id: 5,
                    event: "事件5",
                    timeLine: 10,
                    comment: "无"
                  },
                ]
              }
            ]
          }
        ],

        formInline: {
          user: '',
          region: ''
        },
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style scoped>
  .button1{
    position: absolute;
    top: -45px;
    right: -850px;
  }
  .dialog2{
    text-align: center;
  }
  .dialog2 .button3{
    margin: 0 50px 0;
  }
  .pagination{
    margin-top: 20px;
    float: right;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<style>
  .dialog2 .el-dialog--center {
    width: 100%;
    height: 263px;
    background-image: url(../assets/group.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .dialog2 .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 55px 25px 0;
  }
</style>
