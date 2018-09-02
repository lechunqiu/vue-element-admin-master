<template lang="html">
  <div class="sp_container">
    <p class="warn-content sp_title">
      创建用户
    </p>

    <div class="bg_white">
      <hr>
      <div class="form_part center">
        <el-form ref="form"  :model="form" label-width="100px">
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input type='password' v-model="form.password"></el-input>
          </el-form-item>

          <el-form-item label="确认密码">
            <el-input type='password' v-model="form.confirmpassword"></el-input>
          </el-form-item>

          <el-form-item label="用户角色">
            <el-radio v-model="form.radio" label="1">业务员</el-radio>
            <el-radio v-model="form.radio" label="2">店铺管理员</el-radio>
            <el-radio v-model="form.radio" label="3">会员</el-radio>
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

<script>
export default {
  data() {
    return {

      form: {
        phone:'',
        password: '',
        newpassword:'',
        confirmpassword:'',
        radio:'1'
      }
    }
  }
}
</script>

<style lang="css">
</style>
