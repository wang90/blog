<template>
  <div class="content">
    <div class="page">
      <div class="view-content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
      <div class="page-footer">
        <svg-image></svg-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgImage from './components/SvgImage.vue'

export default defineComponent({
  name: 'App',
  components: {
    SvgImage,
  }
})
</script>

<style lang="scss">
*{ margin: 0; padding: 0 }
body,html,#app ,.content{ width: 100%;height:100% }
body{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.content {
  display: flex;
  justify-content: space-between;
  background-image: radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%);
  overflow: hidden;
}
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.view-content {
  flex: 1;
  padding: 40px;
  .page {
    width: 100%;
    height:100%;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;
    .page-content { 
      flex: 1;
      height: 85%;
      margin-left: 20px;
      background:rgba(255,255,255,0.05);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 0 1px 1px rgba(255,255,255,0.05);
      color: #fff;
    }
  }

}
</style>
