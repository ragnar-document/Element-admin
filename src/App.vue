<template>
 <div>
   <el-container>
     <el-aside width="200px">
       <!-- Aside content -->
        <el-col>
            <el-menu
              router
              default-active="2"
              class="el-menu-vertical-demo"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航</span>
                </template>
                <el-menu-item index="/article/create">新建文章</el-menu-item>
                <el-menu-item index="/article/index">文章列表</el-menu-item>
                
              </el-submenu>

            </el-menu>
          </el-col>
        </el-row>
     </el-aside>
     <el-container>
       <el-main>
         <!-- Main content -->
         <router-view></router-view>
       </el-main>
     </el-container>
   </el-container>
   
 </div>
</template>

<script>
 export default {
    data() {
        return {
          
        }
      },
    methods: {
     
    }
  }
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
 
</style>
