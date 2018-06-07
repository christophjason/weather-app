<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Weather from './components/Weather'
import Client from './components/Client'

export default {
  name: 'App',
  components: {
    Weather,
    Client
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
