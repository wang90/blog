<template>
  <div class="page home-page">
    <div class="nav-bar">
      <welcome-text class="welcome-text" 
        v-if="loading" @start="loading = false;"></welcome-text>
      <home-navbar-component v-if="!loading"></home-navbar-component>
    </div>
    <div class="page-content" v-if="!loading">
      home
    </div>
  </div>
</template>
  
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import WelcomeText from '/@src/components/WelcomeText.vue'
  import HomeNavbarComponent from '/@src/components/HomeNavbar.vue'

  export default defineComponent({
    name: 'HomePage',
    components: {
      WelcomeText,
      HomeNavbarComponent,
    },
    setup: () => {
      const count = ref(0)
      const loading = ref( true )
      return { 
          count,
          loading,
      }
    },
    methods: {

    }
  })
  </script>
  
<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  .welcome-text {
    position: absolute;
    left: 50%;
    left:0;
    right: 0;
    top:50%;
    transform: translate(0, -50%);
    margin-top: -30px;
    max-width: 100%;
    z-index: 999;
  }
}

</style>
  