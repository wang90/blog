<template>
    <div class="home-page">
      <div class="nav-bar">
        <navbar-component @start="start"></navbar-component>
      </div>
      <div class="page-footer">
        <svg-image></svg-image>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import SvgImage from '../components/SvgImage.vue'
  import NavbarComponent from '../components/NavBar.vue'
  export default defineComponent({
    name: 'HomePage',
    components: {
      SvgImage,
      NavbarComponent,
    },
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
    methods: {
      start() {
        
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
  