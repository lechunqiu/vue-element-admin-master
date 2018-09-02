<template lang="html">

  <div class="app-container">
    <div class="filter-container">

      <div class="bg_white serchadd">
          <p class="color_zywz inline_block top_label"  >平台信息通知 </p>
          <el-button class="filter-item right ggcxtjbtn add_btn"  @click="dialogVisible = true" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">创建信息</el-button>
          <div class="clear">

          </div>
      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="date" label="创建时间" >
        </el-table-column>
        <el-table-column align='center' prop="grade" label="权重" >
        </el-table-column>
        <el-table-column align='center' prop="title" label="标题" >
        </el-table-column>
        <el-table-column align='center' prop="content" label="内容">
        </el-table-column>

        <el-table-column align='center' label="操作">
          <template slot-scope="scope">
                <el-button type="primary" size="mini"  @click="dialogVisible = true">编辑</el-button>
                <el-button type="danger" size="mini" >删除</el-button>
            </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>

      <el-dialog title="创建信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="form_part center">
          <el-form ref="form" :model="form" label-width="130px">
            <el-form-item label="平台信息权重：">
              <el-select v-model="form.standard" placeholder="请选择">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="平台信息标题：">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="平台信息详情：">
              <el-input type="textarea" v-model="form.remarks"></el-input>
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
      dialogVisible: false,
      tableData:[
        {
          date:'2018-08-16',
          grade:'1',
          title:'五一陈列',
          content:'内容内容内容'
        },
        {
          date:'2018-08-16',
          grade:'1',
          title:'五一陈列',
          content:'内容内容内容'
        },
        {
          date:'2018-08-16',
          grade:'1',
          title:'五一陈列',
          content:'内容内容内容'
        }

      ],
      form: {
        standard: '',
        title: '',
        remarks: ''
      },
      currentPage:'1'

    }
  }

}
</script>

<style lang="css">
</style>
