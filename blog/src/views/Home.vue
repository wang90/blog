<template>
    <div class="home-page">
      <div class="nav-bar">
        <welcome-text v-if="loading" @start="start"></welcome-text>
        <nav-bar-compontent v-if="!loading"></nav-bar-compontent>
      </div>
      <div class="page-footer">
        <svg-image></svg-image>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import SvgImage from '/@src/components/SvgImage.vue'
  import WelcomeText from '/@src/components/WelcomeText.vue'
  import NavbarComponent from '/@src/components/Navbar.vue'

  export default defineComponent({
    name: 'HomePage',
    components: {
      SvgImage,
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
      width: 100%;
      height: 100%;
      background-image: radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .page-footer {
      width: 100%;
      height: 300px;
      position: fixed;
      bottom:0;
    }
    .nav-bar { 
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
    }
  </style>
  