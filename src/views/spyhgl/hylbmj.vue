<template lang="html">

  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">搜索会员：</span>
        <el-input  style="width: 200px;" class="filter-item search_ipt" placeholder="">
        </el-input>
        <el-button class="filter-item search_btn" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn"  @click="dialogVisible = true" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">创建会员</el-button>

      </div>
      <div class="bg_white ss_box">
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">会员等级：</span>
          <el-button type="primary">全部</el-button>
          <el-button>VIP</el-button>
          <el-button>黄金</el-button>
          <el-button>钻石</el-button>
        </div>
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">会员状态：</span>
          <el-button type="primary">全部</el-button>
          <el-button>待审核</el-button>
          <el-button>已激活</el-button>
          <el-button>已冻结</el-button>
        </div>
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">会员区域：</span>
          <el-button type="primary">全部</el-button>
          <el-button>徐汇</el-button>
          <el-button>宝山</el-button>
          <el-button>杨浦</el-button>
        </div>

      </div>




      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="date" label="注册时间" >
        </el-table-column>
        <el-table-column align='center' prop="id" label="会员ID" >
        </el-table-column>
        <el-table-column align='center' prop="shopname" label="门店名称" >
        </el-table-column>
        <el-table-column align='center' prop="shopkeeper" label="店主姓名" >
        </el-table-column>
        <el-table-column align='center' prop="sex" label="性别" >
        </el-table-column>
        <el-table-column align='center' prop="phone" label="联系方式" >
        </el-table-column>
        <el-table-column align='center' prop="address" label="门店地址">
        </el-table-column>
        <el-table-column align='center' prop="grade" label="等级">
        </el-table-column>

        <el-table-column align='center' label="操作">
          <template slot-scope="scope">
                <el-button type="primary" size="mini" >激活</el-button>

            </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>

      <el-dialog title="创建会员" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">

        <div class="form_part center">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="买家店铺名称：">
              <el-input v-model="form.storename"></el-input>
            </el-form-item>
            <el-form-item label="店主名称：">
              <el-input v-model="form.name"></el-input>
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
                <el-option label="宝山区" value="1"></el-option>
                <el-option label="徐汇区" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="会员等级：">
              <el-select v-model="form.grade" placeholder="请选择">
                <el-option label="VIP" value="1"></el-option>
                <el-option label="黄金" value="2"></el-option>
                <el-option label="钻石" value="3"></el-option>
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
  data(){
    return{
      dialogVisible: false,
      tableData:[
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          sex:'男',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        }

      ],
      form:{
        storename:'',
        name:'',
        sex:'',
        phone:'',
        address:'',
        area:'',
        grade:''
      },
      currentPage: 1

    }
  }

}
</script>

<style lang="css">
</style>
