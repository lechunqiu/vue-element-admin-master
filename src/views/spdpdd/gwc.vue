<template lang="html">
  <div class="app-container">
    <div class="filter-container ">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" v-for='item in gwcsps' >
          <div class="gwcsp_box box_shadow">
              <div class="spcheck">
                <el-checkbox v-model="item.checked">商品编码：{{item.comcode}}/辅助码：{{item.addcode}}</el-checkbox>

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
                      <p class="color_six">单价：￥{{item.price}}</p>
                      <p class="color_six">库存数量：{{item.stock}}</p>

                      <el-input-number style="width:150px; margin-top:10px" v-model="item.num"  :min="1" :max="10" label="描述文字"></el-input-number>
                  </div>
                  <div class="clear">

                  </div>
              </div>
              <hr>
              <div class="spamount">
                  <span class="amtspan">金额：￥ {{item.subtatol}}</span>
                  <el-button class="right" >删除
                  </el-button>
                  <div class="clear">

                  </div>
              </div>
          </div>
        </el-col>
      </el-row>

      <div class=" cz_btm bg_white">
        <el-checkbox v-model="checked" >全选</el-checkbox>

        <el-button style="margin-left:20px">
            删除
        </el-button>

        <span style="margin-left:50px">合计：{{tatol}}</span>

        <el-button type='primary' class="right">加单</el-button>
        <el-select v-model="value" placeholder="请绑定会员" class="right" style="margin-right:10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>


      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tatol: '9999.99',
      checked: true,
      gwcsps: [{
          checked: true,
          comcode: '20180811',
          addcode: '20180812',
          src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
          name: '(1月121批次)光明莫斯利安钻石装简装200g',
          price: '20.00',
          stock: '999',
          subtatol: '9999.99',
          num: '1'
        },
        {
          checked: true,
          comcode: '20180811',
          addcode: '20180812',
          src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
          name: '(1月121批次)光明莫斯利安钻石装简装200g',
          price: '20.00',
          stock: '999',
          subtatol: '9999.99',
          num: '1'
        },
        {
          checked: true,
          comcode: '20180811',
          addcode: '20180812',
          src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
          name: '(1月121批次)光明莫斯利安钻石装简装200g',
          price: '20.00',
          stock: '999',
          subtatol: '9999.99',
          num: '1'
        },
        {
          checked: true,
          comcode: '20180811',
          addcode: '20180812',
          src: 'https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
          name: '(1月121批次)光明莫斯利安钻石装简装200g',
          price: '20.00',
          stock: '999',
          subtatol: '9999.99',
          num: '1'
        }
      ],
      options: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }],
      value: ''

    };
  }
}
</script>

<style lang="css">


</style>
