<template>
 <div>
     <el-page-header  content="详情页面" class="pageheader">
     </el-page-header>
     <el-form  :model="article" ref="form" label-width="80px" @submit.native.prevent="saveAticle">
         <el-form-item label="文章标题">
             <el-input v-model="article.title"></el-input>
         </el-form-item>
        <el-form-item label="文章内容">
             <el-input v-model="article.body"  type="textarea"></el-input>
         </el-form-item>
         <el-form-item>
             <el-button type="primary" native-type="sumbit">立即创建</el-button>
             <el-button>取消</el-button>
         </el-form-item>
     </el-form>
     
 </div>
</template>

<script>
 export default {
   data () {
     return {
         article:{}
     }
   },
   methods:{
       saveAticle(){
           this.$http.post('article',this.article).then(res=>{
               this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                    });
                    this.$router.push('/article/index')
           })
        
       }
   },
   components: {

   }
 }
</script>

<style>
.pageheader{
    margin-bottom: 50px;
}
 
</style>
