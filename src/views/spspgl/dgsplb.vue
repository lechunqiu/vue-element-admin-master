<template lang="html">
  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <p class="color_zywz inline_block top_label">平台商品编号：{{code}}  </p>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;" @click="dialogVisible = true" type="primary" icon="el-icon-edit">创建商品</el-button>
        <div class="clear">
        </div>
      </div>

      <div class="bg_white serchadd">

        <div class="comimgtitie">
            <div class="comimg left">
              <img :src="src" alt="商品图片">
            </div>
            <div class="comtitle right">
                <p>
                  {{name}}
                </p>
                <p class="color_six">商品详情：{{details}}</p>
            </div>
            <div class="clear">
            </div>
        </div>

      </div>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" v-for='item in gwcsps' class="splb_box" >
          <div class="gwcsp_box box_shadow">
              <div class="spcheck">
                <p class="ptsmbh">商品编码：{{item.comcode}}/辅助码：{{item.addcode}} <span class="right color_nine">{{item.sfsj}}</span> </p>
              </div>

              <hr>
              <div class="comimgtitie">
                  <div class="comimg left">
                    <img :src="item.src" alt="商品图片">
                  </div>
                  <div class="comtitle right">
                      <p>
                        {{item.name}}
                      </p>
                      <div class="spvip">
                          <span>VIP:￥{{item.vip}}</span>
                          <span>黄金:￥{{item.viptwo}}</span>
                          <span>钻石:￥{{item.vipthree}}</span>
                          <span>库存:￥{{item.count}}</span>
                      </div>
                  </div>
                  <div class="clear">
                  </div>
              </div>
              <hr>
              <div class="spamount">


                  <el-button type='primary' class="right"  style='margin-left:10px' >上架
                  </el-button>
                  <el-button type='primary' class="right"  style='margin-left:10px'  >删除
                  </el-button>
                  <el-button type='primary' class="right" >编辑
                  </el-button>
                  <div class="clear">

                  </div>
              </div>
          </div>
        </el-col>
      </el-row>



    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      code:'DF000001',
      src:'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
      name:'(1月121批次)光明莫斯利安钻石装简装200g',
      details:'商品详情商品详情商品详情',
      gwcsps:[
        {
            comcode: '20180811',
            addcode:'20180813',
            sfsj: '已上架',
            src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
            name: '(1月121批次)光明莫斯利安钻石装简装200g',
            vip:'66.66',
            viptwo:'66.66',
            vipthree:'66.66',
            count:'66'
          },
          {
              comcode: '20180811',
              addcode:'20180813',
              sfsj: '已上架',
              src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
              name: '(1月121批次)光明莫斯利安钻石装简装200g',
              vip:'66.66',
              viptwo:'66.66',
              vipthree:'66.66',
              count:'66'
            },
             {
                  comcode: '20180811',
                  addcode:'20180813',
                  sfsj: '已上架',
                  src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
                  name: '(1月121批次)光明莫斯利安钻石装简装200g',
                  vip:'66.66',
                  viptwo:'66.66',
                  vipthree:'66.66',
                  count:'66'
                },
                {
                    comcode: '20180811',
                    addcode:'20180813',
                    sfsj: '已上架',
                    src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
                    name: '(1月121批次)光明莫斯利安钻石装简装200g',
                    vip:'66.66',
                    viptwo:'66.66',
                    vipthree:'66.66',
                    count:'66'
                  }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
