<template>
    <div class="page">
      <home-navbar-component></home-navbar-component>
        <div class="page-content">wow page</div>
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
  