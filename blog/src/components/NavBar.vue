<template>
    <div class="nav-bar-component">
        <div>home</div>
        <div>about me</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'NavbarComponent',
    methods: {
   
    }
})
</script>
<style scoped lang="scss">
    .nav-bar-component {
        display:flex;
        div {
            width : 200px;
            height: 100px;
            border-radius: 10px;
            background:#fff;
            margin: 0 20px;
            cursor: pointer;
        }
    }
</style>
  