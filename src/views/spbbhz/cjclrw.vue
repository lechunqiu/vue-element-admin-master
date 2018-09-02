<template lang="html">

  <div class="sp_container">
    <div class="bg_white">
      <div class="part_top">

          <p class="color_zywz top_label">创建陈列任务</p>


      </div>

      <hr>

      <div class="form_part center">
          <el-form ref="form"  :model="form" label-width="100px">

            <el-form-item label="所属门店：">
              <el-select v-model="form.storeclass" placeholder="请选择">
                <el-option label="生活专送宝山店" value="1"></el-option>
                <el-option label="生活专送上大店" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="陈列主题：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="陈列内容：">
              <el-input type="textarea" v-model="form.details"></el-input>
            </el-form-item>

            <div class="part_top">
                <p class="color_zywz">反馈图片</p>
            </div>
            <hr style="margin-bottom:18px">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <br/><br/>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">创建</el-button>
              <el-button>取消</el-button>
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
          storeclass: '',
          name:'',
          details:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }


    }
  }


</script>

<style lang="css">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
