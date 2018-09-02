<template lang="html">

  <div class="sp_container">
    <div class="bg_white">
      <div class="part_top">
        <p class="color_zywz top_label">店铺商品基本信息 </p>
      </div>
      <hr>
      <div class="form_part center">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="店铺商品分类">
            <el-select v-model="form.storeclass" placeholder="请选择分类">
              <el-option label="乳制品" value="1"></el-option>
              <el-option label="乳制品2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="起售天数">
            <el-input v-model="form.day"></el-input>
          </el-form-item>
          <el-form-item label="促销信息">
            <el-input type="textarea" v-model="form.message"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remarks"></el-input>
          </el-form-item>
          <!-- <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                  <el-button>取消</el-button>
                 </el-form-item> -->
        </el-form>
      </div>
    </div>

    <div class="bg_white" style="margin-top:20px">
      <div class="part_top">
        <p class="color_zywz top_label">商品库存价格信息</p>
      </div>
      <hr>
      <div class="form_part center">
        <el-form ref="form" :model="formtwo" label-width="100px">
          <el-form-item label="商品编码">
            <el-input v-model="formtwo.code"></el-input>
          </el-form-item>
          <el-form-item label="商品编码">
            <el-input v-model="formtwo.codetwo"></el-input>
          </el-form-item>
          <el-form-item label="商品规格">
            <el-input v-model="formtwo.standard"></el-input>
          </el-form-item>
          <el-form-item label="VIP">
            <el-input v-model="formtwo.vip"></el-input>
          </el-form-item>
          <el-form-item label="黄金">
            <el-input v-model="formtwo.viptwo"></el-input>
          </el-form-item>
          <el-form-item label="钻石">
            <el-input v-model="formtwo.vipthree"></el-input>
          </el-form-item>
          <el-form-item label="库存数量">
            <el-input v-model="formtwo.count"></el-input>
          </el-form-item>

        </el-form>
      </div>
    </div>

    <div class="bg_white" style='margin-top:20px'>
      <div class="form_part center text_center">
        <el-button type="primary">编辑/保存</el-button>
      </div>
    </div>


  </div>


</template>

<script>
export default {
  data(){
    return{
      form: {
        storeclass:'',
        day:'',
        message:'',
        remarks:''
      },
      formtwo:{
        code:'',
        codetwo:'',
        standard:'',
        vip:'',
        viptwo:'',
        vipthree:'',
        count:''
      }
    }
  }
}
</script>

<style lang="css">
</style>
