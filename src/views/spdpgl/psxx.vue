<template >
<div class="app-container">
  <div class="filter-container">

    <div class="bg_white serchadd">
      <p class="color_zywz inline_block top_label">配送信息列表 </p>
      <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;" @click="dialogVisible = true" type="primary" icon="el-icon-edit">创建配送</el-button>
      <div class="clear">

      </div>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align='center' prop="date" label="创建时间" width="180">
      </el-table-column>
      <el-table-column align='center' prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column align='center' prop="psren" label="配送人">
      </el-table-column>
      <el-table-column align='center' prop="phone" label="联系方式">
      </el-table-column>
      <el-table-column align='center' prop="carnum" label="车牌号">
      </el-table-column>
      <el-table-column align='center' label="操作">
        <template slot-scope="scope">
              <el-button type="primary" size="mini"   @click="dialogVisible = true" >编辑</el-button>
              <el-button type="danger"  size="mini" >删除
              </el-button>
          </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>

    <el-dialog title="创建配送信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="form_part center">
        <el-form ref="form" :model="form" label-width="100px">
          <!-- <el-form-item label="促销权重：">
          <el-select v-model="form.storeclass" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item> -->

          <el-form-item label="配送人：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="联系方式：">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="车牌号：">
            <el-input v-model="form.carnum"></el-input>
          </el-form-item>

          <!-- <el-form-item label="内容详情：">
          <el-input type="textarea" v-model="form.remarks"></el-input>
        </el-form-item> -->

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
          tableData: [{
            date: '2016-05-02',
            id: '1',
            psren: '王小虎',
            phone:'13645855555',
            carnum:'沪A0000'
          }, {
            date: '2016-05-02',
            id: '2',
            psren: '王小虎',
            phone:'13645855555',
            carnum:'沪A0000'
          }, {
            date: '2016-05-02',
            id: '3',
            psren: '王小虎',
            phone:'13645855555',
            carnum:'沪A0000'
          }, {
            date: '2016-05-02',
            id: '4',
            psren: '王小虎',
            phone:'13645855555',
            carnum:'沪A0000'
          }],
          form: {
            name: '李二',
            phone: '1645854444',
            carnum: '沪A0000'
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
  <style media="screen">

  </style>
