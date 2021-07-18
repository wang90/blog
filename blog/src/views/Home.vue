<template>
  <div class="home-page">
    <div class="nav-bar">
      <welcome-text class="welcome-text" 
        v-if="loading" @start="loading = false;"></welcome-text>
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
    top:50%;
    transform: translate(-50%);
    margin-top: -30px;
    max-width: 100%;
    z-index: 999;
  }
}

</style>
  