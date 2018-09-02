<template >
<div class="app-container">
  <div class="filter-container">
    <!-- <div class="bg_white serchadd">
      <span class="color_six top_label">反馈搜索：</span>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="" v-model="listQuery.title">
      </el-input>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" >搜索</el-button>
    </div> -->
    <div class="bg_white ss_box">
      <div class=" ss_part">
        <span class="color_six top_label">反馈搜索：</span>
        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="" >
        </el-input>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" >搜索</el-button>
      </div>
      <div  class="ss_part">
        <span  class="color_six top_label">时间范围：</span>
        <el-date-picker class="filter-item" style="width:160px" v-model="date1" type="date" placeholder="开始时间">
        </el-date-picker>
        <span class="color_zwwz">至</span>
        <el-date-picker class="filter-item" style="width:160px" v-model="date2" type="date" placeholder="结束时间">
        </el-date-picker>
      </div>
    </div>

    <div class="bg_white">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <el-tab-pane label="全部" name="1"></el-tab-pane>
        <el-tab-pane label="待处理" name="2"></el-tab-pane>
        <el-tab-pane label="未处理" name="3"></el-tab-pane>

      </el-tabs>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column align='center' prop="date" label="反馈时间" width="180">
      </el-table-column>
      <el-table-column align='center' prop="name" label="门店名称" width="180">
      </el-table-column>
      <el-table-column align='center' prop="subject" label="反馈主题">
      </el-table-column>
      <el-table-column align='center' prop="content" label="反馈内容">
      </el-table-column>
      <el-table-column align='center' prop="img" label="反馈图片">
      </el-table-column>
      <el-table-column align='center' label="操作">
        <template slot-scope="scope">
              <el-button type="primary" size="mini">处理</el-button>
          </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>


  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      date1: '',
      date2: '',
      activeName: '1',
      tableData: [{
        date: '2016-05-02',
        name: '生活专送',
        subject: '光明生奶配',
        content: '这批次货物10箱送到店里面的时候破损严重',
        img: '图片图片'
      }, {
        date: '2016-05-02',
        name: '生活专送',
        subject: '光明生奶配',
        content: '这批次货物10箱送到店里面的时候破损严重',
        img: '图片图片'
      }, {
        date: '2016-05-02',
        name: '生活专送',
        subject: '光明生奶配',
        content: '这批次货物10箱送到店里面的时候破损严重',
        img: '图片图片'
      }, {
        date: '2016-05-02',
        name: '生活专送',
        subject: '光明生奶配',
        content: '这批次货物10箱送到店里面的时候破损严重',
        img: '图片图片'
      }],
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
