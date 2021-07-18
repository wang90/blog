<template>
    <div class="nav-bar-component">
        <div :class="[ tab.type, {'active':  $route.name === tab.name.toUpperCase()}]" v-for ="(tab, index) in tabs" 
            :key="'__index' + String(index)" @click="toPage(tab.type)">
            <i class="icon"></i>
            {{ tab.name }}</div>
    </div>
</template>
  
<script lang="ts">
import { ref, defineComponent } from 'vue'
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
    setup: () => {
      return { 
        tabs: Routers,
      }
    },
})
</script>
<style lang="scss" scoped>
    .nav-bar-component {
        display:flex;
        flex-direction: column;
        div {
            width: 100px;
            height: 30px;
            border-radius: 4px;
            background: rgba(255,255,255,0.4);
            margin-bottom: 20px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            justify-items: center;
            align-self: center;
            line-height: 30px;
            position: relative;
            transition: all 0.2s;
            overflow: hidden;
            .icon {
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url(../assets/iocn.png) no-repeat;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100% 100%;
                vertical-align: middle;
                margin-right: 5px;
                margin-left: 5px;
                margin-top: 5px;
            }
            &::before {
                position: absolute;
                content: "";
                width: 0;
                height: 100%;
                transition: width 0.3s;
                background: rgba(255, 255, 255, 0.1);
            }
            &:hover,
            &.active {
                width: 100%;
                color: #fff;
                &::before {
                    width: 100%;
                }
            }
        }
    }
</style>
  