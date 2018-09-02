<template >
<div class="app-container">
  <div class="filter-container">
    <div class="bg_white serchadd">
      <span class="color_six top_label">搜索地区：</span>
      <el-input style="width: 200px;" class="filter-item" placeholder="">
      </el-input>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search">搜索</el-button>
      <span class="color_nine" style='font-size:14px;margin-left:10px'>只能查看到产生订单行为的会员</span>
    </div>


    <div class="bg_white">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <el-tab-pane label="全部" name="1"></el-tab-pane>
        <el-tab-pane label="VIP" name="2"></el-tab-pane>
        <el-tab-pane label="黄金" name="3"></el-tab-pane>
        <el-tab-pane label="钻石" name="4"></el-tab-pane>

      </el-tabs>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align='center' prop="date" label="注册时间" width="180">
      </el-table-column>
      <el-table-column align='center' prop="id" label="会员ID" width="180">
      </el-table-column>
      <el-table-column align='center' prop="storename" label="门店名称">
      </el-table-column>
      <el-table-column align='center' prop="ownername" label="店主姓名">
      </el-table-column>
      <el-table-column align='center' prop="sex" label="性别">
      </el-table-column>
      <el-table-column align='center' prop="phone" label="联系方式">
      </el-table-column>
      <el-table-column align='center' prop="address" label="门店地址">
      </el-table-column>
      <el-table-column align='center' prop="grade" label="会员等级">
      </el-table-column>

      <el-table-column align='center' label="操作">
        <template slot-scope="scope">
                <el-button type="primary" size="mini"  @click="dialogVisible = true">查看</el-button>
            </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>

    <el-dialog title="会员信息查看" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="form_part center">
        <el-form ref="form" :model="form" label-width="100px">

          <el-form-item label="会员ID：">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="买家店铺名称：">
            <el-input v-model="form.storename"></el-input>
          </el-form-item>
          <el-form-item label="店主名称">
            <el-input v-model="form.storename"></el-input>
          </el-form-item>
          <el-form-item label="店主性别：">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="店铺收货地址：">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="所在区域：">
            <el-select v-model="form.area" placeholder="请选择">
              <el-option label="徐汇区" value="1"></el-option>
              <el-option label="宝山区" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="会员等级：">
            <el-select v-model="form.grade" placeholder="请选择">
              <el-option label="VIP1" value="1"></el-option>
              <el-option label="VIP2" value="2"></el-option>
            </el-select>
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

<script>
export default {
  data() {
    return {
      activeName: '1',
      dialogVisible: false,
      tableData: [{
        date: '2018-08-11',
        id: '1',
        storename: '生活专送',
        ownername: '李敏',
        sex: '男',
        phone: '18654565555',
        address: '上海市宝山区宝山路66号',
        grade: 'VIP'
      }, {
        date: '2018-08-11',
        id: '1',
        storename: '生活专送',
        ownername: '李敏',
        sex: '男',
        phone: '18654565555',
        address: '上海市宝山区宝山路66号',
        grade: 'VIP'
      }, {
        date: '2018-08-11',
        id: '1',
        storename: '生活专送',
        ownername: '李敏',
        sex: '男',
        phone: '18654565555',
        address: '上海市宝山区宝山路66号',
        grade: 'VIP'
      }],
      form: {
        id: '1',
        storename: '生活专送',
        name: '李敏',
        sex:'男',
        phone:'18654565555',
        address:'上海市宝山区宝山路66号',
        area:'宝山区',
        grade:'VIP'
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

<style lang="css">
</style>
