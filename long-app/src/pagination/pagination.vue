<template>
  <el-pagination
    class="pagination"
    width="50px"
    :background=true
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currpage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableData3.length"
    >
  </el-pagination>
</template>
<script>
  export default {
    props:["current-page","page-size"],
    created(){
      this.getData();
      this.change();
    },
    methods: {
      change(){
        this.$emit("getChange1",this.pagesize,this.currpage,this.tableData3)
      },
      getData(){
        axios.get("role/").then((res)=>{
          this.tableData3 = res.data.data;
          // this.length=parseInt(this.tableData3.length);
          this.length=this.tableData3.length;
          console.log(this.tableData3);
        })
      },
      handleSizeChange(psize) {
        this.pagesize = psize
        // console.log(`每页 ${val} 条`);
        // console.log(this.pagesize);
      },
      handleCurrentChange(cpage) {
        this.currpage = cpage
        // console.log(`当前页: ${val}`);
        // console.log(this.currpage);
      }
    },
    data() {
      return {
        // psize:"",
        tableData3:[],
        length:'',
        // currentPage1: 5,
        // currentPage2: 5,
        // currentPage3: 5,
        // currentPage4: 4，
        pagesize: 10,
        currpage: 1,
      };
    }
  }
</script>
<style scoped>
  .pagination{
    position: absolute;
    right: 44px;
    bottom: 33px;
  }
  .el-pagination__sizes .el-input .el-input__inner {
    font-size: 13px;
    padding-left: 8px;
    width: 100px;
  }
</style>
