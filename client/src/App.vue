<template lang="html">
  <div id="app">
    <!-- <slider></slider>
    <slider-grid :emissions="emissions" />
    <p v-for="emission in emissions">{{emission.name}}</p>
    <p>{{this.emissions[1].name}}</p> -->
    <category v-for="(emission, index) in this.emissions"
    :emission="emission" :key="index"></category>
    <!-- <p>{{this.totalValues}}</p> -->
    <p>{{totalValue}}</p>
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
    eventBus.$on('value-selected', (sliderValue) => {
      // console.log("In App.vue", Object.keys(sliderValue));
      this.finalTotalValues[Object.keys(sliderValue)[0]] = Object.values(sliderValue)[0]
      // console.log(this.finalTotalValues)
    })
  },

  computed: {
    totalValue: function(){
      var summedTotal = []
      var summedTotal = Object.keys(this.finalTotalValues).map(val =>
        this.finalTotalValues[val]);
      }
    //   const summedTotal = []
    //   summedTotal.push(Object.values(this.finalTotalValues))
    //   console.log(summedTotal);
    // }
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
