<template>
    <div class="welcome-text-component">
        <div class="title" @click="start">Welcome to my world</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'WelcomeText',
    methods: {
        start() {
            this.$emit('start', true)
        }
    }
})
</script>
<style scoped lang="scss">
.welcome-text-component  {
    .title {
        font-size: 40px;
        color: rgba(255,255,255,0.8);
        text-shadow: 0 0 4px rgba(255,255,255,0.6);
        animation: fadeio 10s;
        // white-space: pre;
        letter-spacing: 2px;
        cursor: pointer;
        padding: 8px 25px;
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.2s;
        text-transform: Uppercase;
        font-weight: 600;
        text-align: center;
    }
}
@keyframes fadeio {
    /*设置内容由显示变为隐藏*/
    0% {
        opacity: 0;
        transform: scale(0.4);
    }
    5% {
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
  