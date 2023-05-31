<template class="app">
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item><router-link to="/">Главная страница</router-link></el-menu-item>
    <el-menu-item><router-link to="/login">Авторизация</router-link></el-menu-item>
    <el-menu-item><router-link to="/shop">Магазин</router-link></el-menu-item>
  </el-menu>

  <router-view/>
</template>

<script>
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
