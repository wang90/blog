<template>
    <div class="page">
      <home-navbar-component></home-navbar-component>
        <div class="page-content">switch page</div>
    </div>
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
  