<template lang="html">

  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">店铺管理员列表</span>
        <el-input  style="width: 200px;" class="filter-item search_ipt" placeholder="">
        </el-input>
        <el-button class="filter-item search_btn" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">创建店铺管理员</el-button>

      </div>
      <div class="bg_white ss_box">

        <div class="ss_part">
          <span class="color_six top_label top_sslabel">管理员状态：</span>
          <el-button type="primary">全部</el-button>
          <el-button>未激活</el-button>
          <el-button>已激活</el-button>
          <el-button>已冻结</el-button>
        </div>

      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="date" label="注册时间" >
        </el-table-column>
        <el-table-column align='center' prop="id" label="管理员ID" >
        </el-table-column>
        <el-table-column align='center' prop="shopname" label="门店铺名称" >
        </el-table-column>
        <el-table-column align='center' prop="shopkeeper" label="店铺管理员" >
        </el-table-column>
        <el-table-column align='center' prop="storepro" label="店铺性质" >
        </el-table-column>
        <el-table-column align='center' prop="phone" label="联系方式" >
        </el-table-column>
        <el-table-column align='center' prop="address" label="公司地址">
        </el-table-column>
        <el-table-column align='center' label="操作">
          <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="dialogVisible = true" >编辑</el-button>
                <el-button type="danger" size="mini" >删除</el-button>
            </template>
        </el-table-column>
        <el-table-column align='center' label="状态操作">
          <template slot-scope="scope">
                <el-button type="success" size="mini" >激活</el-button>
            </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>

      <el-dialog title="创建公告促销" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">

        <div class="form_part center">
          <el-form ref="form" :model="form" label-width="100px">

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

      </el-dialog>

    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      dialogVisible: false,
      tableData:[
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        },
        {
          date:'2018-08-13',
          id:'1',
          shopname:'生活专送',
          shopkeeper:'李嘻嘻',
          storepro:'日配',
          phone:'14565845452',
          address:'上海市徐汇区45号',
          grade:'VIP'
        }

      ],
      form:{
        storename: '',
        name:'',
        nature:'',
        storeclass:'',
        phone:'',
        startamt:'',
        area:'',
        remarks:'',
        address:''
      },
      currentPage: 1

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
