<template lang="html">

  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">店铺分类：</span>
        <el-input  style="width: 200px;" class="filter-item search_ipt" placeholder="">
        </el-input>
        <el-button class="filter-item search_btn" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">创建店铺分类</el-button>
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
                <el-button type="primary" size="mini" >编辑</el-button>
                <el-button type="danger" size="mini" >删除</el-button>
            </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
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

      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }

    }
  }

}
</script>

<style lang="css">
</style>
