<template>
    <div class="nav-bar-component">
        <div class="title" @click="start">Welcome to my world</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'NavbarComponent',
    methods: {
        start() {
            this.$emit('start', true)
        }
    }
})
</script>
<style scoped>
    .nav-bar-component .title {
        font-size: 40px;
        color: rgba(255,255,255,0.8);
        text-shadow: 0 0 4px rgba(255,255,255,0.6);
        animation: fadeio 15s;
        /* animation-delay: 4s; */
        white-space: pre;
        letter-spacing: 2px;
        cursor: pointer;
        padding: 8px 25px;
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.2s;
        text-transform:Uppercase;
        font-weight: 600;
    }
    .nav-bar-component .title:hover {
        border-color: rgba(255,255,255,0.8);
        background-color: rgba(0,0,0,0.1);
    }
    @keyframes fadeio {
        /*设置内容由显示变为隐藏*/
        0% {
            opacity: 0;
            transform: scale(0.4);
        }
        30% {
            opacity: 0;
        }
        80% {
            opacity: 0.6;
        }
        100% {
            opacity: 0.6;
            transform: scale(1);
        }
    }
</style>
  