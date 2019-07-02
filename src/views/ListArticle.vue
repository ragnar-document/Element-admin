<template>
 <div>
      <el-table
        :data="articles"
        style="width: 100%">
        <el-table-column
            prop="title"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="body"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row._id)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row._id)">Delete</el-button>
      </template>
    </el-table-column>
        </el-table>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        articles:[],
        search:''
     }
   },
   methods:{
       fetch(){
        this.$http.get('article').then(res=>{
            this.articles = res.data
        })
       },
       handleEdit(id){
           this.$router.push(`/article/${id}/edit`)
       },
       handleDelete(id){
          this.$http.delete(`/article/${id}`).then(res => {
                this.$message({
                    message: '文章删除成功',
                    type: 'success'
                });
                this.fetch()
            })
       }
   },
   created(){

           this.fetch();

   },
   components: {

   }
 }
</script>

<style>

 
</style>
