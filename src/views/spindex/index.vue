<template>
  <div class="sp_container">
    <p class="warn-content sp_title">
      今日提醒
    </p>
    <el-row :gutter='20'>

      <el-col :span="6"  v-for="item in jrtxs">
        <el-card shadow="always">
          <div class="jrtx_box">
              <div class="jrtx_left">
                    {{item.title}}
              </div>
              <div class="jrtx_right">
                    {{item.text}}


              </div>
              <div class="clear_both">

              </div>
          </div>
        </el-card>
      </el-col>



    </el-row>

    <p class="warn-content sp_title">
      待处理订单
    </p>
    <el-row :gutter='20'>

      <el-col :span="4" >
        <div class="a_hover_box">


        <el-card shadow="always">
          <div class="dcl_part a_hover_box">
            <p>待付款</p>
            <span >({{dfk_num}})</span>


          </div>

        </el-card>
        <a class="a_hover" href="#"></a>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="a_hover_box">


        <el-card shadow="always">
          <div class="dcl_part a_hover_box">
            <p>待确定</p>
            <span>({{dqd_num}})</span>

          </div>
        </el-card>
        <a class="a_hover" href="#"></a>
        </div>
      </el-col>
      <el-col :span="4" >
        <div class="a_hover_box">


        <el-card shadow="always">
          <div class="dcl_part a_hover_box">
          <p>待发货</p>
          <span>({{dfh_num}})</span>
        </div>
        </el-card>
          <a class="a_hover" href="#"></a>
          </div>
      </el-col>
      <el-col :span="4" >
        <div class="a_hover_box">
        <el-card shadow="always">
          <div class="dcl_part ">
          <p>待签收</p>
          <span>({{dqs_num}})</span>

        </div>
        </el-card>
        <a class="a_hover" href="#"></a>
      </div>
      </el-col>
      <el-col :span="4" >
        <div class="a_hover_box">
          <el-card shadow="always">
            <div class="dcl_part ">
            <p>已完成</p>
            <span>({{ywc_num}})</span>
            <a class="a_hover" href="#"></a>
          </div>
          </el-card>
          <a href="#" class="a_hover"></a>
        </div>


      </el-col>

    </el-row>



    <p class="warn-content sp_title">
      平台信息提醒
    </p>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="type"
        label="信息类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="details"
        label="信息详情">
      </el-table-column>
    </el-table>

  </div>


</template>

<script>
export default {
    data() {
      return {
        jrtxs:[{
          title:'预报公告',
          text:'由于双十一活动期间订单量的激增，配送时效会略受影响，您订购的商品我们会尽快为你配送，因此给您带来的不便深表歉意，敬请谅解。'
        },{
          title:'店铺促销',
          text:'由于双十一活动期间订单量的激增，配送时效会略受影响，您订购的商品我们会尽快为你配送，因此给您带来的不便深表歉意，敬请谅解。'
        }],
        dfk_num:'6',
        dqd_num:'6',
        dfh_num:'6',
        dqs_num:'6',
        ywc_num:'7',
        tableData: [{
          type: '系统升级',
          date: '2018-08-09',
          details: '  由于双十一活动期间订单量的激增，配送时效会略受影响，您订购的商品我们会尽快为你配送，因此给您带来的不便深表歉意，敬请谅解。'
        }, {
          type: '系统升级',
          date: '2018-08-09',
          details: '  由于双十一活动期间订单量的激增，配送时效会略受影响，您订购的商品我们会尽快为你配送，因此给您带来的不便深表歉意，敬请谅解。'
        }, {
          type: '系统升级',
          date: '2018-08-09',
          details: '  由于双十一活动期间订单量的激增，配送时效会略受影响，您订购的商品我们会尽快为你配送，因此给您带来的不便深表歉意，敬请谅解。'
        }]

      }
    }
  }

</script>

<style>
.dcl_part{
  text-align: center;
}
.dcl_part p{
  font-size: 20px;
  margin-bottom: 6px;
  margin-top: 0px;
  color: #606266
}

.jrtx_left{
  width: 22%;
  float: left;
  color: #666666
}
.jrtx_right{
  width: 78%;
  float: right;
  font-size: 14px;
  line-height: 20px;
  color: #999999
}
.clear_both{
  clear: both;
}
.spjrtx_box{
  padding-left: 20px;
  padding-right: 20px

}


  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .sp_border{
    border: 1px solid #cccccc;
  }
  .box_yy{
    box-shadow: 1px 1px 6px  rgba(0, 0, 0, 0.1);
  }


</style>
