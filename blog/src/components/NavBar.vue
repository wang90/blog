<template>
    <div>
        <img src="" alt="">
        <div>
            <router-link to="/">home</router-link>
        </div>
        <div>
            <router-link to="/wow">wow</router-link>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Navbar'
})
</script>
  