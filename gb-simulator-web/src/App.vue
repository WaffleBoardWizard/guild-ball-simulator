<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

body{
  padding: 0;
  margin: 0;
}

.sidebar>.md-tabs{
  height: 100% !important;
}

.sidebar>.md-tabs .md-tabs-content{
  height: 100% !important;
}

.sidebar>.md-tabs .md-tab{
  height: 100% !important;
  overflow: auto !important;
}

</style>
