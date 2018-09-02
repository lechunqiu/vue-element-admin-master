<template >
  <div class="sp_container">
    <p class="warn-content sp_title ">
      支付方式（多选）
    </p>
    <div class="fkfsxz">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="线下转账"></el-checkbox>
        <el-checkbox label="货到付款"></el-checkbox>
        <el-checkbox label="赊账"></el-checkbox>
        <!-- <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox> -->
      </el-checkbox-group>
    </div>

    <br>

    <div class="bg_white">


      <div class="part_top">
          <p class="color_zywz top_label">线下商家交易 </p>
      </div>
      <hr>
      <div class="form_part center">
        <el-form ref="form"  :model="form" label-width="100px">
          <el-form-item label="支付宝账号">
            <el-input v-model="form.account"></el-input>
          </el-form-item>

          <el-form-item label="银行卡号">
            <el-input v-model="form.cardno"></el-input>
          </el-form-item>

          <el-form-item label="开户行名称">
            <el-input v-model="form.bankname"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button >取消</el-button>
          </el-form-item>

        </el-form>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {
        checkList: ['线下转账'],
        form: {
          account: '',
          cardno:'',
          bankname:''
        }
      }
    }
  }

</script>

<style media="screen">

</style>
