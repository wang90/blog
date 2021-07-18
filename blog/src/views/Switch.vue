<template>
    <home-navbar-component></home-navbar-component>
    <div class="page-content">Switch page</div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import HomeNavbarComponent from '/@src/components/HomeNavbar.vue'
  export default defineComponent({
    name: 'Switch',
    components: {
      HomeNavbarComponent,
    },
    setup: () => {
      
    }
  })
  </script>
  
  <style scoped>
  </style>
  