<template>
    <div class="page-content">
      <home-navbar-component></home-navbar-component>
      Wow page
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import HomeNavbarComponent from '/@src/components/HomeNavbar.vue'
  export default defineComponent({
    name: 'Wow',
    components: {
      HomeNavbarComponent,
    },
    setup: () => {
      
    }
  })
  </script>
  
  <style scoped>
  </style>
  