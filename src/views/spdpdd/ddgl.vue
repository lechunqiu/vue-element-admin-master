<template lang="html">
  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">特殊订单：</span>
        <el-input  style="width: 200px;" class="filter-item" placeholder="">
        </el-input>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" >搜索</el-button>
      </div>
      <div class="bg_white ss_box">
        <div  class="ss_part">
          <span  class="color_six  top_label ">时间范围：</span>
          <el-date-picker class="filter-item" style="width:160px" v-model="date1" type="date" placeholder="开始时间">
          </el-date-picker>
          <span class="color_zwwz">至</span>
          <el-date-picker class="filter-item" style="width:160px" v-model="date2" type="date" placeholder="结束时间">
          </el-date-picker>
        </div>
        <div  class="ss_part">
          <span class="color_six top_label top_sslabel">订单状态：</span>
          <el-button type="primary">全部</el-button>
          <el-button>代付款</el-button>
          <el-button>待确认</el-button>
          <el-button>待发货</el-button>
          <el-button>待签收</el-button>
          <el-button>已完成</el-button>
        </div>
        <div  class="ss_part">
          <span class="color_six top_label top_sslabel">支付方式：</span>
          <el-button type="primary">全部</el-button>
          <el-button>货到付款</el-button>
          <el-button>线下转账</el-button>
          <el-button>赊账</el-button>
        </div>
      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="date" label="下单时间" width="180">
        </el-table-column>
        <el-table-column align='center'  label="订单号" width="180">
          <template slot-scope="scope">
            <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a>
          </template>
        </el-table-column>
        <el-table-column align='center' prop="ordercontent" label="订单内容">
        </el-table-column>
        <el-table-column align='center' prop="comamt" label="商品数量">
        </el-table-column>
        <el-table-column align='center' prop="amount" label="订单金额(元)">
        </el-table-column>
        <el-table-column align='center' prop="vipname" label="会员名">
        </el-table-column>
        <el-table-column align='center' prop="message" label="配送信息">
        </el-table-column>
        <el-table-column align='center' label="操作">
          <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">发货</el-button>
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

<script>
export default {
  data(){
    return{
      date1: '',
      date2: '',
      tableData:[
        {
          date:'2018-08-11',
          orderno:'SH000001',
          ordercontent:'光明莫斯利安钻石简装200g',
          comamt:'18',
          amount:'1888',
          vipname:'生鲜配送',
          message:'张师傅'
        },
        {
          date:'2018-08-11',
          orderno:'SH000001',
          ordercontent:'光明莫斯利安钻石简装200g',
          comamt:'18',
          amount:'1888',
          vipname:'生鲜配送',
          message:'张师傅'
        },
        {
          date:'2018-08-11',
          orderno:'SH000001',
          ordercontent:'光明莫斯利安钻石简装200g',
          comamt:'18',
          amount:'1888',
          vipname:'生鲜配送',
          message:'张师傅'
        },
        {
          date:'2018-08-11',
          orderno:'SH000001',
          ordercontent:'光明莫斯利安钻石简装200g',
          comamt:'18',
          amount:'1888',
          vipname:'生鲜配送',
          message:'张师傅'
        }
      ],
      currentPage: 1


    }
  },
  methods: {

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
