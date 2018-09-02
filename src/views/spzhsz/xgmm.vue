<template lang="html">
  <div class="sp_container">
    <p class="warn-content sp_title">
      密码修改
    </p>

    <div class="bg_white">
      <hr>
      <div class="form_part center">
        <el-form ref="form"  :model="form" label-width="100px">
          <el-form-item label="旧密码">
            <el-input type='password' v-model="form.oldpassword"></el-input>
          </el-form-item>

          <el-form-item label="新密码">
            <el-input type='password' v-model="form.newpassword"></el-input>
          </el-form-item>

          <el-form-item label="确认密码">
            <el-input type='password' v-model="form.confirmpassword"></el-input>
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

  export default{
    data() {
      return {

        form: {
          oldpassword: '',
          newpassword:'',
          confirmpassword:''
        }
      }
    }
  }

</script>

<style lang="css">
</style>
