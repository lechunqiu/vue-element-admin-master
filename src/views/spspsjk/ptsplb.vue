<template lang="html">
  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">平台商品列表</span>
        <el-input  style="width: 200px;" class="filter-item search_ipt" placeholder="">
        </el-input>
        <el-button class="filter-item search_btn" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">创建平台商品</el-button>

      </div>

      <div class="bg_white ss_box">
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">平台商品分类：</span>
          <el-button type="primary">全部</el-button>
          <el-button>牛奶</el-button>
          <el-button>水果</el-button>
          <el-button>生鲜</el-button>
          <el-button>饮料</el-button>
        </div>
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">平台商品品牌：</span>
          <el-button type="primary">全部</el-button>
          <el-button>光明</el-button>
          <el-button>伊利</el-button>
          <el-button>蒙牛</el-button>
        </div>
        <div class="ss_part">
          <span class="color_six top_label top_sslabel">平台商品状态：</span>
          <el-button type="primary">全部</el-button>
          <el-button>未上架</el-button>
          <el-button>已上架</el-button>
          <el-button>已下架</el-button>
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
                      <p class="color_six">商品详情：{{item.details}}</p>
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

      <div class="pagination-container">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>




    </div>
  </div>



</template>

<script>
export default {
  data() {
    return {
      gwcsps: [{
          comcode: '20180811',
          addcode:'20180813',
          sfsj: '已上架',
          src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
          name: '(1月121批次)光明莫斯利安钻石装简装200g',
          details:'商品详情商品详情商品详情'
        },
        {
            comcode: '20180811',
            addcode:'20180813',
            sfsj: '已上架',
            src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
            name: '(1月121批次)光明莫斯利安钻石装简装200g',
            details:'商品详情商品详情商品详情'
          },
          {
              comcode: '20180811',
              addcode:'20180813',
              sfsj: '已上架',
              src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
              name: '(1月121批次)光明莫斯利安钻石装简装200g',
              details:'商品详情商品详情商品详情'
            },
            {
                comcode: '20180811',
                addcode:'20180813',
                sfsj: '已上架',
                src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
                name: '(1月121批次)光明莫斯利安钻石装简装200g',
                details:'商品详情商品详情商品详情'
              },
              {
                  comcode: '20180811',
                  addcode:'20180813',
                  sfsj: '已上架',
                  src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
                  name: '(1月121批次)光明莫斯利安钻石装简装200g',
                  details:'商品详情商品详情商品详情'
                }
      ],
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  }
}

</script>

<style lang="css">
</style>
