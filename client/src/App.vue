<template lang="html">
  <div id="app">
    <!-- <slider></slider>
    <slider-grid :emissions="emissions" />
    <p v-for="emission in emissions">{{emission.name}}</p>
    <p>{{this.emissions[1].name}}</p> -->
    <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category>
    <p>{{this.totalValues}}</p>
  </div>
</template>

<script>
import Slider from "@/components/TestSlider.vue";
import TestSlider from "@/components/TestSlider.vue";
import Category from "@/components/Category.vue";
import {eventBus} from "./main.js";

export default {
  name: "app",

  data (){
    return {
      emissions: [],
      totalValues: 0,
      finalTotalValues: {}

    }
  },

  components: {
    'slider': Slider,
    'slider-grid': TestSlider,
    'category': Category
  },

  mounted(){
    this.fetchData();
    eventBus.$on('value-selected', (slider) => {
      this.totalValues= 0
      this.totalValues += parseInt(slider)
    })
  },

  computed(){
    eventBus.$on('value-selected', (slider) => {
      this.totalValues= 0
      this.totalValues += parseInt(slider)
    })
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
