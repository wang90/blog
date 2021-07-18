<template>
    <div class="page-content">
      <home-navbar-component></home-navbar-component>
      <div id="pikachu">test</div>
      <div id="ash"></div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  import HomeNavbarComponent from '/@src/components/HomeNavbar.vue'
  export default defineComponent({
    name: 'Pokemon',
    components: {
      HomeNavbarComponent,
    },
    setup: () => {
      
    }
  })
</script>
  
<style scoped lang="scss">
// @import '../css/Pokenmon.scss';

</style>
  