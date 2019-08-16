<template lang="html">
  <div id="app">
    <slider></slider>
  </div>
</template>

<script>
import Slider from "@/components/test-slider.vue";

export default {
  name: "app",
  components: {
    'slider': Slider
  }
}
</script>

<style lang="css" scoped>
</style>
