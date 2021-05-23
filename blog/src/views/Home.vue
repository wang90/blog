<template>
    <div>home page</div>
</template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'HomePage',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    }
  })
  </script>
  
  <style scoped>
  </style>
  