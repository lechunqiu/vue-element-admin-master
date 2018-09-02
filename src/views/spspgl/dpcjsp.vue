<template >
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
  <div class="bg_white" style='margin-top:20px'>
    <div class="part_top">
      <p class="color_zywz top_label">商品库存价格 </p>
    </div>
    <hr>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column align='center' label="商品编码" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.code" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="辅助码" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.codetwo" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="商品规格" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.standard" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="VIP" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.vip" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="黄金" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.viptwo" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="钻石" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.vipthree" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="库存数量" >
        <template slot-scope="scope">
          <!-- <a class="table_href" href="#/spdpdd/dpddxq">{{scope.row.orderno}}</a> -->
            <el-input v-model="scope.row.count" placeholder="请输入"></el-input>
        </template>
      </el-table-column>
      <el-table-column align='center' label="操作" >
        <template slot-scope="scope">
          <el-button class="plusminus"  type='success' icon="el-icon-plus" circle></el-button>
          <el-button class="plusminus"  type="danger" icon="el-icon-minus" circle></el-button>
        </template>
      </el-table-column>

    </el-table>


  </div>
  <div class="bg_white" style='margin-top:20px'>
    <div class="form_part center text_center">
      <el-button type="primary">创建</el-button>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      form: {
        storeclass:'',
        day:'',
        message:'',
        remarks:''

      },
      tableData:[
        {
          code:'',
          codetwo:'',
          standard:'',
          vip:'',
          viptwo:'',
          vipthree:'',
          count:''
        }
      ]
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
