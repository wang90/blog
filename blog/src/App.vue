<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <h4>This  is my blog</h4>
    <router-link to="/">home</router-link>
    <router-link to="/wow">wow</router-link>
    <router-view />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
