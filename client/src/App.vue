<template lang="html">
  <div id="app">
    <!-- <slider></slider>
    <slider-grid :emissions="emissions" />
    <p v-for="emission in emissions">{{emission.name}}</p>
    <p>{{this.emissions[1].name}}</p> -->
    <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category>
    <!-- <p>{{this.totalValues}}</p> -->
    <h1>{{totalC02Value}}</h1>
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
      finalTotalValues: {},
      allValues: []
    }
  },

  components: {
    'slider': Slider,
    'slider-grid': TestSlider,
    'category': Category
  },

  mounted(){
    this.fetchData();
    eventBus.$on('value-selected', (sliderValue) => {
      console.log("In App.vue", Object.keys(sliderValue));
      const key = Object.keys(sliderValue)[0];
      this.finalTotalValues[key] = Object.values(sliderValue)[0];
      this.allValues = Object.values(this.finalTotalValues);
    })
  },

  computed: {
    totalC02Value: function(){
      return this.allValues.reduce( (total, value) => {
        return total + parseInt(value)
      }, 0)
    }
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
