<template>
  <div>
    <div style="position: relative">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="角色名称">
        <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button" size="small">查询</el-button>
          <el-button type="primary"  @click="centerDialogVisible = true" class="button button1" size="small">创建角色</el-button>
      </el-form-item>
    </el-form>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData3.slice((currpage - 1) * pagesize, currpage * pagesize)"
      tooltip-effect="dark"
      style="width: 100%;border:none;text-align: center"
      :header-cell-style="{background:'#03161c',color:'#2fb5bd',borderColor:'#0c3037',borderWidth:'2px'}"
      :cell-style="{background:'#03161c',borderColor:'#0c3037'}"
      >
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="type"
        label="角色编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色姓名">
      </el-table-column>
      <el-table-column label="操作">
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
            @click="handleDelete(scope.$index,tableData3)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      width="50px"
      :background=true
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currpage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      :total="tableData3.length"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <!--弹框-->
    <el-dialog
      style="margin-top: 70px;border-radius: 4px"
      class="dialog1"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-form :inline="true" :model="formInline" class="dialogForm">
        <el-form-item label="角色名称:">
          <el-input v-model="tableData.date" placeholder="请输入名称"></el-input>
        </el-form-item>
        <!--{{msg}}-->
        <el-form-item label="角色权限:">
          <el-select v-model="tableData.name" placeholder="请选择权限">
            <el-option label="Tom" value="Tom"></el-option>
            <el-option label="Jack" value="Jack"></el-option>
          </el-select>
          <!--{{msg1}}-->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" class="button3" @click="save">保  存</el-button>
    <el-button size="small" type="primary" @click="centerDialogVisible = false" class="button3">取  消</el-button>
  </span>
    </el-dialog>

    <el-dialog
      class="dialog0"
      :visible.sync="centerDialogVisible1"
      width="30%"
      center>
      <el-form :inline="true" class="dialogForm0">
        <el-form-item label="角色编号">
          <el-input v-model="row.type"></el-input>
        </el-form-item>
        <el-form-item label="角色姓名">
          <el-input v-model="row.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button  size="small" class="button3" @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button  size="small" class="button3" type="primary" @click="centerDialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  // import axios from "axios";
  import pagination from "../pagination/pagination"
  export default {
    components:{pagination},
    data() {
      return {
        msg:"",
        msg1:"",
        pagesize: 10,
        currpage: 1,
        row:"",
        centerDialogVisible1: false,
        centerDialogVisible: false,
        currentPage4: 1,
        formInline: {
          user: '',
          region: ''
        },
        tableData:[{
          'date': '',
          'name': '',
        }],
        tableData3:[],
        // tableData3: [{
        //   'ID':1,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':2,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':3,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':4,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':5,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':6,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':7,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':8,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':9,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':10,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':11,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },{
        //   'ID':12,
        //   'date': '2016-05-03',
        //   'name': '王小虎',
        //   'address': '上海市普陀区金沙江路 1518 弄'
        // },
        // ],
        multipleSelection: []
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        axios.get("role/").then((res)=>{
          this.tableData3 = res.data.data;
        })
      },
      save(){
        this.tableData3.unshift(this.tableData);
        // console.log(this.tableData);
        this.tableData=[{
          'date': '',
          'name': '',
        }],
        this.msg="";
        this.msg1="";
        this.centerDialogVisible = false;
      },
      indexMethod(index) {
        return index+1;
      },
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        this.centerDialogVisible1 = true;
        // console.log(index, row,);
        this.row=row;
        // console.log(row.date);
      },
      handleDelete(index, rows) {
        // console.log(index);
        rows.splice(index, 1);
      },
      handleSizeChange(psize) {
        this.pagesize = psize
        // console.log(`每页 ${psize} 条`);
      },
      handleCurrentChange(cpage) {
        this.currpage = cpage
        // console.log(`当前页: ${cpage}`);
        // console.log(this.tableData3);
      },
      // handleSelectionChange(psize) {
      //   this.multipleSelection = psize;
      // }
    }
  }
</script>
<style scoped>
.button1{
  position: absolute;
  top: -5px;
  right: -850px;
}
 .dialog1 .button3{
    margin: 0 50px 0;
  }
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
<style>
  .dialog1 .el-dialog--center {
    width: 100%;
    height: 303px;
    background-image: url(../assets/role.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .dialog1 .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 55px 25px 0;
  }

  .dialog0 .el-dialog--center {
    width: 100%;
    height: 303px;
    background-image: url(../assets/checkRole.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .dialog0 .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 25px 25px 3px;
  }
</style>
