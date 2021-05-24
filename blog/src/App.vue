<template>
  <div class="content">
    <div class="page">
      <router-view />
    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  }
})
</script>

<style>
  *{ margin: 0;padding:0 }
  body,html,#app ,.content{width: 100%;height:100%}
  .content {
    display: flex;
    justify-content: space-between;
  }
  .page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
