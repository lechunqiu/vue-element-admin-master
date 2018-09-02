<template >
  <div class="sp_container">
    <div class="bg_white">
        <div class="part_top">
            <p class="color_zywz top_label">店铺状态： <span class="color_danger">待激活</span>   </p>
        </div>
        <hr>
        <div class="form_part center">
          <el-form ref="form"  :model="form" label-width="100px">
            <el-form-item label="店铺名称">
              <el-input v-model="form.storename"></el-input>
            </el-form-item>
            <el-form-item label="店铺管理员">
              <el-input v-model="form.admin"></el-input>
            </el-form-item>
            <el-form-item label="店铺性质">
                <el-radio-group v-model="form.nature">
                  <el-radio label="1">预售</el-radio>
                  <el-radio label="2">日配</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="店铺所属分类">
                <el-select v-model="form.storeclass" placeholder="请选择分类">
                  <el-option label="乳制品" value="1"></el-option>
                  <el-option label="乳制品2" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="店铺联系方式">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>

              <el-form-item label="起送金额">
                <el-input v-model="form.startamt"></el-input>
              </el-form-item>
              <el-form-item label="所在区域">
                <el-select v-model="form.area" placeholder="请选择分类">
                  <el-option label="区域1" value="1"></el-option>
                  <el-option label="区域2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主营范围">
                <el-input type="textarea" v-model="form.scope"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remarks"></el-input>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input type="textarea" v-model="form.address"></el-input>
              </el-form-item>
              <div class="part_top">
                  <p class="color_zywz">店铺展示图片    </p>
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

              <div class="part_top">
                  <p class="color_zywz">营业执照    </p>
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
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
               </el-form-item>

          </el-form>
        </div>


    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        form: {
          storename: '',
          name:'',
          nature:'',
          storeclass:'',
          phone:'',
          startamt:'',
          area:'',
          remarks:'',
          address:''

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

<style media="screen">
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
