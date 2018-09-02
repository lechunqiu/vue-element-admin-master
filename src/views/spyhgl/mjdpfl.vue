<template lang="html">

  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">店铺分类：</span>
        <el-input  style="width: 200px;" class="filter-item search_ipt" placeholder="">
        </el-input>
        <el-button class="filter-item search_btn" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;" @click="dialogVisible = true"   type="primary" icon="el-icon-edit">创建店铺分类</el-button>
      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column align='center' prop="grade" label="分类权重" width="180">
        </el-table-column>
        <el-table-column align='center' prop="classname" label="分类名称">
        </el-table-column>

        <el-table-column align='center' label="操作">
          <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="dialogVisible = true">编辑</el-button>
                <el-button type="danger" size="mini" >删除</el-button>
            </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>

      <el-dialog title="创建店铺分类" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="form_part center">
          <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="商品分类权重：">
              <el-select v-model="form.standard" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品分类名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="dialogVisible = false">确认</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
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
      dialogVisible:false,
      tableData:[
        {
          id:'1',
          grade:'1',
          classname:'生鲜牛奶'
        },
        {
          id:'2',
          grade:'1',
          classname:'生鲜牛奶'
        },
        {
          id:'3',
          grade:'1',
          classname:'生鲜牛奶'
        }

      ],
      form:{
        standard:'',
        name:''
      },
      currentPage:'1'

    }
  }

}
</script>

<style lang="css">
</style>
