<template>
 <div>
     <el-page-header @back="goBack" content="详情页面" class="pageheader">
     </el-page-header>
     <el-form  :model="article" ref="form" label-width="80px" @submit.native.prevent="saveAticle">
         <el-form-item label="文章标题">
             <el-input v-model="article.title"></el-input>
         </el-form-item>
        <el-form-item label="文章内容">
             <el-input v-model="article.body"  type="textarea"></el-input>
         </el-form-item>
         <el-form-item>
             <el-button type="primary" native-type="sumbit">保存</el-button>
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
           this.$http.put(`article/${this.$route.params.id}`,this.article).then(res=>{
               this.$message({
                    showClose: true,
                    message: '保存成功 ',
                    type: 'success'
                    });
                    this.$router.push('/article/index')
           })
       },
       fetch() {
        this.$http.get(`/article/${this.$route.params.id}`).then(res => {
          this.article = res.data
        })
      },
        goBack() {
            this.$router.push('/article/index')
        }
   },

   created(){
       this.fetch()
   }
  
 }
</script>

<style>
.pageheader{
    margin-bottom: 50px;
}
 
</style>
