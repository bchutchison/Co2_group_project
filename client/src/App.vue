<template lang="html">
  <div id="app">
    <slider></slider>
  </div>
</template>

<script>
import Slider from "@/components/testSlider.vue";

export default {
  name: "app",
  components: {
    'slider': Slider
  }
}
</script>

<style lang="css" scoped>
</style>
