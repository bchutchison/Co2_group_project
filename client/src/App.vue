<template lang="html">
  <div id="app">
    <!-- <slider></slider>
    <slider-grid :emissions="emissions" />
    <p v-for="emission in emissions">{{emission.name}}</p>
    <p>{{this.emissions[1].name}}</p> -->
    <category :emissions="emissions" />
  </div>
</template>

<script>
import Slider from "@/components/TestSlider.vue";
import TestSlider from "@/components/TestSlider.vue";
import Category from "@/components/Category.vue";

export default {
  name: "app",

  data (){
    return {
      emissions: []
    }
  },

  components: {
    'slider': Slider,
    'slider-grid': TestSlider,
    'category': Category
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
