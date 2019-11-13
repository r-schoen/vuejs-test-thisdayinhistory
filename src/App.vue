<template>
  <div id="app" class="container">
    <div id='navbar'>
      <a href="/#/">Home</a> - 
      <a href="/#/day-in-history">Day In History</a> -
      <a href="/#/todo">To Do</a>
    </div>

    <router-view />
  </div>
</template>
<style lang="scss">
#navbar {
  text-align: center;
}
</style>
<script>
export default {
  
}
</script>