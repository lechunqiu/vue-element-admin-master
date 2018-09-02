<template >
<div class="app-container">
  <div class="filter-container">

    <div class="bg_white serchadd">
      <p class="color_zywz inline_block top_label">公告促销 </p>
      <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;" @click="dialogVisible = true" type="primary" icon="el-icon-edit">创建促销</el-button>
      <div class="clear">

      </div>
    </div>

    <div class="bg_white">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <el-tab-pane label="全部" name="1"></el-tab-pane>
        <el-tab-pane label="预报公告" name="2"></el-tab-pane>
        <el-tab-pane label="店铺促销" name="3"></el-tab-pane>

      </el-tabs>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align='center' prop="timestamp" label="创建时间">
      </el-table-column>
      <el-table-column align='center' prop="quanzhong" label="权重">
      </el-table-column>
      <el-table-column align='center' prop="fenlei" label="分类">
      </el-table-column>
      <el-table-column align='center' prop="title" label="标题">
      </el-table-column>
      <el-table-column align='center' prop="neirong" label="内容">
      </el-table-column>
      <el-table-column align='center' label="操作">
        <template slot-scope="scope">
                  <el-button type="primary" size="mini"  @click="dialogVisible = true"  >编辑</el-button>
                  <el-button type="danger" size="mini" >删除</el-button>
              </template>
      </el-table-column>
    </el-table>

    <!-- <div class="pagination-container">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div> -->
    <div class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>


    <el-dialog title="创建公告促销" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">

      <div class="form_part center">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="促销权重：">
            <el-select v-model="form.storeclass" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="促销分类：">
            <el-select v-model="form.class" placeholder="请选择">
              <el-option label="公告" value="1"></el-option>
              <el-option label="提示" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="店铺名称：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="内容详情：">
            <el-input type="textarea" v-model="form.remarks"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="dialogVisible = false">确认</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>

        </el-form>
      </div>

    </el-dialog>


  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      dialogVisible: false,
      date1: '',
      date2: '',
      activeName: '1',
      tableData: [{
        timestamp: '2016-05-02',
        quanzhong: '1',
        fenlei: '预报公告',
        title: '五一陈列',
        neirong: '内容内容'
      }, {
        timestamp: '2016-05-02',
        quanzhong: '1',
        fenlei: '预报公告',
        title: '五一陈列',
        neirong: '内容内容'
      }, {
        timestamp: '2016-05-02',
        quanzhong: '1',
        fenlei: '预报公告',
        title: '五一陈列',
        neirong: '内容内容'
      }, {
        timestamp: '2016-05-02',
        quanzhong: '1',
        fenlei: '预报公告',
        title: '五一陈列',
        neirong: '内容内容'
      }],
      form: {
        storeclass: '2016-05-02',
        class: '1',
        name: '预报公告',
        remarks: '五一陈列'
      },
      currentPage: 1
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
