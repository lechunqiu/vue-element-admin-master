<template lang="html">
  <div class="app-container">
    <div class="filter-container">
      <div class="bg_white serchadd">
        <span class="color_six top_label">搜索：</span>
        <el-input  style="width: 200px;" class="filter-item" placeholder="">
        </el-input>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" >搜索</el-button>

        <el-button class="filter-item right ggcxtjbtn add_btn" style="margin-left: 10px;"  type="primary" icon="el-icon-edit">陈列拍照</el-button>

      </div>
      <div class="bg_white ss_box">
        <div  class="ss_part">
          <span  class="color_six  top_label ">时间范围：</span>
          <el-date-picker class="filter-item" style="width:160px" v-model="date1" type="date" placeholder="开始时间">
          </el-date-picker>
          <span class="color_zwwz">至</span>
          <el-date-picker class="filter-item" style="width:160px" v-model="date2" type="date" placeholder="结束时间">
          </el-date-picker>
        </div>

        <div class="ss_part">
          <span  class="color_six  top_label ">陈列筛选：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in allshops"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in salesmen"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

        </div>




      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align='center' prop="date" label="陈列时间" >
        </el-table-column>
        <el-table-column align='center' prop="storename" label="门店名称" >
        </el-table-column>
        <el-table-column align='center' prop="theme" label="陈列主题">
        </el-table-column>
        <el-table-column align='center' prop="content" label="陈列内容">
        </el-table-column>
        <el-table-column align='center' prop="img" label="陈列图片">

        </el-table-column>
        <el-table-column align='center' prop="name" label="陈列人">
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
      date1: '',
      date2: '',
      tableData:[
        {
          date:'2018-08-16',
          storename:'生活专送',
          theme:'光明牛奶配送破损',
          content:'这批次光明牛奶配送破损',
          img:'',
          name:'李二'
        },
        {
          date:'2018-08-16',
          storename:'生活专送',
          theme:'光明牛奶配送破损',
          content:'这批次光明牛奶配送破损',
          img:'',
          name:'李二'
        },
        {
          date:'2018-08-16',
          storename:'生活专送',
          theme:'光明牛奶配送破损',
          content:'这批次光明牛奶配送破损',
          img:'',
          name:'李二'
        }

      ],
      allshops:[
        {
          value: '选项1',
          label: '全部门店'
        },
        {
          value: '选项2',
          label: '门店一'
        },
        {
          value: '选项3',
          label: '门店二'
        }
      ],
      salesmen:[
        {
          value: '选项1',
          label: '全部业务员'
        },
        {
          value: '选项2',
          label: '业务员二'
        },
        {
          value: '选项3',
          label: '业务员二'
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
