<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车辆编号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车载配置">
        <el-select v-model="formInline1.region1" placeholder="请选择">
          <el-option label="弹射起步" value="Tom"></el-option>
          <el-option label="氮气加速" value="Jack"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
        <el-button type="primary" @click="centerDialogVisible = true" class="button button1 created" size="small">创建车辆</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :header-cell-style="{background:'#03161c',color:'#2fb5bd',borderColor:'#0c3037',borderWidth:'2px'}"
      :cell-style="{background:'#03161c',borderColor:'#0c3037'}"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        width="70px"
        type="index"
        label="序号">
      </el-table-column>
      <el-table-column
        width="120px"
        prop="name"
        label="车辆编号">
      </el-table-column>
      <el-table-column
        label="车辆配置"
        prop="type">
      </el-table-column>
      <el-table-column
        label="车型"
        prop="id">
      </el-table-column>
      <el-table-column
        label="车牌号"
        prop="name">
      </el-table-column>
      <el-table-column
        label="使用年限"
        prop="name">
      </el-table-column>
      <el-table-column
        label="所属单位"
        prop="name">
      </el-table-column>

      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button
            size="primary"
            type="small"
            class="button3"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="primary"
            type="small"
            class="button2"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination @getChange1="getChange"></pagination>

    <!--弹框-->
    <el-dialog
      style="margin-top: 70px"
      class="dialog4"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form :model="form" :label-position="labelPosition" label-width="80px">
        <el-form-item label="车辆编辑:">
          <el-input auto-complete="off" class="person"></el-input>
        </el-form-item>
        <el-form-item label="车辆编号:" >
          <el-input auto-complete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="车载配置:">
          <el-select multiple placeholder="请选择">
            <el-option label="弹射起步"></el-option>
            <el-option label="氮气加速"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车型:">
          <el-select multiple placeholder="请选择">
            <el-option label="夏利"></el-option>
            <el-option label="奥迪"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号:" >
          <el-input auto-complete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="使用年限:" >
          <el-select multiple placeholder="请选择">
            <el-option label="1年"></el-option>
            <el-option label="2年"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属单位:" >
          <el-select multiple placeholder="请选择">
            <el-option label="理工"></el-option>
            <el-option label="工大"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" class="button3"  @click="centerDialogVisible = false">保 存</el-button>
    <el-button size="small" class="button3" @click="centerDialogVisible = false">取 消</el-button>
  </span>
    </el-dialog>

  </div>
</template>
<script>
  import pagination from "../pagination/pagination"
  export default {
    components:{pagination},
    data() {
      return {
        pagesize: 10,
        currpage: 1,
        labelPosition: 'right',
        centerDialogVisible: false,
        form:{
          major:"",
          minior:"",
          mac:"",
          date:""
        },
        //新增or编辑弹框标题(根据点击的新增or编辑按钮显示不同的标题)
        titleMap: {
          addEquipment:'创建车辆',
          editEquipment: "编辑设备"
        },
        //新增和编辑弹框标题
        dialogStatus: "",
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        },
        formInline1: {
          user: '',
          region1: ''
        },
        tableData3:[],
        // tableData3: [{
        //   ID:1,
        //   date: 'JS2018091',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   ID:2,
        //   date: 'JS2018091',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   ID:3,
        //   date: 'JS2018091',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   ID:4,
        //   date: 'JS2018091',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],
        multipleSelection: []
      }
    },
    created(){
      this.getData();
      this.getChange();
    },
    methods: {
      getChange(psize,cpage,tableData){
        this.pagesize = psize;
        this.currpage = cpage;
        this.tableData3 = tableData;
        console.log(this.pagesize, this.currpage,this.tableData3);
      },
      getData(){
        axios.get("role/").then((res)=>{
          this.tableData3 = res.data.data;
          // console.log(this.tableData3);
        })
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
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style scoped>
  .pagination{
    margin-top: 20px;
    float: right;
  }
  .dialog4 .button3{
    margin: 10px 30px 0 30px;
  }
  .created{
    position: absolute;
    top: 0px;
    right: -390px;
  }
</style>
<style>
  .dialog4 .el-dialog--center {
    width: 100%;
    height: 490px;
    background-image: url(../assets/cars.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .dialog4 .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 55px 35px 0;
  }
  .dialog4 .el-form-item {
    margin-bottom: 5px;
  }
  .dialog4 .el-input__inner {
    border: 1px solid #2fb5bd;
    border-radius: 4px;
    background-color: #0c2329;
    width: 240px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #46bbc1;
  }
</style>
