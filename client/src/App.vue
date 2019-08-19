<template lang="html">
  <div id="app">
    <slider></slider>
    <slider-grid :emissions="emissions" />
    <p v-for="emission in emissions">{{emission.name}}</p>
    <p>{{this.emissions[1].name}}</p>
  </div>
</template>

<script>
import Slider from "@/components/TestSlider.vue";
import TestSlider from "@/components/TestSlider.vue";

export default {
  name: "app",

  data (){
    return {
      emissions: []
    }
  },

  components: {
    'slider': Slider,
    'slider-grid': TestSlider
  },

  mounted(){
    this.fetchData();
  },

  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/emissions")
        .then(res => res.json())
        .then(emissions => this.emissions = emissions)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
