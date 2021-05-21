<template>
  <div id="app">
    <WebViewer initialDoc="https://clearlywind.com/pdf/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5.pdf"/>
  </div>
</template>

<script>
import WebViewer from './components/WebViewer.vue'

export default {
  name: 'App',
  components: {
    WebViewer
  }
}
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
