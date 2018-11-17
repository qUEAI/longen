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
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
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
      <el-table-column
        label="车辆编号">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="车辆配置">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="车型">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="车牌号">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="使用年限">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="所属单位">
        <template slot-scope="scope">
          <span >{{ scope.row.name }}</span>
        </template>
      </el-table-column>
     <el-table-column
        label="子网掩码">
        <template slot-scope="scope">
          <span >{{ scope.row.name }}</span>
        </template>
      </el-table-column>
     <el-table-column
        label="IP地址">
        <template slot-scope="scope">
          <span >{{ scope.row.name }}</span>
        </template>
      </el-table-column>
     <el-table-column
        label="端口号">
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
            @click="handleEdit(scope.$index, scope.row)">配置</el-button>
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
        tableData3: [{
          ID:1,
          date: 'JS2018091',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          ID:2,
          date: 'JS2018091',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          ID:3,
          date: 'JS2018091',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          ID:4,
          date: 'JS2018091',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
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
</style>
