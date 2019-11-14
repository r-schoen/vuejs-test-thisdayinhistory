<template>
  <div id="app" class="container">
    <div id='navbar'>
      <a href="/#/day-in-history">On This Day</a> -
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
import "@/style.scss"
export default {
  
}
</script>