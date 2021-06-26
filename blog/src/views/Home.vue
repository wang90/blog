<template>
    <div class="home-page">
      <div class="nav-bar">
        <welcome-text v-if="loading" @start="start"></welcome-text>
        <navbar-component v-if="!loading"></navbar-component>
      </div>
     
    </div>
</template>
  
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import WelcomeText from '/@src/components/WelcomeText.vue'
  import NavbarComponent from '/@src/components/Navbar.vue'

  export default defineComponent({
    name: 'HomePage',
    components: {

      WelcomeText,
      NavbarComponent,
    },
    setup: () => {
      const count = ref(0)
      const loading = ref(true)
      return { 
          count,
          loading,
      }
    },
    methods: {
      start() {
        console.log('start')
        this.loading = false;
      }
    }
  })
  </script>
  
<style scoped>
    .home-page {

    }
  </style>
  