<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="操作人">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="IP">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
      </el-form-item>
      <!--<el-button type="primary" class="btn" @click="addEquipment">创建角色</el-button>-->
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      :header-cell-style="{background:'#03161c',color:'#2fb5bd',borderColor:'#0c3037',borderWidth:'2px'}"
      :cell-style="{background:'#03161c',borderColor:'#0c3037'}"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        label="序号">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ID }}</span>
        </template>
      </el-table-column>
      <!--<el-table-column-->
        <!--label="日志编号">-->
        <!--<template slot-scope="scope">-->
          <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column
        label="操作内容">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作人">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="primary"
            type="small"
            class="button3"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination></pagination>
  </div>
</template>
<script>
  import pagination from "../pagination/pagination"
  export default {
    components:{pagination},
    data() {
      return {
        value6:"",
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        },
        tableData3: [{
          ID:1,
          date: '2016-05-03',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:2,
          date: '2016-05-02',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:3,
          date: '2016-05-04',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:4,
          date: '2016-05-01',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:5,
          date: '2016-05-08',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:6,
          date: '2016-05-06',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:7,
          date: '2016-05-07',
          name: '王小虎',
          IP:'192.168.0.1',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods:{
      rowClass(){
        return { "background-color": "red" }
      },
      addEquipment() {
        //显示弹框
        this.dialogFormVisible = true;
        //新增弹框标题
        this.dialogStatus = "addEquipment";
      },
      //编辑
      handelEdit() {
        //显示弹框
        this.dialogFormVisible = true;
        //编辑弹框标题
        this.dialogStatus = "editEquipent"
      },
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        // console.log(index, row);
      },
      handleDelete(index, row) {
        // console.log(index, row);
      },
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        // this.multipleSelection = val;
      }
    }
  }
</script>
<style scoped>
  .tablebox{
    text-align: center;
    cursor: pointer;
    position: relative;
    top: -20px;
    left: -21px;
    width: 103%;
    height: 220px;
    border: 1px solid #ccc;
    border-bottom: 0;
  }
  .tablebox .td1{
    border-right: 1px solid #ccc ;
  }
  .tablebox .td2{
    /*padding-left: 100px;*/
  }
  .tablebox tr td{
    border-bottom: 1px solid #ccc;
    height: 20px;
    line-height: 20px;
    /*padding: 5px;*/
  }
  .pagination{
    margin-top: 20px;
    float: right;
  }
  .aside{
    /*background-color: red;*/
    width: 50px;
    /*height: 100px;*/
    margin-top: 0px;
    margin-left: 20px;
  }
  .header{
    /*margin-bottom: 0;*/
  }
  .tab{
    cursor: pointer;
    text-align: center;
    height: 59px;
    line-height: 60px;
    border:1px solid #ccc;
  }
  .tab span hover{
    background-color: dodgerblue;
  }
  .tab span{
    padding: 120px;
  }
</style>

