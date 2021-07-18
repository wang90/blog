<template>
    <div class="nav-bar-component">
        <div :class="[tab.type]" v-for ="(tab, index) in tabs" 
            :key="'__index' + index" @click="toPage(tab.type)">
            <i class="icon"></i>
            {{ tab.name }}</div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { PageRouters } from '/@src/router/config';

const Routers =  PageRouters.map(( v:string)  => {
    return {
        name: v, 
        type: v
    }
}) 

export default defineComponent({
    name: 'HomeNavbarComponent',
    methods: {
        toPage( type: string ) {
            this.$router.push({ name: type.toUpperCase() }).catch( err => {
                console.log(err);
            })
        }
    },
    data() {
        return {
            tabs: Routers,
        }
    }
})
</script>
<style scoped lang="scss">
    .nav-bar-component {
        display:flex;
        flex-direction: column;
        div {
            width: 100px;
            height: 30px;
            border-radius: 8px;
            background: rgba(255,255,255,0.4);
            // margin: 10px 20px;
            margin-bottom: 20px;
            cursor: pointer;
            font-size: 14px;
            .icon {
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url(../../assets/iocn.png) no-repeat;
            }
        }
    }
</style>
  