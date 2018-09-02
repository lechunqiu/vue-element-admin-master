<template lang="html">
  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <p class="color_zywz inline_block top_label">常规订单信息  </p>
        <span class="color_six right inline_block ddxxzt"  >状态：待支付</span>
        <span class="color_six right inline_block ddxxzt" style='margin-right:20px' >店铺名：生活专送</span>
        <div class="clear">
        </div>
      </div>

      <div class="bg_white ss_box">
        <div class="ss_part">
          <span  class="color_six top_label" style="margin-right:20px">订单号:123456789</span>

          <span  class="color_six top_label">下单时间：2018-08-16 17:20</span>
        </div>
        <div  class="ss_part">
          <span  class="color_six top_label">预期送货日：</span>
          <el-date-picker class="filter-item" style="width:160px" v-model="date1" type="date" placeholder="开始时间">
          </el-date-picker>
        </div>

        <div class="ss_part">
          <span  class="color_six  top_label ">配送信息：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in peisongxx"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <span  class="color_nine  ddxq_span">联系方式：15265454568 &nbsp;&nbsp;&nbsp;沪A000000</span>
        </div>

        <div class="ss_part">
          <span  class="color_six  top_label ">会员信息：</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in huiyuanxx"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <span  class="color_nine  ddxq_span">联系方式：15265454568 &nbsp;&nbsp;&nbsp;李四</span>

        </div>

      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="id" label="ID">
        </el-table-column>
        <el-table-column align='center' prop="code" label="商品编码">
        </el-table-column>
        <el-table-column align='center' prop="codetwo" label="辅助码">
        </el-table-column>
        <el-table-column align='center' prop="details" label="商品详情">
        </el-table-column>
        <el-table-column align='center' prop="standard" label="规格">
        </el-table-column>
        <el-table-column align='center' prop="amount" label="商品数量">
        </el-table-column>
        <el-table-column align='center' prop="price" label="商品单价">
        </el-table-column>
        <el-table-column align='center' prop="total" label="总金额">
        </el-table-column>
        <el-table-column align='center'  label="商品图片" >
          <template slot-scope="scope">
            <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <img class='tableimg' :src="scope.row.imgsrc" alt="">
          </template>
        </el-table-column>

      </el-table>

      <div class=" cz_btm bg_white">

        <p class="inline_block" style="margin-left:50px">合计数量：<span class="color_danger">{{tatol}}</span>   </p>
        <p class="inline_block" style="margin-left:50px">合计金额：<span class="color_danger">{{tatolamt}}</span></p>
        <el-button type='primary' class="right">编辑/保存</el-button>

        <div class="clear">

        </div>

      </div>



    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      peisongxx:[

          {
            value: '1',
            label: '张明'
          },
          {
            value: '2',
            label: '刘明'
          }

      ],
      value: '',
      huiyuanxx:[
        {
          value: '1',
          label: '徐汇生活专送'
        },
        {
          value: '2',
          label: '徐汇生活专送'
        }
      ],
      value2:'',

      tableData:[
        {
          id:'1',
          code:'SH000001',
          codetwo:'SH000001',
          details:'商品详情',
          standard:'件',
          amount:'5',
          price:'66.66',
          total:'888.99',
          imgsrc:'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'

        },
        {
          id:'1',
          code:'SH000001',
          codetwo:'SH000001',
          details:'商品详情',
          standard:'件',
          amount:'5',
          price:'66.66',
          total:'888.99',
          imgsrc:'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'

        },
        {
          id:'1',
          code:'SH000001',
          codetwo:'SH000001',
          details:'商品详情',
          standard:'件',
          amount:'5',
          price:'66.66',
          total:'888.99',
          imgsrc:'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'

        }
      ],
      tatol:'66',
      tatolamt:'999.99'
    }
  }
}
</script>

<style lang="css">
</style>
